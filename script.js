let video = document.getElementById("video-luffy")

let close_video = document.getElementById("close-video").addEventListener("click",()=>{
    video.pause()
    video.currentTime = 0
    video.poster = "img/gear-5-in-anime-1.webp"
})