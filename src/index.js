import { http } from './http';
import { ui } from './ui';
import '../assets/css/style.css';

// get posts on DOM load
document.addEventListener('DOMContentLoaded', getPosts);

// listen for post submit
document.querySelector('.post-submit').addEventListener('click', submitPost);

function getPosts(e) {
  http.get('http://localhost:3001/posts')
  .then( data => ui.showPosts(data))
  .catch( err => console.log(err));

  e.preventDefault();
}

function submitPost(e) {
  const title = document.querySelector('#title').value;
  const body = document.querySelector('#body').value;

  const data = {
    title,
    body
  }

  // create brand new post
  http.post('http://localhost:3001/posts', data)
  .then((data) => {
    ui.showAlert('post added successfully', 'alert alert-success');
    ui.clearFields();
    getPosts();
  })
    
    // getPosts();
  
  .catch(err => console.log(err));

  e.preventDefault();
}