




window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function gmail(){
	var email=documentElement.getElementById("email");

if(email.value.length==0 || email.value.search("@")==-1){
	alert("E-mail invalido");
	email.focus();
	return false;
	
}
return true;
//,,;
	alert("Obrigado pela menssagem");
}

