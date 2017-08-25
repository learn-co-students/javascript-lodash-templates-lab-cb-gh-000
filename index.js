function postComment(){
  const author = document.getElementById('comment-author').value;
  const body = document.getElementById('comment-body').value;
  const template = _.template(document.getElementById("comment-template").innerHTML);
  const info = {
    'commentAuthor': author,
    'commentBody': body
  }
  document.getElementById("comments").innerHTML += template(info);
}

function createPost(){
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const body = document.getElementById('body').value;

  const pageTemplate = _.template(document.getElementById("page-template").innerHTML);
  document.getElementById("pages").innerHTML += pageTemplate();

  const template = _.template(document.getElementById("post-template").innerHTML);
  const info = {
    'title': title,
    'author': author,
    'body': body
  }
  document.getElementById("post").innerHTML += template(info);

  const commentsTemplate = _.template(document.getElementById("comments-template").innerHTML);
  document.getElementById("comments-section").innerHTML += commentsTemplate();
}
