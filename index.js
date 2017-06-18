
function createPost(){

  var title = document.getElementById("title").value;
  var author = document.getElementById("author").value;
  var body = document.getElementById("body").value;

  // templates
  var postTemplate = document.getElementById("post-template").innerHTML;
  // var page-template = document.getElementById("page-template").innerHTML;
  // var comments-template = document.getElementById("comments-template").innerHTML;
  // var comment-template = document.getElementById("comment-template").innerHTML;

  var templateFn = _.template(postTemplate);
  var blogContent = document.getElementById("blog");

  var templateHTML = templateFn({
    'title': title,
    'author': author,
    'body': body
  });

  blogContent.innerHTML += templateHTML;
}
