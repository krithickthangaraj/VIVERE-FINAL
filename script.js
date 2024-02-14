
const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('nav');

if (bar) {
   bar.addEventListener('click', () => {
       console.log('Hamburger clicked');
       nav.classList.add('active');
   });
}
if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active'); // Remove the 'active' class when close icon is clicked
    });
}
 

let next = document.querySelector('.next')
let prev = document.querySelector('.prev')

next.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').appendChild(items[0])
})

prev.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').prepend(items[items.length - 1]) // here the length of items = 6
})


    // Function to play the video when hovered over
    document.querySelector("#video-player").addEventListener("mouseenter", function() {
        this.play();
    });

    // Function to pause the video when not hovered over
    document.querySelector("#video-player").addEventListener("mouseleave", function() {
        this.pause();
    });

    // Function to play the video when hovering over the thumbnail
    function playVideo() {
        // Show the video player
        document.querySelector("#video-player").style.display = "block";
        // Start playing the video
        document.querySelector("#video-player").play();
    }

    // Function to pause the video when mouse leaves the thumbnail
    function pauseVideo() {
        // Pause the video
        document.querySelector("#video-player").pause();
    }
