import { Properties } from './properties';

const props = new Properties();

export function getTitleName(): string {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  // if (spreadsheet === null) return null
  const sheet = spreadsheet.getActiveSheet();
  // column => e.g. `B:$row`
  const row = sheet.getActiveRange();
  const title = '';
  if (typeof row !== 'number') return ''
  sheet.getRange(row, 2);
  console.log(title);
  return title;
}

export function getISBN(title: string) {
  let output: string = "";
  return output;
}

export function getBookTitle() {
  const titleName = getTitleName();
  const url = generateURL('isbn', getISBN());
  const result = UrlFetchApp.getRequest()
}

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
  let urlStr = `${props.getKey('RAKUTEN_API_BASE_URL')}format=json`;
  if (searchType === "isbn") {
    urlStr += `&isbn=${args}`;
  } else {
    urlStr += `&title=${args}`;
  }
  urlStr += `&applicationId=${props.getKey('RAKUTEN_APP_ID')}`;
  return utf8Encode(urlStr);
}

export function getBookInfo() {
}
