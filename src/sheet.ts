import { Properties } from './Properties';
export class Sheet {
  private spreadsheet: any;
  private sheet: any;
  private ISBN_COLUMN: number;
  private TITLE_COLUMN: number;
  private properties: any;

  constructor() {
    this.properties = new Properties();
    this.spreadsheet = this.properties.getKey('SPREADSHEET_ID');
    this.sheet = this.spreadsheet.getSheet();
    this.ISBN_COLUMN = 6;
    this.TITLE_COLUMN = 2;
  }
  public getSpreadsheet() {
    return this.spreadsheet;
  }
  public getSheet() {
    return this.sheet;
  }
  public getTitleName = (): string => {
    const row = this.sheet.getActiveRange();
    const title = "";
    if (typeof row !== "number") return "";
    this.sheet.getRange(row, this.TITLE_COLUMN);
    console.log(title);
    return title;
  };
  public getISBN = (): string => {
    const row = this.sheet.getActiveRange();
    const isbn = "";
    if (typeof row !== "number") return "";
    this.sheet.getRange(row, this.ISBN_COLUMN);
    console.log(isbn);
    return isbn;
  };
}
