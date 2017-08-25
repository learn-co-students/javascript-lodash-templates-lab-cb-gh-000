function createPost() {
  const postTitle = document.getElementById("post-title").value;
  const postContent = document.getElementById("post-content").value;
  const postFooter = document.getElementById("post-author").value;

  const postTemplate = document.getElementById("post-template").innerHTML;
  const templateFn = _.template(postTemplate);
  const templateHTML = templateFn({
    postContent,
    postFooter,
    postTitle,
  });

  const commentsTemplate = document.getElementById("comments-template").innerHTML;
  const commentsTemplateFn = _.template(commentsTemplate);
  const commentsTemplateHTML = commentsTemplateFn();

  const pageDiv = document.getElementById("page");
  const pageTemplate = document.getElementById("page-template").innerHTML;
  const pageTemplateFn = _.template(pageTemplate);
  const pageTemplateHTML = pageTemplateFn({
    post: templateHTML,
    comments: commentsTemplateHTML,
  });

  pageDiv.innerHTML += pageTemplateHTML;

}

function postComment() {
  const comment = document.getElementById("comment").value;
  const commenter = document.getElementById("commenter").value;

  const commentTemplate = document.getElementById("comment-template").innerHTML;
  const templateFn = _.template(commentTemplate);
  const templateHTML = templateFn({
    comment,
    commenter,
  });

  const commentsDiv = document.getElementById("comments");

  commentsDiv.innerHTML += templateHTML;
}
