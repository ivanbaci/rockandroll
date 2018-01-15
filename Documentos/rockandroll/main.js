function initMap() {
    var utheater = {lat: -34.5936292, lng: -58.43437949999998};
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 14,
      center: utheater
    });
    var marker = new google.maps.Marker({
      position: utheater,
      map: map
    });
}

function saveArtist(artist) {	
	if (window.sessionStorage) {
  		sessionStorage.setItem("Artist", artist); //TODO: ver si recibe parametro
	}
	else {
  		throw new Error('Tu Browser no soporta LocalStorage!');
	}

	$('.main').hide();
	$('.formulario').show();
}
