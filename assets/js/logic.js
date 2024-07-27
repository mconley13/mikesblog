 // Fetch blog data from localStorage and display it on the blog.html page
document.getElementById('btn').onclick = function addBlog(e) {
    e.preventDefault();
    let blogs = JSON.parse(localStorage.getItem('blogs')); 
    if(blogs===null) {
        blogs= [];
    }
    if(username === undefined || title === undefined || content === undefined) {
    alert('Please fill all fields');
    return;  // Stop adding the blog if fields are not filled
    }
    else {
const username = document.getElementById('username').value;
const title = document.getElementById('title').value;
const content = document.getElementById('content').value;
const blog = { username, title, content };
blogs.push(blog);
localStorage.setItem('blogs', JSON.stringify(blogs));
window.location.href = './blog.html';
    
}
}
    // Validate inputs before adding to the blog list

// Toggle theme on sun emoji click
let mode = 'light';
sunemoji.addEventListener('click', function () {
   if (mode === 'light') {
     document.body.classList.remove('light-mode');
     document.body.classList.add('dark-mode');
        mode = 'dark';
    } else {
        document.body.classList.remove('dark-mode');
      document.body.classList.add('light-mode');
      mode = 'light';
 }
 })