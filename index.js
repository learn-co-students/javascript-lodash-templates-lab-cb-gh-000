function createPost() {
  var author = document.getElementById("author").value;
  var title = document.getElementById("title").value;
  var post = document.getElementById("postText").value;

  var pageTemplate = document.getElementById("page-template").innerHTML;
  var pageTemplateFn = _.template(pageTemplate);
  var pageTemplateHtml = pageTemplateFn();

  document.getElementById("main").innerHTML += pageTemplateHtml;

  var postTemplate = document.getElementById("post-template").innerHTML;

  var templateFn = _.template(postTemplate);
  var postDiv = document.getElementById("post");
  var templateHTML = templateFn({ 'footer': author, 'header': title, 'post' : post });

  postDiv.innerHTML += templateHTML;

  var commentContainerTemplate = document.getElementById("comments-template").innerHTML;
  var containerTemplateFn = _.template(commentContainerTemplate);
  var containerHtml = containerTemplateFn();
  document.getElementById("main").innerHTML += containerHtml;
}

function postComment() {
  var commenter = document.getElementById("commenterName").value;
  var comment = document.getElementById("commentText").value;

  var commentTemplate = document.getElementById("comment-template").innerHTML;
  var templateFn = _.template(commentTemplate);
  var commentsDiv = document.getElementById("comments");

  var templateHTML = templateFn({ 'comment': comment, 'commenter': commenter });
  commentsDiv.innerHTML += templateHTML;
}
