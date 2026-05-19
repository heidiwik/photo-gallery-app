export interface IList {
    "@odata.context": string;
    "@odata.etag": string;
    createdDateTime: Date;
    description: string;
    eTag: string;
    id: string;
    lastModifiedDateTime: Date;
    name: string;
    webUrl: string;
    displayName: string;
    createdBy: CreatedBy;
    lastModifiedBy: LastModifiedBy;
    parentReference: ParentReference;
    list: Settings;
}

export interface CreatedBy {
  user: User;
}

export interface LastModifiedBy {
  user: User;
}

export interface User {
  email?: string;
  id?: string;
  displayName: string;
}

export interface ParentReference {
  siteId: string;
}

export interface Settings {
  contentTypesEnabled: boolean;
  hidden: boolean;
  template: string;
}