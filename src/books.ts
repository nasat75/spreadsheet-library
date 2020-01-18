import { Sheet } from "./Sheet";
export class Books {
  private sheet: any;
  constructor() {
    this.sheet = { Sheet: this.sheet };
  }
  public getBookTitleInfoByISBN = () => {
    // export getBookTitleByISBN = (): any => {
    const isbn = this.sheet.getISBN();
    const url = this.sheet.generateURL("isbn", isbn);
    const result = this.sheet.throwAPI(url);
    return result;
  };

  public getBookISBNInfoByTitle = () => {
    const title = this.sheet.getTitleName();
    const url = this.sheet.generateURL("title", title);
    const result = this.sheet.throwAPI(url);
    return result;
  };
}
