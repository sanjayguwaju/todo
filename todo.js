var lis = document.querySekectorAll("li");

for(var i = 0; i < lis.length; i++){
	lis[i].addEventListener("mouseover", function(){
		this.style.color = "green";
	});

	lis[i].addEventListener("mouseout", function(){
		this.style.color = "black"
	});
	
	lis[i].addEventListener("click", function(){
		this.classList.toggle("done");

	});
}