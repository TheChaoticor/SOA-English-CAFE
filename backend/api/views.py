from rest_framework import viewsets, status
from rest_framework.decorators import action
from rest_framework.response import Response
from .models import Document, DocumentPage
from .serializers import DocumentSerializer, DocumentListSerializer
from .utils import process_document

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
