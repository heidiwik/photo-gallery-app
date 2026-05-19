export interface ISite {
    "@odata.context": string;
    createdDateTime: Date;
    description: string;
    id: string;
    lastModifiedDateTime: Date;
    name: string;
    webUrl: string;
    displayName: string;
    siteCollection: SiteCollection;
}

export interface SiteCollection {
  hostname: string;
}