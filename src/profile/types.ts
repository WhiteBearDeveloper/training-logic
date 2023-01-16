import { DateInfoFromDatabase, SexEnum, WithId } from "../common/types";

export interface ProfileInterface extends WithId, DateInfoFromDatabase {
  firstName: string;
  lastName: string;
  middleName: string;
  birthDate: string;
  sex: SexEnum;
}
