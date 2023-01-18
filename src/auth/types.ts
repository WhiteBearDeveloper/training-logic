import { WithId } from "../common/types";

export interface AuthProps {
  email: string;
  password: string;
}

export interface AuthAnswer extends WithId {
  token: string;
}
