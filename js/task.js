window.onload = function(){
	//初始化
	function rest(){
		var show = document.getElementById("xsy-wrap");
		for(var i = 0;i<5;i++){
			show.innerHTML += "<li>"+ Math.floor(Math.random()*100) +"</li>";
		}
	}
	rest();
	
	var input = document.getElementById("input");
	var leftin = document.getElementById("xsy-leftin");
	var leftout = document.getElementById("xsy-leftout");
	var rightin = document.getElementById("xsy-rightin");
	var rightout = document.getElementById("xsy-rightout");
	var show = document.getElementById("xsy-wrap");
	
	//创建元素
	function createEl(){
		var li = document.createElement("li");
//		li.setAttribute("class","xsy-li");
		li.innerHTML = input.value;
		return li;
	};
	
	//删除元素
	function deleteEl(node){
		var li = show.getElementsByTagName("li");
		show.removeChild(node);
	}
	
	//绑定事件
	leftin.addEventListener("click",function(){
		show.insertBefore(createEl(),show.firstChild);
	});
	
	rightin.addEventListener("click",function(){
		show.append(createEl());
	});
	
	leftout.addEventListener("click",function(){
		if(show.firstChild == null){
			alert("已经清空了")
		}else{
			var del = show.firstChild;
			deleteEl(del);
			alert(del.innerText);
		}
	});
	
	rightout.addEventListener("click",function(){
		if(show.lastChild.length == null) return;
		var del = show.lastChild;
		deleteEl(del);
		alert(del.innerText);
	})
	
	//点击元素删除
	show.addEventListener("click",function(e){
		show.removeChild(e.target);
	})
}





















