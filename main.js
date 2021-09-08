function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == "") c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}


if (window.location.href  == "http://www.rabphaltt.bt/book_now"){
	console.log("1");
	 document.addEventListener("DOMContentLoaded", function(event) {
		 console.log("2");
	      	var item = readCookie("Item");
		document.cookie = "Item=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
		document.getELementById("nf-field-15").value = item;
  	});
	

}
