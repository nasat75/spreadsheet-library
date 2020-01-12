export class Properties {
  private property: any;
  constructor() {
    this.property = PropertiesService.getScriptProperties();
  }

  public getKey = (key: string): string => {
    return this.property.getProperty(key);
  };

  public setKey = (key: string, val: string): void => {
    try {
      this.property.setProperty(key, val);
    } catch (e) {
      console.log(`ERROR => ${e}`);
    }
  };

  public remove = (key: string): void => {
    try {
      this.property.deleteProperty(key);
    } catch (e) {
      console.log(`ERROR => ${e}`);
    }
  };
}
