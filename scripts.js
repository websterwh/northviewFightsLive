document.addEventListener("DOMContentLoaded", function() {
    const videoPlayer = document.getElementById('video-player');
    const videoFolder = 'videos/';
    const videoFiles = ['video1.mp4', 'video2.mp4', 'video3.mp4']; // List your video filenames here

    let currentVideoIndex = 0;

    function playNextVideo() {
        videoPlayer.src = videoFolder + videoFiles[currentVideoIndex];
        currentVideoIndex = (currentVideoIndex + 1) % videoFiles.length;
    }

    // Initial video load
    playNextVideo();

    // Load next video when current one ends
    videoPlayer.addEventListener('ended', playNextVideo);
});
