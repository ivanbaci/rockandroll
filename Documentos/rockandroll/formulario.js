function redirect() {
	if (window.sessionStorage) {
  		sessionStorage.setItem("Entradas", $("#entradas")[0].value); //TODO: ver si recibe parametro
	}
	else {
  		throw new Error('Tu Browser no soporta LocalStorage!');
	}

	location.href = "elegi-tu-asiento.html";
}