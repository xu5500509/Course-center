/****
特殊模块，数据视图渲染
****/ 

define(function(require) {
var datas={
	su_data:{
		tit:"使用比例",
		data:{"未使用":[4,"#f0ad4e"],"已使用":[14,"#31b0d5"]}
	},
	ht_data:{
		tit:"健康比例",
		data:{"健康或良好":[88,"#ff7171"],"残迹":[1,"#eebe77"],"一般或较弱":[15,"#7cb1ef"],"有慢性病":[8,"#d5eb7e"],"有生理缺陷":[1,"#68c9bf"]}
	},
};

xrzb('school-use',datas.su_data.data,datas.su_data.tit);

function xrzb(id,datas,tit){
	var labels = new Array();
	var values = new Array();
	for(var key in datas){
		labels.push(key);
		values.push({value:datas[key][0],name:key,itemStyle:{normal:{color:datas[key][1]}}});
	}
	 
	//渲染表格 
	var myChart = echarts.init(document.getElementById(id));
		option = {
			tooltip: {
				trigger: 'item',
				formatter: "{a} <br/>{b}: {c} ({d}%)"
			},
			legend: {
			  
        		bottom:5,
				data:labels
			},
			series: [
				{
					name:tit,
					type:'pie',
					radius: ['30%', '68%'],
					avoidLabelOverlap: false,
					startAngle:20,
					center: ['50%', '38%'],
					label:{normal:{formatter:"{b}\n{d}%",textStyle:{fontSize:12},show:true}},
					labelLine:{normal:{smooth:false,length:8,length2:4,show:true}},
					data:values
				}
			]
		};

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
}

});

var htChart = echarts.init(document.getElementById('healthy'));

        // 指定图表的配置项和数据
var option = {
    title: {
        text: '分年级完成情况',
        textStyle: {
            color: '#666',
            fontSize: 15
        }
    },
    "tooltip": {
        "trigger": "axis",
        "axisPointer": {
            "type": "shadow"
        },
    },
    grid: {

        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    "legend": {
        "x": "right",
        "data": ['需完成学生数', '已完成学生数']
    },
    "toolbox": {
        "show": true,
        "feature": {
            "restore": {},
            "saveAsImage": {}
        }
    },
    "calculable": true,
    "xAxis": [{
        "type": "category",
        "splitLine": {
            "show": false
        },
        "axisTick": {
            "show": false
        },
        "splitArea": {
            "show": false
        },
        "axisLabel": {
            "interval": 0,
            "rotate": 25,
            "show": true,
            "splitNumber": 15,
            "textStyle": {
                "fontFamily": "微软雅黑",
                "fontSize": 12
            }
        },
        "data": ['一年级', '二年级', '三年级', '四年级', '五年级', '六年级', '初一', '初二', '初三', '高一', '高二', '高三'],
    }],
    "yAxis": [{}],

    "series": [{
            "name": "需完成学生数",
            "type": "bar",
            //"barWidth": "20%",
            "itemStyle": {
                "normal": {
                    "color": "#ddd",
                    "barBorderRadius": 0,
                    "label": {}
                }
            },
            "data": [ 500, 376, 727,200,400, 300,270,500,400,451,500,320,]
        }, {
            "name": "已完成学生数",
            "type": "bar",
            "stack": "",
            //"barWidth": "10%",
            "barGap": "-100%",
            "itemStyle": {
                "normal": {
                    "barBorderRadius": 0,
                    "color": "#46b8da",
                    "label": {}
                }
            },
            "data": [ 309,217,705,110,119, 133,244,285,372,284, 178,135,],
        },

    ]
}
        // 使用刚指定的配置项和数据显示图表。
        htChart.setOption(option);
