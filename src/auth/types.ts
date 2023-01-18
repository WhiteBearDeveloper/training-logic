import { WithId } from "../common/types";

export interface AuthProps {
  email: string;
  password: string;
}

interface AuthAnswer extends WithId {
  token: string;
}
