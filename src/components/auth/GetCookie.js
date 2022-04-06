/**
 * GetCookie se encargara de darnos el valor de la cookie señalada, por defecto la cookie señalada
 * será usuarioLogueado
 */
 function GetCookie(nombreCookie = "usuarioLogueado") {
	var name = nombreCookie + "=";
	var decodedCookie = decodeURIComponent(document.cookie);
	var ca = decodedCookie.split(";");
	for (var i = 0; i < ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0) === " ") {
			c = c.substring(1);
		}
		if (c.indexOf(name) === 0) {
			return c.substring(name.length, c.length);
		}
	}
	return "";
}
export default GetCookie;