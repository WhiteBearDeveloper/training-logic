import { Common, WithId, WithAuthorId, Control } from "./common.types";

export interface TrainingCourseProps extends Common {}

export interface TrainingCourseModel
  extends TrainingCourseProps,
    WithId,
    WithAuthorId,
    Control {}

    export type TrainingCourseDeleteAnswer = Promise<number>;