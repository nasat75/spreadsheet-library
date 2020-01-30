export class Properties {
  private _properties: any;
  constructor() {
    this._properties = PropertiesService.getScriptProperties();
  }
  get key(private key: string) {
    return this._properties.getProperty(key);
  }
  set key(private key: string, val: string) {
    try {
      this._properties.setProperty(key, val);
    } catch (e) {
      console.log(`ERROR => ${e}`);
    }
  }
  public remove = (key: string): void => {
    try {
      this._properties.deleteProperty(key);
    } catch (e) {
      console.log(`ERROR => ${e}`);
    }
  };
}
