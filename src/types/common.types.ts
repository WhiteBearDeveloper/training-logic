export interface WithId {
  id: number;
}

export interface Common {
  name: string;
}

export interface CommonWithId extends Common, WithId {}

export interface DateInfoFromDatabase {
  createdAt: string;
  updatedAt: string;
}

export interface WithProfileId {
  profileId: number;
}

export interface WithAuthorId {
  authorId: number;
}

export interface CommonWithProfileId extends CommonWithId, WithProfileId {}
export interface CommonWithAuthorId extends CommonWithId, WithAuthorId {}

export interface Control {
  control?: ControlProps;
}

export interface ControlProps {
  isEditable?: boolean;
}
