from rest_framework import viewsets, status
from rest_framework.decorators import action, api_view
from rest_framework.response import Response
from django.core.mail import send_mail
from .models import Document, DocumentPage
from .serializers import DocumentSerializer, DocumentListSerializer
from .utils import process_document

@api_view(['POST'])
def contact_admin(request):
    name = request.data.get('name')
    email = request.data.get('email')
    message = request.data.get('message')

    if not name or not email or not message:
        return Response({'error': 'All fields are required'}, status=status.HTTP_400_BAD_REQUEST)

    try:
        # Note: you should configure ADMIN_EMAIL or similar in settings.
        # This will send the user's email as the from_email, but it might fail SPF checks if real SMPT is used. 
        # The best practice is to send FROM your own default email, and set the reply_to to the user's email.
        send_mail(
            subject=f"New Contact Form Submission from {name}",
            message=f"Name: {name}\nEmail: {email}\n\nMessage:\n{message}",
            from_email=None, # Uses DEFAULT_FROM_EMAIL
            recipient_list=['admin@example.com'], # Using placeholder email, can be updated later
            fail_silently=False,
        )
        return Response({'success': 'Message sent successfully'}, status=status.HTTP_200_OK)
    except Exception as e:
        import traceback
        traceback.print_exc()
        return Response({'error': 'Failed to send email. Please try again later.'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

class DocumentViewSet(viewsets.ModelViewSet):
    queryset = Document.objects.all().order_by('-uploaded_at')
    
    def get_serializer_class(self):
        if self.action == 'list':
            return DocumentListSerializer
        return DocumentSerializer
    
    def get_serializer_context(self):
        context = super().get_serializer_context()
        context['request'] = self.request
        return context
    
    def create(self, request):
        file = request.FILES.get('file')
        title = request.data.get('title', file.name if file else 'Untitled')

        if not file:
            return Response({'error': 'No file provided'}, status=400)

        ext = file.name.split('.')[-1].lower()

        if ext not in ['pdf', 'docx']:
            return Response({'error': 'Unsupported file type'}, status=400)

        document = Document.objects.create(
            title=title,
            file=file,
            file_type=ext
        )

        serializer = DocumentSerializer(document, context={'request': request})
        return Response(serializer.data, status=201)

    
    @action(detail=True, methods=['get'])
    def pages(self, request, pk=None):
        document = self.get_object()
        serializer = DocumentSerializer(document, context={'request': request})
        return Response(serializer.data)
    
    @action(detail=False, methods=['get'])
    def latest(self, request):
        document = Document.objects.order_by('-uploaded_at').first()

        if not document:
            return Response(
                {'error': 'No newsletter found'},
                status=status.HTTP_404_NOT_FOUND
            )

        serializer = DocumentSerializer(document, context={'request': request})
        return Response(serializer.data)
