export class sheet {
  private spreadsheet: any;
  private sheet: any;
  constructor() {
    this.spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    this.sheet = this.spreadsheet.getActiveSheet();
  }

  public getSpreadsheet() {
    return this.spreadsheet;
  }

  public getSheet() {
    return this.sheet;
  }

//   public getTitleName(): string {
  public getTitleName = (): string => {
    const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    // if (spreadsheet === null) return null
    const sheet = spreadsheet.getActiveSheet();
    // column => e.g. `B:$row`
    const row = sheet.getActiveRange();
    const title = "";
    if (typeof row !== "number") return "";
    sheet.getRange(row, 2);
    console.log(title);
    return title;
  }
}
