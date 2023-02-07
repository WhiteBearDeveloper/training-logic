import { WithId } from "@whitebeardeveloper/common-logic/logic/types/base.types";
import { SexEnum } from "@whitebeardeveloper/common-logic/logic/types/user.types";

export interface ProfileProps {
  firstName: string;
  lastName: string;
  middleName: string;
  birthDate: string;
  sex: SexEnum;
}

export interface ProfileModel extends ProfileProps, WithId {}
