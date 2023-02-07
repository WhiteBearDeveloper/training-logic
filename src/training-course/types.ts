import {
  Common,
  WithId,
} from "@whitebeardeveloper/common-logic/logic/types/base.types";
import { WithProfileId } from "../common/types";

export interface TrainingCourseProps extends Common {}

export interface TrainingCourseModel
  extends TrainingCourseProps,
    WithId,
    WithProfileId {}
