// JavaScript Document
$(document).ready(
function(){
   var forward_dull=$("#footer .forward_dull"); //前进键
   var back_dull=$("#footer .back_dull");      //返回键
   var play_dull=$("#footer .play_dull");      //播放键
   var pause_dull=$("#footer .pause_dull")     //暂停键
   var imgs=$("#main ul li");
   var img_length=$("#main ul li").length;     
   var page=$("#page .left_page");
   var left_imgs=$("#footer .left_imgs img");    //footer-->左下方图片
   var right_imgs=$("#footer .right_imgs img"); //footer-->右下方图片
   var index=0;
    var time=null;
   //前进键
   forward_dull.click(function(){
    index++;
       if(index>img_length-1){
	     index=0;
	   }	      
	     images_switch();
	     change();
	 });
	//后退键
	back_dull.click(function(){
	      index--;
		  if(index<0){
		  index=img_length-1;
		  }
	     images_switch();
         change();
	});
	//播放键
	play_dull.toggle(function(){
	interVal();
	$(this).removeClass();
    $(this).addClass("pause_dull");
	},function(){
	$(this).removeClass();
    $(this).addClass("play_dull");
	 clearInterval(time);

	});
	//暂停键
	//footer图片切换
	function change(){
	       
		   page.text(index+1);

		   if(index==0){
		    left_imgs.attr("src","img/"+12+".jpg");
		     }else{
		  left_imgs.attr("src","img/"+index+".jpg");
		     }
	       if(index+2>img_length){
	      right_imgs.attr("src","img/"+(1)+".jpg");
	      }else{
		right_imgs.attr("src","img/"+(index+2)+".jpg");
		}  
	}
	//图片切换
	function images_switch(){
	      imgs.eq(index).stop().animate({
		   opacity:'1'
		  },1000).siblings().stop().animate({
		   opacity:'0'
		  },1000);
	
	}
	//定时切换
	function interVal(){
    time=setInterval(function(){
	   index++;
	      if(index>img_length-1){
	     index=0;
	   }	      
	     images_switch();
	     change();
	},3000);
	}
}



);