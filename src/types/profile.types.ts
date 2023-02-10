import { WithId } from "./common.types";

export enum SexEnum {
  "male" = 1,
  "female" = 2,
}

export interface ProfileProps {
  firstName: string;
  lastName: string;
  middleName: string;
  birthDate: string;
  sex: SexEnum;
}

export interface ProfileModel extends ProfileProps, WithId {}
