import { Common, WithId, WithAuthorId, Control } from "./common.types";

export interface TrainingCourseProps extends Common {}

export interface TrainingCourseInterface
  extends TrainingCourseProps,
    WithId,
    WithAuthorId,
    Control {}
