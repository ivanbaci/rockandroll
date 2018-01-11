var current = 0;
var max = 0;

$( document ).ready(function() {

	function addArtist() {
		var nombre = sessionStorage.getItem("Artist");

	  	sessionStorage.removeItem("Artist");

	  	$('#banda').append(nombre);
	}

	addArtist();

	function getCantEntradas() {
    	return $(".entradas")[0].value;
	}

    $('.asiento').click(function() {
    	var max = getCantEntradas();
		if (this.className == "asiento") {
			if (current < max) {
				$(this).removeClass('asiento');
				$(this).addClass('asiento-reservado');
				current ++;
			}
		} else {
			$(this).addClass('asiento');
			$(this).removeClass('asiento-reservado');
			current --;
		}
	});
})




