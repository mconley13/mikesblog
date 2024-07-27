// Show blogs from local storage when the page loads
function showBlogs(){
  const blogs = JSON.parse(localStorage.getItem('blogs'));
  blogs.forEach(blog => {  
document.getElementById('blogs').innerHTML += `
      <h2>${blog.title}</h2>
      <p>${blog.content}</p>
      <p2>Posted by: ${blog.username} </p2>
  `});
}

showBlogs();
// Go back to the home page when the back button is clicked 
document.getElementById('backbtn').addEventListener('click', () => {
  window.location.href = 'index.html';
});
// Toggle between light and dark mode when the sun emoji is clicked
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
     //document.blogs.classList.remove('dark');
     //document.blogs.classList.add('light');
     //document.blogs.classList.remove('light');
     //document.blogs.classList.add('dark');