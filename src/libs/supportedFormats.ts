{/*
    
    **Updated: 2025-05-16**
    
*/}

export const formats = {
    image: ["png", "jpg", "jpeg", "gif", "svg", "webp", "ico", "tiff"],
    video: ["mp4", "webm", "avi", "mov", "mkv"],
    audio: ["mp3", "wav", "ogg"],
    document: ["pdf", "docx", "txt"],
    font: ["ttf", "otf"],
}

export const allFormats = Object.values(formats).flat()
