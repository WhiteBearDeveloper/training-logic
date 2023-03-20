import { Common, WithId, WithAuthorId } from "./common.types";

export interface TrainingCourseProps extends Common {}

export interface TrainingCourseInterface
  extends TrainingCourseProps,
    WithId,
    WithAuthorId {}
