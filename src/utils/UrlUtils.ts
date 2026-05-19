export const SpLocation = {
  Site: 0,
  Drive: 1,
  List: 2
} as const;

export type SpLocation = typeof SpLocation[keyof typeof SpLocation];

export default class UrlUtils {

  public static getUrl(webUrl: string, location: SpLocation): string {
    const count: number = webUrl.indexOf("/sites/") !== -1 || webUrl.indexOf("/teams/") !== -1 ? 5 + location : 3 + location;
    return this.encodeUrl(webUrl.split('/').splice(0, count).join('/'));
  }

  public static getFolderPath(webUrl: string): string {
    let folderPath: string = "";
    if (webUrl !== null)
      folderPath = this.encodeUrl(webUrl).replace(this.getUrl(webUrl, SpLocation.Drive), "");

    return folderPath !== "" ? `root:${folderPath}:/` : "root/";  
  }

  public static isSitePagesLibrary(): boolean {
    return window.location.href.indexOf('/SitePages/') !== -1;
  }

  public static isDocumentsLibrary(): boolean {
    return this.encodeUrl(window.location.href).indexOf('/Jaetut%20asiakirjat/') !== -1 || this.encodeUrl(window.location.href).indexOf('/Shared%20Documents/') !== -1;
  }

  public static equals(url1: string, url2: string): boolean {
    return this.encodeUrl(this.trimUrl(url1)) === this.encodeUrl(this.trimUrl(url2));
  }

  public static trimUrl(url: string): string {
    return (url.charAt(url.length - 1) === '/') ? url.substring(0, url.length - 1) : url;
  }

  private static encodeUrl(url: string): string {
    return url.replace(/\s/g, "%20");
  }
}