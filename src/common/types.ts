import { CommonWithId } from "@whitebeardeveloper/common-logic/logic/types/base.types";

export interface WithProfileId {
  profileId: number;
}

export interface CommonWithProfileId extends CommonWithId, WithProfileId {}
