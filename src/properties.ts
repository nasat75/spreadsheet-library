export class Properties {
  private properties: any;
  constructor() {
    this.properties = PropertiesService.getScriptProperties();
  }

  public getKey = (key: string): string => {
    return this.properties.getProperty(key);
  };

  public setKey = (key: string, val: string): void => {
    try {
      this.properties.setProperty(key, val);
    } catch (e) {
      console.log(`ERROR => ${e}`);
    }
  };

  public remove = (key: string): void => {
    try {
      this.properties.deleteProperty(key);
    } catch (e) {
      console.log(`ERROR => ${e}`);
    }
  };
}
