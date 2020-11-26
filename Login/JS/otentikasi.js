//Javascript Doucment
//JS UNTUK FITUR LOGIN
function validasi() {
	var user = document.getElementById("username").value;
	var pass = document.getElementById("password").value;
	if (user == "" && pass == "") {
		alert("Silahkan Masukkan Username/Password Dengan Benar");
		return false;
	}
	else if (user == "admin" && pass == "admin"){
		alert('Anda Berhasil Login');
		window.location = "home.html";
		return false;
	}else{
		alert("Silahkan Masukkan Username/Password Dengan Benar");
	}
		
}

function logout() {
	var Really = confirm("Apa Anda Yakin?");
	if (Really) {
		document.write("Logout");
		window.location = "index.html";
	} 
	else {
		document.write("Thanks :)");
		window.location = "home.html"
	}
}