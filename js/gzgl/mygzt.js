

//公用函数

define(function(require,exports) {
	
	exports.mygzt_run=function(){
		
		//工资模板自动只显示两行，多了变更多
		var allw=$(".school_box").width();
		var btnw=0;
		var onestpe=true;
		var onerowmorew=0;//第一行排列的时候多出来的宽度
		$(".school_box .school_one").each(function(i) {
			var thisw=Math.ceil($(this).outerWidth())+15;
            btnw+=thisw;
			
			if(btnw>(allw)&&onestpe){
				var thw=Math.ceil($(this).outerWidth())+15;
				onerowmorew=allw-(btnw-thw);
				btnw+=onerowmorew;
				onestpe=false;
			}
			if(btnw>(allw*2)){
				$(this).hide().addClass("moreshow").prev().hide().addClass("moreshow");
				$(".school_more").removeClass("yc");
				//console.log(btnw,i,"yc");
			};
        });
		$(".school_more").on("click",function(){
			$(this).toggleClass("zd");
			$(".school_box").toggleClass("auto");
			$(".school_box .school_one.moreshow").toggle();
		});
	}
	
	
});