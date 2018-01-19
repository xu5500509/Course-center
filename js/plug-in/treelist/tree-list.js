
/*时间轴*/
define(function(require,exports) {
	var qkycal=require("plug-in/treelist/jquery-1.9.1.min");
$(document).ready(function(){
function WaterFall(){
	var WaterUl=$(".tree_list");//容器名称
	var WaterLi=$(".tree_list li");//区块名称
	var WaterLi_W = WaterLi.outerWidth(true);//取区块的实际宽度
	var WaterMa=WaterLi.outerHeight(true)-WaterLi.outerHeight();
    var h=[];//记录区块高度的数组
    for(var i = 0;i < WaterLi.length;i++) {
        WaterLi_H = WaterLi[i].offsetHeight+20;//获取每个WaterLi的高度
        if(i < 2) {//一共2列，所以小于2就是第一行了
            max_H =Math.max.apply(null,h);
            h[i]=WaterLi_H;//把每个WaterLi放到数组里面
            WaterLi.eq(i).css("top",0);//第一行的WaterLi的top值为0
            WaterLi.eq(i).css("left",i * WaterLi_W);//第i个WaterLi的左坐标就是i*WaterLi的宽度
			WaterLi.eq(0).addClass('left_box');
			WaterLi.eq(1).addClass('right_box');
            }
        else{
            min_H =Math.min.apply(null,h) ;//取得数组中的最小值，区块中高度值最小的那个
            minKey = getarraykey(h, min_H);//最小的值对应的指针
            h[minKey] += WaterLi_H+WaterMa ;//加上新高度后更新高度值
            WaterLi.eq(i).css("top",min_H+WaterMa);//先得到高度最小的WaterLi，然后把接下来的WaterLi放到它的下面
            WaterLi.eq(i).css("left",minKey * WaterLi_W);    //第i个WaterLi的左坐标就是i*WaterLi的宽度
			if(minKey * WaterLi_W<300){WaterLi.eq(i).addClass('left_box')}else{WaterLi.eq(i).addClass('right_box')};
        }
    }
    max =Math.max.apply(null,h) ;
    WaterUl.css("height",max);
}
/* 使用for in运算返回数组中某一值的对应项数(比如算出最小的高度值是数组里面的第几个) */
function getarraykey(s, v) {for(k in s) {if(s[k] == v) {return k;}}}
/*这里一定要用onload，因为图片不加载完就不知道高度值*/
  $(window).load(function(){WaterFall();})
});
});