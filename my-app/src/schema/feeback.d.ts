import type { ID, String, Int, Float, Boolean } from "./_basic";
import type { Member as BasicMember } from "./member";

/** - 會員 */
interface Member extends BasicMember {
  /** - 意見回饋列表 */
  feedbackSubmissions: FeedbackSubmission[];
  /** - 意見回饋總數 */
  feedbackSubmissionCount: Int;
}
/** - 意見回饋 */
interface FeedbackSubmission {
  /** - ID */
  id: ID;
  /** - 會員 */
  member?: Member;
  /** - 說明 */
  description: String;
  /** - 分數 */
  score?: Int;
  /** - 建立日期 */
  createdAt: Date;
  /** - 更新日期 */
  updatedAt: Date;
}
/** - 意見回饋滿意度 */
interface FeedbackSatisfaction {
  /** - 分數列表 */
  scores: FeedbackSatisfactionScore[];
  /** - 平均分數 */
  averageScore: Int;
}
/** - 意見回饋滿意度分數 */
interface FeedbackSatisfactionScore {
  /** - 分數 */
  score: Int;
  /** - 意見回饋總數 */
  feedbackSubmissionCount: Int;
  /** - 意見回饋百分比 */
  feedbackSubmissionPercentage: Float;
}
