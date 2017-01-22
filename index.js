function postComment() {

  var commentsTemplate = document.getElementById("comments-template").innerHTML;
  var commentsTemplateFn = _.template(commentsTemplate);
  var commentsTemplateHTML = commentsTemplateFn({});
  document.body.innerHTML += commentsTemplateHTML;

  var commenter = document.getElementById("commenterName").value;
  var comment = document.getElementById("commentText").value;
  //insert comment into "comments" div in this format:
  var commentTemplate = document.getElementById("comment-template").innerHTML;
  var templateFn = _.template(commentTemplate)
  var commentsDiv = document.getElementById("comments");
  var templateHTML = templateFn({ 'comment': comment, 'commenter': commenter });
  commentsDiv.innerHTML += templateHTML;
}

function createPost(){
  var author = document.getElementById("authorName").value;
  var title = document.getElementById("postTitle").value;
  var post = document.getElementById("postBody").value;
  //insert comment into "comments" div in this format:
  var postTemplate = document.getElementById("post-template").innerHTML;
  var postTemplateFn = _.template(postTemplate);
  var postTemplateHTML = postTemplateFn({ 'author': author, 'title': title, 'post': post });

  //var postsDiv = document.getElementById("post").innerHTML;
  //postsDiv += postTemplateHTML;

  var pageTemplate = document.getElementById("page-template").innerHTML;
  var pageTemplateFn = _.template(pageTemplate);
  var pageTemplateHTML = pageTemplateFn({});
  document.body.innerHTML += pageTemplateHTML;
}
