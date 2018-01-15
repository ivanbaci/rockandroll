var current = 0;
var max = 0;

$( document ).ready(function() {

	function addArtist() {
		var nombre = sessionStorage.getItem("Artist");

		//var finalName = JSON.parse(nombre);

	  	sessionStorage.removeItem("Artist");

	  	$('#banda').append(nombre);
	}

	addArtist();

	function getCantEntradas() {
		var entradas = sessionStorage.getItem("Entradas");

    	return entradas;
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

	$("#printButton").click(function(){
        var mode = 'iframe'; //popup
        var close = mode == "popup";
        var options = { mode : mode, popClose : close};
        $("div.printableArea").printArea( options );
    });
})




