export enum SexEnum {
  "male" = 1,
  "female" = 2,
}

export interface WithId {
  id: number;
}
export interface WithProfileId {
  profileId: number;
}

export interface Common extends WithId {
  name: string;
}
export interface CommonWithProfileId extends Common, WithProfileId {}

export interface DateInfoFromDatabase {
  createdAt: string;
  updatedAt: string;
}
