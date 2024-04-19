export const selectPostAndComments = (reduxState) => {
  const post = reduxState.postPage.post;
  const comments = reduxState.postPage.comments;

  return reduxState.postPage.loading
    ? null
    : { post: post, comments: comments };
};
