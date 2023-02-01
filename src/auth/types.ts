import { WithId } from "../common/types";

interface AuthCommon {
  email: string;
}
export interface AuthProps extends AuthCommon {
  password: string;
}

export interface AuthAnswer extends WithId, AuthCommon {
  token: string;
}
