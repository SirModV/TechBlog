document.addEventListener('DOMContentLoaded', (event) => {

    const deleteButtons = document.querySelectorAll('.delete-post-btn');
    deleteButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            if (!confirm("Are you sure you want to delete this post?")) {
                e.preventDefault();
            }
        });
    });
});
