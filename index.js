let cardContainer = document.querySelector(`.card-container`)




for (let i = 0;i<albums.length;i++) {
    cardContainer.innerHTML +=`
    <div class="card">
    <a href="album.html?i=${i}">
		<img src="assets/${albums[i].img}.jpg">
		<p>${albums[i].title}</p>
    </a>
		</div>    
`;
}
