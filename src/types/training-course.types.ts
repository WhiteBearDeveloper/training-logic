import { Common, WithId, WithProfileId } from "./common.types";

export interface TrainingCourseProps extends Common {}

export interface TrainingCourseModel
  extends TrainingCourseProps,
    WithId,
    WithProfileId {}
