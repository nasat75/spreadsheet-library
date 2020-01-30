import { Properties } from "./Properties";

export class Utils {
  private props: any;
  constructor() {
    this.props = new Properties();
  }
  public utf8Encode = (strValue: string) => {
    return unescape(encodeURIComponent(strValue));
  };

  public generateURL = (searchType: string, args: string) => {
    let urlStr = `${this.props.getKey("RAKUTEN_API_BASE_URL")}format=json`;
    if (searchType === "isbn") {
      urlStr += `&isbn=${args}`;
    } else {
      urlStr += `&title=${args}`;
    }
    urlStr += `&applicationId=${this.props.getKey("RAKUTEN_APP_ID")}`;
    return this.utf8Encode(urlStr);
  };

  public throwAPI(apiUrl: string) {
    const response = UrlFetchApp.fetch(apiUrl);
    const content = JSON.parse(response.getContentText());
    console.log(content);
    Logger.log(`content => ${JSON.stringify(content)}`);
    return content;
  }
}
