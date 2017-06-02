function wmap_getSheetId(sheet_name) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sheet_name);
  var tmp = sheet.getSheetId();
  return tmp;
}

//シート名をすべて取得
function wmap_getSheetsName(){
  var sheets = SpreadsheetApp.getActiveSpreadsheet().getSheets();
  var sheet_names = new Array();
  
  if (sheets.length > 1) {  
    for(var i = 0;i < sheets.length; i++)
    {
      sheet_names.push(sheets[i].getName());
    }
  }
  return sheet_names;
}

//関数を設置したシートのシート名を取得
function wmap_getSheetName(){
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var sheet_name = '';
  sheet_name = sheet.getName();
  return sheet_name;
}

//スプレッドシートのURLを取得
function wmap_getSpreadsheetURL(){
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var ss_url = ss.getUrl();
  return ss_url;
}