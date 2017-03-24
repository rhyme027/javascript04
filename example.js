
	//存储用户输入的空气指数数据
	var xsyData = {};
	
	//从用户输入中获取数据，向xsyData中增加一条数据，然后渲染xsyList列表，增加新的数据
	function addXsyData(){
		var city = document.getElementById('xsy-input').value;
		if(!city.match(/^[a-zA-Z\u4e00-\u9fa5]+$/)) {
			alert("城市名称只接受中英文字符！");
			return false;
		}
		var value = document.getElementById('xsy-value').value;
		if(!value.match(/^-?\d+$/)){
			alert("空气质量只接受整数！");
			return false;
		}
		xsyData[city] = value;
	}

//渲染xsy-table表格
function renderXsyList(){
	var result = "<tr><td>城市</td><td>空气质量</td><td>操作</td></tr>";
	for(var city in xsyData){
		result += "<tr><td>" + city + "</td><td>" + xsyData[city] + "</td><td><button>删除</button></td></tr>";
	}
	document.getElementById('xsy-table').innerHTML = result;
}

//点击xsy-btn时的处理逻辑，获取用户输入，更新数据，并进行页面呈现的更新
function addBtnHandle(){
	var confirm = addXsyData();
	if(confirm != false) {
		renderXsyList();
	}
}
/**
 * 点击各个删除按钮的时候处理逻辑
 * 获取哪个城市数据被删，删除数据，更新表格显示
 */
function delBtnHandle(){
	//通过当前元素父节点的父节点的第一个子节点的文本内容确定当前数组的属性并删除
	//这里不能用e，要用this来指代对象
	var cityName = this.target.parentNode.parentNode.childNodes[0].innerHTML;
	delete xsyData[cityName];
	renderXsyList();
}
var event = event || window.event;

(function init(){
	//在下面给xsy-btn绑定一个点击事件，点击时触发addBtnHandle函数
	document.getElementById('xsy-btn').addEventListener("click",addBtnHandle,false);
	
	//给xsy-table中的所有删除按钮绑定事件，触发delBtnHandel函数
	//为表格绑定事件监听，if筛选出buttong按钮，并为buttong按钮添加删除函数
	document.getElementById('xsy-table').addEventListener('click',function(e){
		//下两行适配FF和IE，将event作为函数的参数传入例如e，然后为参数e添加适配方法
		e = e || window.event;
		target = e.target || e.srcElement;
		if (e.target.nodeName.toLowerCase() == "button"){
			delBtnHandle();
		}
	},false)
})()

























