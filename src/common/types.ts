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

export interface Common {
  name: string;
}

export interface CommonWithId extends Common, WithId {}

export interface CommonWithProfileId extends CommonWithId, WithProfileId {}

export interface DateInfoFromDatabase {
  createdAt: string;
  updatedAt: string;
}
