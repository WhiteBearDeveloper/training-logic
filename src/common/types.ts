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

export interface CommonWithAndProfileId extends WithId, WithProfileId {
  name: string;
}

export interface DateInfoFromDatabase {
  createdAt: string;
  updatedAt: string;
}
