$ (document).ready(function() {
	
	function saveArtist(artist) {	
		if (window.sessionStorage) {

	  		sessionStorage.setItem("Artist", "Rolling");
		}
		else {
	  		throw new Error('Tu Browser no soporta LocalStorage!');
		}
	}
}) 