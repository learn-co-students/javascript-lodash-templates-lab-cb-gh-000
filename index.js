function createPost() {
  var pageTemplate = document.getElementById("page-template").innerHTML;
  var templateFn = _.template(pageTemplate);
  document.getElementsByTagName('main')[0].innerHTML += pageTemplate;
  var postTemplate = document.getElementById("post-template").innerHTML;
  templateFn = _.template(postTemplate);
  var postHTML = templateFn({ 'title': 'Lodash Templates',
    'author': 'Flatiron School'});
  document.getElementById('post').innerHTML += postHTML;
  var commentsTemplate = document.getElementById("comments-template").innerHTML;
  templateFn = _.template(commentsTemplate);
  document.getElementById('post').innerHTML += commentsTemplate
}

function postComment() {
  var commenter = document.getElementById("commenterName").value;
  var comment = document.getElementById("commentText").value;

  //create template string
  var commentTemplate = document.getElementById("comment-template").innerHTML;
  //create template function
  var templateFn = _.template(commentTemplate);

  var commentsDiv = document.getElementById("comments");

  //execute template function with JSON object for the interpolated values
  var templateHTML = templateFn({ 'comment': comment, 'commenter': commenter });

  //append rather than replace!
  commentsDiv.innerHTML += templateHTML;
}
