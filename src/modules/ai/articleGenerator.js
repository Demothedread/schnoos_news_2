export const generateArticle = (submission) => ({
  id: submission.id,
  headline: `${submission.children} Make the Family Front Page`,
  byline: `Filed by ${submission.contributor} · Scheduled ${submission.publishDate}`,
  body: `In this week's Schnoos News dispatch, ${submission.notes} This piece was drafted by our AI newsroom from the weekly family form queue and styled for the analog press.`
});
