async function getVideos() {
  try {
    const response = await fetch('http://localhost:3000/videos')
    const videos = await response.json()
    return {
      success: true,
      videos
    }
  } catch (error) {
    return {
      success: false,
      error: "Couldn't get videos"
    }
  }
}

const videos = await getVideos()
const containerVideos = document.querySelector('.videos__container')

if (!videos.success) {
  containerVideos.innerHTML = videos.error
}

if (videos.success) {
  for (const video of videos.videos) {
    containerVideos.innerHTML += `
      <li class="videos__item">
        <iframe src="${video.url}"></iframe>
        <div class="descricao-video">
          <img class="img-canal" src="${video.imagem}" />
          <h5 class="titulo-video">${video.titulo}</h5>
          <p class="titulo-canal">${video.descricao}</p>
        </div>
      </li>
    `
  }
}