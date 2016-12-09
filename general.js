function cargarVariables() {
	cadVariables = location.search.substring(1, location.search.length);
	arrVariables = cadVariables.split("&");
	for (i = 0; i < arrVariables.length; i++) {
		arrVariableActual = arrVariables[i].split("=");
		if (i == 0) {
			token = arrVariableActual[1];
		} else {
			usuario = arrVariableActual[1];
		}
	}
}

function enviarInfo(pagina) {
	pagina = pagina + ".html";
	nombres = "token,usuario";
	pagina += "?";
	nomVec = nombres.split(",");
	for (i = 0; i < nomVec.length; i++) {
		if (i == 0) {
			pagina += nomVec[i] + "=" + token + "&";
		} else {
			pagina += nomVec[i] + "=" + usuario + "&";
		}
	}
	pagina = pagina.substring(0, pagina.length - 1);
	alert(pagina);
	location.href = pagina;
}