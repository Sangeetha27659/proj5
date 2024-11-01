document.addEventListener('DOMContentLoaded', () => {
    const likeButtons = document.querySelectorAll('.like-btn');

    likeButtons.forEach(button => {
        button.addEventListener('click', () => {
            button.classList.toggle('liked');
            if (button.classList.contains('liked')) {
                button.textContent = 'Unlike';
            } else {
                button.textContent = 'Like';
            }
        });
    });

    const commentInputs = document.querySelectorAll('.comment-input');

    commentInputs.forEach(input => {
        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                const commentText = input.value;
                const postComments = input.previousElementSibling;
                const newComment = document.createElement('p');
                newComment.innerHTML = `<strong>You</strong> ${commentText}`;
                postComments.appendChild(newComment);
                input.value = '';
            }
        });
    });
});
