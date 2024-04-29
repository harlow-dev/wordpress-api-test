document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('post-container');
    const postId = 15; // Replace 123 with the actual ID of the post you want to fetch
    const url = `https://iteminc.info/blogs/wp-json/wp/v2/posts/${postId}`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(post => {
            const postElement = document.createElement('div');
            postElement.className = 'post';
            postElement.innerHTML = `
                <h1>${post.title.rendered}</h1>
                <div class="post-content">${post.content.rendered}</div>
            `;
            container.appendChild(postElement);
        })
        .catch(error => {
            console.error('Fetch error:', error);
            container.innerHTML = '<p>Error loading the post. Please try again later.</p>';
        });
});
