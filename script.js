document.querySelectorAll('article').forEach(article => {
    article.addEventListener('click', () => {
        alert('You clicked on a blog post!');
    });
});
