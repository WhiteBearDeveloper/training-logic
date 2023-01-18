import { DateInfoFromDatabase, SexEnum, WithId } from "../common/types";

export interface ProfileProps {
  firstName: string;
  lastName: string;
  middleName: string;
  birthDate: string;
  sex: SexEnum;
}

export interface ProfileModel extends ProfileProps, WithId {}
