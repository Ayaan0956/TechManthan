const links = document.querySelectorAll('a');

links.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    
    // Remove the permanent border-bottom class from all links
    links.forEach(link => {
      link.classList.remove('permanent-border-b');
    });
    
    // Add the permanent border-bottom class to the clicked link
    link.classList.add('permanent-border-b');
    
    // Execute your code here
    console.log(`Link ${link.id} clicked!`);
  });
});
