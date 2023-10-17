import { http } from './http';
import { ui } from './ui';
import '../assets/css/style.css';

// get posts on DOM load
document.addEventListener('DOMContentLoaded', getPosts);

// listen for post submit
document.querySelector('.post-submit').addEventListener('click', submitPost);

// Listen for delete icon click
document.querySelector('#posts').addEventListener('click', deletePosts);

// Listen for edit state
document.querySelector('#posts').addEventListener('click', editPosts);

// Listen for cancel from edit state
document.querySelector(".card-form").addEventListener('click', cancelEdit )

function getPosts() {
  http.get('http://localhost:3001/posts')
  .then( data => ui.showPosts(data))
  .catch( err => console.log(err));

}

function submitPost() {
  const id = document.querySelector('#id').value;
  const title = document.querySelector('#title').value;
  const body = document.querySelector('#body').value;

  const data = {
    title,
    body
  }

  if(title == '' || body == '') {
    ui.showAlert('please fill all the fields', 'alert alert-danger')
  } else {

    // check for id
    if(id == '') {
      // create brand new post
      http.post('http://localhost:3001/posts', data)
      .then((data) => {
        ui.showAlert('post added successfully', 'alert alert-success');
        ui.clearFields();
        getPosts();
      })
      
      .catch(err => console.log(err));
      
    } else {
      // update the existing post
      http.put(`http://localhost:3001/posts/${id}`, data)
      .then((data) => {
        ui.showAlert('post updated successfully', 'alert alert-success');
        ui.changeFormState('add');
        getPosts();
      })
      
      .catch(err => console.log(err));
    }
  }
}

function deletePosts(e) {
  if(e.target.parentElement.classList.contains('delete')) {
    const id = e.target.parentElement.dataset.id;
    if(confirm('are you sure to delete?')) {
      http.delete(`http://localhost:3001/posts/${id}`)
      .then( data => {
        ui.showAlert('post removed', 'alert alert-success');
        getPosts();
      })
      .catch(err => console.log(err));
    }
    // console.log('delete link clicked')
  }
  e.preventDefault();
}

function editPosts(e) {
  if(e.target.parentElement.classList.contains('edit')) {
    const id = e.target.parentElement.dataset.id;
    const title = e.target.parentElement.previousElementSibling.previousElementSibling.textContent;
    const body = e.target.parentElement.previousElementSibling.textContent;

    // console.log(e.target.parentElement.previousElementSibling)
    const data = {
      id,
      title,
      body
    }

    // then fill the form with the clicked post
    ui.fillForm(data);
  }

}

function cancelEdit(e) {
  if(e.target.classList.contains('post-cancel')) {
    ui.changeFormState('add');
  }
}














