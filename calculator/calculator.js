var button=document.querySelectorAll("td");
var clear=document.querySelectorAll("#clear");
var answer=document.getElementById("answer");


for (var i = 0; i < button.length; i++) {
	
	button[i].addEventListener("click",function(){
	
	var display=this.innerHTML;
	if (display==="=") {
       answer.innerHTML=eval(answer.innerHTML);
	}

	else{
	  answer.innerHTML +=display;
	}

	});
}


button[13].addEventListener("click",function(){
	answer.innerHTML="";
})



