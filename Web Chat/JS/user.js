// JavaScript Document
//JS untuk mengaktifkan fitur di WEB CHAT INI
var kolomchat = document.getElementById("kolomchat"); //membuat variabel kolomchat yang diambil dari id kolomchat
var submitpesan = document.getElementById("submitpesan"); //membuat variabel submitpesan yang diambil dari id submitpesan
var penggunapsn= document.getElementById("penggunapsn"); //membuat variabel 
var pengguna = document.getElementById("pengguna");

submitpesan.addEventListener("click", function(){
     var newMessage = document.createElement("li");
     newMessage.innerHTML = pengguna.value + " : " + penggunapsn.value;
     kolomchat.appendChild(newMessage);
     penggunapsn.value = "";
});

function openform(){
		document.getElementById("myform").style.display="block";
		}
		function closeform(){
		document.getElementById("myform").style.display="none";
		}



	