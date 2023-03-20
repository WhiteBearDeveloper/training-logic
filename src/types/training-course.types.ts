import { Common, WithId, WithAuthorId } from "./common.types";

export interface TrainingCourseProps extends Common {}

export interface TrainingCourseModel
  extends TrainingCourseProps,
    WithId,
    WithAuthorId {}
