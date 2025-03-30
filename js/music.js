const fetchData = async () => {
  let response = await fetch("./data.json");
  let data = await response.json();

  let musicList = document.querySelector("#music-list");
  musicList.innerHTML = data.map((item) => {
    return `
      <a class="music-item" href="detail.html?id=${item.id}">
        <img src="${item.image}" alt="${item.title}" class="music-image">
        <h2 class="music-title">${item.title}</h2>
        <p class="music-artist">${item.artist}</p>
        <p class="music-album">${item.album}</p>
      </a>
    `;
  }).join("");
};

fetchData();
