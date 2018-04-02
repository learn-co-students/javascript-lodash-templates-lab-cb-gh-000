function createPost() {
  // event.preventDefault();
  let bodyText = document.getElementById('body').value;
  let titleText = document.getElementById('title').value;
  let authorText = document.getElementById('author').value;

  let pageTemplateFn = _.template(document.getElementById('page-template').innerHTML)
  let postTemplateFn = _.template(document.getElementById('post-template').innerHTML)
  let commentsTemplateFn = _.template(document.getElementById('comments-template').innerHTML)

   document.getElementsByTagName("main")[0].innerHTML += pageTemplateFn();
   document.getElementById('post').innerHTML += postTemplateFn({title: titleText, body: bodyText, author: authorText})
   document.getElementById('comments').innerHTML = commentsTemplateFn()

}

function postComment() {
  // event.preventDefault();
    let commentTextText = document.getElementById('commentText').value;
    let commenterText = document.getElementById('commenter').value;

    let commentTemplateFn = _.template(document.getElementById('comment-template').innerHTML)

    document.getElementById('comments').innerHTML += commentTemplateFn({commentText: commentTextText, commenter: commenterText})





}
