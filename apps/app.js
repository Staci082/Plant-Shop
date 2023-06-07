


class Plants {
    constructor() {
        this.isLiked = false;
        this.isUnliked = false;
    }

    toggleLikeOn()  {
        const clickedLikeBtn = '<i class="fa-solid fa-sun"></i>';
            likeBtn.innerHTML = clickedLikeBtn;
            this.isLiked = true;
    }

    toggleLikeOff() {
        const clickedLikeBtn = '<i class="fa-regular fa-sun"></i>';
            likeBtn.innerHTML = clickedLikeBtn;
            this.isLiked = false;
    }
}



let app = new Plants();

const likeBtn = document.querySelector('.sun');

likeBtn.addEventListener('click', () => {
    app.isLiked ? app.toggleLikeOn() : app.toggleLikeOff();
    console.log("hi")
});
