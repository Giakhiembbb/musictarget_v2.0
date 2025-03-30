const getMusicDetail = async () => {
    const path = new URLSearchParams(window.location.search);
    const musicId = path.get('id');
    
    const response = await fetch('data.json');
    const data = await response.json();
    
    const musicData = data.find(item => item.id.toString() === musicId.toString());
    
    if (musicData) {
        document.getElementById("song-title").textContent = musicData.title;
        document.getElementById("song-artist").textContent = `Artist: ${musicData.artist}`;
        document.getElementById("song-album").textContent = `Album: ${musicData.album}`;
        document.getElementById("song-genre").textContent = `Genre: ${musicData.genre}`;
        document.getElementById("song-duration").textContent = `Duration: ${musicData.duration}`;
        document.getElementById("song-year").textContent = `Release Year: ${musicData.releaseYear}`;
        document.getElementById("song-rating").textContent = `Rating: ${musicData.rating}`;
        document.getElementById("song-image").src = `${musicData.image}`;
        document.getElementById("song-audio").src = `../${musicData.audio}`;
    } else {
        document.getElementById("detailContainer").innerHTML = "<p>Music not found.</p>";
    }
};

getMusicDetail();