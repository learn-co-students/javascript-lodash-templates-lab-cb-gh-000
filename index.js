function createPost() {
  event.preventDefault();
  const title = document.querySelector("#title").value;
  const body = document.querySelector("#body").value;
  const author = document.querySelector("#author").value;

  /// FOR RENDERING THE PAGE ///
  const page = document.querySelector("#page-template").innerHTML;
  let pageEl = document.querySelector("#page");
  const pageTemplateFn = _.template(page);
  const pageHTML = pageTemplateFn({});
  pageEl.innerHTML += pageHTML;

  /// FOR RENDERING THE POST ///
  const post = document.querySelector("#post-template").innerHTML;
  const postEl = document.querySelector("#post");
  const postTemplateFn = _.template(post);
  const postHTML = postTemplateFn({title: title, body: body, author:author});
  postEl.innerHTML += postHTML;

  /// FOR RENDERING THE COMMENT FORM ///
  const comments = document.querySelector("#comments-template").innerHTML;
  const commentsTemplateFn = _.template(comments);
  const commentsHTML = commentsTemplateFn({});
  pageEl.innerHTML += commentsHTML;
}

function postComment() {
  event.preventDefault();
  const commenter = document.querySelector("#commenterName").value;
  const comment = document.querySelector("#commentText").value;
  const commentTemplate = document.querySelector("#comment-template").innerHTML;

  const templateFn = _.template(commentTemplate);
  const commentsDiv = document.querySelector("#comments");

  const templateHTML = templateFn({ comment: comment, commenter: commenter });

  commentsDiv.innerHTML += templateHTML;
}
