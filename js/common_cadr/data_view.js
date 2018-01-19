/****
特殊模块，数据视图渲染
****/ 

var schoolChart = echarts.init(document.getElementById('cla-ranking'));

        // 指定图表的配置项和数据
  var   option = {
  title: {
      text: ''
  },
  tooltip : {
      trigger: 'axis'
  },
  legend: {
      x:'85%',
      data:['评价次数']
  },
  toolbox: {
      feature: {
          saveAsImage: {}
      }
  },
  grid: {
      left: '2%',
      right: '4%',
      bottom: '3%',
      containLabel: true
  },
  xAxis : [
      {
          type : 'category',
          boundaryGap : false,
          data : ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31']
      }
  ],
  yAxis : [
      {
          type : 'value'
      }
  ],
  series : [
      {
          name:'评价次数',
          type:'line',
          stack: '总量',
		  itemStyle:{normal: {color:'#5bc0de'}},
          label: {
              normal: {
                  show: true,
                  position: 'top'
              }
          },
          areaStyle: {normal: {}},
          data:[1,0, 9, 14,6,0,7,8,5,6,11,12,10,4,15,8,7,5,3,2,8,14,11,5,4,1,3,1,8,15,7]
      }
  ]
  };
        // 使用刚指定的配置项和数据显示图表。
        schoolChart.setOption(option);
