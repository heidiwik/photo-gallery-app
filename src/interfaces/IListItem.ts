export interface IListItem {
  "@odata.context": string;
  "@odata.etag": string;
  createdDateTime: Date;
  eTag: string;
  id: string;
  lastModifiedDateTime: Date;
  webUrl: string;
  createdBy: CreatedBy;
  lastModifiedBy: LastModifiedBy;
  parentReference: ParentReference;
  contentType: ContentType;
  "fields@odata.context": string;
  fields: Fields;
  folder: Folder;
  name: string;
}

export interface CreatedBy {
  user: User;
}

export interface LastModifiedBy {
  user: User;
}

export interface User {
  email: string;
  id: string;
  displayName: string;
}

export interface ParentReference {
  id: string;
  siteId: string;
  driveId: string; // Separate list item and drive item?
}

export interface ContentType {
  id: string;
  name: string;
}

export interface Fields {
  "@odata.etag": string;
  FileLeafRef: string;
  id: string;
  ContentType: string;
  Created: Date;
  AuthorLookupId: string;
  Modified: Date;
  EditorLookupId: string;
  _CheckinComment: string;
  LinkFilenameNoMenu: string;
  LinkFilename: string;
  DocIcon: string;
  FileSizeDisplay: string;
  ItemChildCount: string;
  FolderChildCount: string;
  _ComplianceFlags: string;
  _ComplianceTag: string;
  _ComplianceTagWrittenTime: string;
  _ComplianceTagUserId: string;
  _CommentCount: string;
  _LikeCount: string;
  _DisplayName: string;
  Edit: string;
  _UIVersionString: string;
  ParentVersionStringLookupId: string;
  ParentLeafNameLookupId: string;
}

export interface Folder {
  childCount: number;
}