import { Properties } from './properties';
import { sheet } from './sheet';

const props = new Properties();


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

export function throwAPI(apiUrl: string) {
  const response = UrlFetchApp.fetch(apiUrl);
  const content = JSON.parse(response.getContentText());
  console.log(content);
  Logger.log(`content => ${JSON.stringify(content)}`);
  return content;
}

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

export function getISBN() :string {
  let output: string = "";
  return output;
}

export function getBookTitleByISBN() {
// export getBookTitleByISBN = (): any => {
  const isbn = getISBN();
  const urlByISBN = generateURL('isbn', isbn);
  const resultByISBN = throwAPI(urlByISBN);
  return resultByISBN;
}

// export function getBookISBNByTitle() {
//   const titleName = getTitleName();
//   const urlByTitle = generateURL('title', titleName);
//   const resultByTitle = throwAPI(url);
//   return resultByTitle;
// }


export function getBookInfo() {
}
