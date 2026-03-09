// ==============================================================================
// GOOGLE SHEETS INTEGRATION CONFIGURATION
// ==============================================================================
// To connect your forms to Google Sheets, you need to create a Google Apps Script
// that handles POST requests.
// 
// STEPS TO CREATE YOUR WEB APP URL (Do this ONCE for your Master Events Sheet):
// 1. Create a new Google Sheet.
// 2. Go to Extensions > Apps Script.
// 3. Paste the following code into the script editor:
/*
      function doPost(e) {
        var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
        var data = JSON.parse(e.postData.contents);
        
        // Add headers if the sheet is empty
        if (sheet.getLastRow() === 0) {
          if (data.transactionId) {
             sheet.appendRow(['Date', 'Event Title', 'Name', 'Email', 'Transaction ID']);
          } else {
             sheet.appendRow(['Date', 'Event Title', 'Name', 'Email', 'Transaction ID']);
          }
        }
        
        // Append the new row
        if (data.transactionId) {
           sheet.appendRow([new Date(), data.eventTitle, data.name, data.email, data.transactionId]);
        } else {
           sheet.appendRow([new Date(), data.eventTitle, data.name, data.email, "N/A"]);
        }
        
        return ContentService.createTextOutput(JSON.stringify({"result":"success"}))
          .setMimeType(ContentService.MimeType.JSON);
      }
*/
// 4. Click 'Deploy' > 'New deployment'.
// 5. Select type: 'Web app'.
// 6. Execute as: 'Me'.
// 7. Who has access: 'Anyone'.
// 8. Click 'Deploy' and authorize access.
// 9. Copy the long "Web app URL" you are given and paste it below.
// ==============================================================================

// ALL EVENTS WILL USE THIS ONE LINK:
export const masterEventSheetLink = "PASTE_WEB_APP_URL_FOR_ALL_EVENTS_HERE";

// Generic contact form spreadsheet database
export const contactFormSheetLink = "PASTE_WEB_APP_URL_FOR_CONTACT_FORM_HERE";
