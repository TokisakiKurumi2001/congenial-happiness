var control = false;
function open_out(){
	control = !control;
	if(control == true){
		var extra = document.getElementById("out");
		var txt = "";
		txt += "<p class = \"inner\"><input type = \"checkbox\" name = \"US\"/>US</p>";
		txt += "<p class = \"inner\"><input type = \"checkbox\" name = \"VI\"/>VI</p>";
		txt += "<p class = \"inner\"><input type = \"checkbox\" name = \"Japan\"/>Japan</p>";
		txt += "<p class = \"inner\"><input type = \"checkbox\" name = \"Korea\"/>Korea</p>";
		txt += "<p class = \"inner\">Other choice<input type = \"text\" name = \"Other_Choice\"></p>";
		extra.innerHTML = txt;
	}else{
		var extra = document.getElementById("out");
		var txt = "";
		extra.innerHTML = txt;
	}
}
