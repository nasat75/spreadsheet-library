import { Sheet } from "./Sheet";
import { Utils } from "./Utils";

export class Books {
  private sheet: any;
  private utils: any;

  constructor() {
    this.sheet = { Sheet: this.sheet };
    this.utils = { Utils: this.utils };
  }
  public getTitleByIsbn = () => {
    const isbn = this.sheet.getISBN();
    const url = this.sheet.generateURL("isbn", isbn);
    const result = this.sheet.throwAPI(url);
    console.log({ result });
    return result;
  };

  public getIsbnByTitle = () => {
    const title = this.sheet.getTitleName();
    const url = this.sheet.generateURL("title", title);
    const result = this.sheet.throwAPI(url);
    console.log({ result });
    return result;
  };
}
