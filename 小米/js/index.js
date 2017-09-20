window.onload=function(){
		 //参数说明   
	 //classname  类名
	 //target  范围
	  function getClass(classname,target){ 
	   target=target? target:document; 
	  	if(document.getElementsByClassName){ //判断是否兼容 
	  	  return target.getElementsByClassName(classname); 
	  	}  
	  	else{   
	  	 var newarr=[];   
	  	  var all=target.getElementsByTagName('*');  
	  	    for(var i=0;i<all.length;i++){     
	  	     if(checkClass(all[i].className,classname)){    
	  	         newarr.push(all[i]);      
	  	        }    
	  	    }    
	  	    return newarr;   
	  	}
	  }
	function checkClass(className,classname){ 
	  	  var arr=className.split(' ');  
	  	  for(var i=0;i<arr.length;i++){  
	  	       if(arr[i]==classname){ 
	  	  	          return true;        
	  	       }   
	  	  }      
	  	return false;
	}
	//获取指定元素   $(select)
	//$('.box') 类名  $('#box') id名   $('div') 标签
	//参数说明
	//select 字符串 选择器
	//target  范围
	//1 . className
	//2 # Id
	//3   标签  以字符开头 
	function $(select,target){
		target=target?target:document;
		var first=select.charAt([0]);//首字符
		if(first=='.'){
			return getClass(select.substring(1));
		}else if(first=='#'){
			return document.getElementById(select.substring(1));
		}else if(/^[a-z][a-z1-6]{0,7}/.test(select)){
		//正则表达式 
		return target.getElementsByTagName(select);
		}
	}

	//banner图侧栏
	let zuo=$('.zuo')[0];
	let lis=$('li',zuo);
	let blj=$('.banner-left-js');
	for(let i=0;i<lis.length;i++){
		lis[i].onmouseover=function(){
			blj[i].style.display='block';
		}
		lis[i].onmouseout=function(){
			blj[i].style.display='none';
		}
	}
	//banner点击
	let datu=$('.datu')[0];
	let d_lis=$('li',datu);
	let btn_list=$('.btn-list')[0];
	let l_lis=$('li',btn_list);
	let banner=$('.banner')[0];
	//now  表示当前窗口显示的图片
	let now=0;
	for(let i=0;i<l_lis.length;i++){
		l_lis[i].onclick=function(){
			 for(let j=0;j<l_lis.length;j++){
			d_lis[j].style.display='none';
			l_lis[j].style.background='#17171c';
           }
           l_lis[i].style.background='#7c7c81';
			d_lis[i].style.display='block';
			now=i;
		}
	}

	let t=setInterval(move,2000);
	banner.onmouseover=function(){
		clearInterval(t);
	}
	banner.onmouseout=function(){
		t=setInterval(move,2000);
	}
	//箭头控制
	let tu_zuo=$('.tu-zuo')[0];
	let tu_you=$('.tu-you')[0];
	tu_you.onclick=function(){
		move();

	}
	tu_zuo.onclick=function(){
		movel();
	}
	function movel(){
		now--;
		if(now<0){
			now==d_lis.length-1;
		}
		for(let i=0;i<d_lis.length;i++){
			d_lis[i].style.display='none';
			l_lis[i].style.background='#17171c';
		}
		d_lis[now].style.display='block';
		l_lis[now].style.background='#7c7c81';
	}
	//banner自动轮播
	function move(){
		now++;
		if(now==d_lis.length){
			now=0;
		}
		for(let i=0;i<d_lis.length;i++){
			d_lis[i].style.display='none';
			l_lis[i].style.background='#17171c';
		}
		d_lis[now].style.display='block';
		l_lis[now].style.background='#7c7c81';
	}
}


