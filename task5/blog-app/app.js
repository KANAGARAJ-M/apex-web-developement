// Select DOM Elements
const blogForm = document.getElementById('blogForm');
const blogPosts = document.getElementById('blogPosts');

// Event Listener for Form Submission
blogForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Get Form Data
    const title = document.getElementById('title').value.trim();
    const content = document.getElementById('content').value.trim();

    // Validate Input
    if (title && content) {
        // Create Blog Post Element
        const post = document.createElement('div');
        post.classList.add('blog-post');
        post.innerHTML = `
            <h3>${title}</h3>
            <p>${content}</p>
            <button class="delete-btn">&times;</button>
        `;

        // Add Event Listener to Delete Button
        post.querySelector('.delete-btn').addEventListener('click', () => {
            post.remove();
        });

        // Append to Blog Posts Section
        blogPosts.appendChild(post);

        // Clear Form
        blogForm.reset();
    } else {
        alert('Please fill out both fields.');
    }
});
