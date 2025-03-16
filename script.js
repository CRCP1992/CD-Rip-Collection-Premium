const albums = [
    {
        title: "Album 1",
        cover: "https://via.placeholder.com/300",
        download: "https://t.me/getpubliclinkbot?start=YourTelegramFileID1"
    },
    {
        title: "Album 2",
        cover: "https://via.placeholder.com/300",
        download: "https://t.me/getpubliclinkbot?start=YourTelegramFileID2"
    }
];

const container = document.getElementById("albums");

albums.forEach(album => {
    const albumDiv = document.createElement("div");
    albumDiv.classList.add("album");
    albumDiv.innerHTML = `
        <img src="${album.cover}" alt="${album.title}">
        <h2>${album.title}</h2>
        <a href="${album.download}" target="_blank">डाउनलोड करें</a>
    `;
    container.appendChild(albumDiv);
});
