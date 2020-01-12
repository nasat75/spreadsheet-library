export function getTitleName() {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = spreadsheet.getActiveSheet();
  const row = sheet.getActiveRange().getRow();
  // column => e.g. `B:$row`
  const title = sheet.getRange(row, 2);
  console.log(title);
  return title;
}

export function getISBN(title: string) {
  let output: string = "";
  return output;
}

export function getTitle() {}

export function throwAPI(apiUrl: string) {
  const response = UrlFetchApp.fetch(apiUrl);
  const content = JSON.parse(response.getContentText());
  console.log(content);
  return content;
}

export function utf8Encode(strValue: string) {
  return unescape(encodeURIComponent(strValue));
}

export function generateURL(searchType: string, args: string) {
  const rakutenAppID = env("RAKUTEN_APP_ID");
  let urlStr = `${env("RAKUTEN_API_BASE_URL")}format=json`;
  if (searchType === "isbn") {
    urlStr += `&isbn=${args}`;
  } else {
    urlStr += `&title=${args}`;
  }
  urlStr += `&applicationId=${env("RAKUTEN_APP_ID")}`;
  return utf8Encode(urlStr);
}

export function getBookInfo() {}
