function doGet(){

  var sheet = SpreadsheetApp.getActiveSheet();
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheets()[0];
  var lastRow = sheet.getLastRow();
  var EmailCOL = 2;
  var SubjectCOL = 3;
  var PostCOL = 4;
  var SummaryCOL = 5;
  var lastRow = sheet.getLastRow();
  var getSUB = sheet.getRange(lastRow, SubjectCOL).getValue();
  var getPost = sheet.getRange(lastRow, PostCOL).getValue();
  var getEmail = sheet.getRange(lastRow, EmailCOL).getValue();
  var getSummary = sheet.getRange(lastRow, SummaryCOL).getValue();
  var EMAIL_SENT = 'EMAIL_SENT';

  if (getSummary !== EMAIL_SENT) { // Prevents sending duplicates
      var subject = 'Sending emails from a Spreadsheet';
      MailApp.sendEmail(getEmail, getSUB, getPost);
      sheet.getRange(lastRow, SummaryCOL).setBackground('green')
      sheet.getRange(lastRow, SummaryCOL).setValue(EMAIL_SENT);
      // Make sure the cell is updated right away in case the script is interrupted
      SpreadsheetApp.flush();
    }

}
