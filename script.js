// Lista de videos
const videos = [
    "videos/1.mp4",
    "videos/2.mp4",
    "videos/3.mp4",
    "videos/4.mp4",
    "videos/5.mp4",
    "videos/6.mp4",
    "videos/7.mp4",
    "videos/8.mp4",
    "videos/9.mp4"
];

// Genera videos en la galería
const videoGallery = document.getElementById("video-gallery");
if (videoGallery) {
    videos.forEach(videoSrc => {
        const videoElement = document.createElement("video");
        videoElement.src = videoSrc;
        videoElement.controls = true;
        videoGallery.appendChild(videoElement);
    });
}





