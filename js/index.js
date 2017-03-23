window.onload = function(){
	
//点击左侧入、右侧入 分别从列表左右插入input中输入的数字
var num = document.getElementById("input");
var leftIn = document.getElementById("xsy-leftin");
var rightIn = document.getElementById("xsy-rightin");
var leftOut = document.getElementById("xsy-leftout");
var rightOut = document.getElementById("xsy-rightout");
var numList = document.getElementById("xsy-wrap");

function insertNum(){
	if(num.value == ""){
		alert("请输入一个数字");
	}else if(!isNaN(num.value)){
		var addLi = document.createElement("li");
		addLi.innerHTML = num.value;
		numList.insertBefore(addLi,numList.firstChild);
		num.value = "";
	}else{
		alert("格式不对，请您重新输入一个数字！");
	}
}

function appendNum(){
	if(num.value == ""){
		alert("请输入一个数字");
	}else if(!isNaN(num.value)){
		var addLi = document.createElement("li");
		addLi.innerHTML = num.value;
		numList.appendChild(addLi);
		num.value = "";
	}else{
		alert("格式不对，请您重新输入一个数字");
	}
}

leftIn.addEventListener("click",insertNum);
rightIn.addEventListener("click",appendNum);

//点击左侧出、右侧出分别读取并删除队列左右第一个元素，并弹窗显示元素中数值 
var liList = numList.getElementsByTagName("li");
function removeLeft(){
//	var liNode = numList.querySelectorAll("li");
//	if(confirm("该值为"+numList.firstChild.innerHTML+"你确定要删除？")){
//		numList.firstChild.remove();
//		

	//避免childNodes 返回节点以外其他的值，使用下面两行代码
	if(confirm("该值为"+liList[0].innerHTML+"你确定要删除？")){
		liList[0].remove();
	}else{
		alert("取消删除");
	}
}
function removeRight(){
//	if(confirm("该值为"+numList.lastChild.innerHTML+"你确定要删除")){
//		numList.lastChild.remove();
    //避免childNodes 返回节点以外其他的值，使用下面两行代码
    if(confirm("该值为"+liList[liList.length-1].innerHTML+"你确定要删除？")){
		liList[liList.length - 1].remove();
    }else{
		alert("取消删除");
	}
}

leftOut.addEventListener("click",removeLeft);
rightOut.addEventListener("click",removeRight);

//点击队列中任何一个元素，则该元素会被从队列中删除
numList.addEventListener("click",function(e){
	if(event.target.nodeName.toLowerCase()=="li"){
		console.log(event.target);
//		event.target.parentNode.removeChild(event.target);
		numList.removeChild(event.target);
	}
})




















}
