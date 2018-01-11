// var base = +new Date(2017, 9, 3);
// var oneDay = 24 * 3600 * 1000;
// var date = [1,2,3,4,5,6,7,8,9];

// var data = [Math.random() * 300];

// for (var i = 1; i < 200; i++) {
//     var now = new Date(base += oneDay);
//     date.push([now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'));
//     data.push(Math.round((Math.random() - 0.5) * 20 + data[i - 1]));
// }
// console.log( date );

var data = [1,3,2,4,6,5,7,8,9];
var date = ['1:00','2:00','3:00',"4:00","5:00","6:00","7:00","8:00","9:00"];


option = {
    tooltip: {
        trigger: 'axis',
        position: function (pt) {
            return [pt[0], '10%'];
        }
    },
    // title: {
    //     left: 'center',
    //     text: '走势',
    // },
    grid: {
        top:'5%',
        // left: '10%',
        // right: '10%'
    },
    // toolbox: {
    //     feature: {
    //         dataZoom: {
    //             yAxisIndex: 'none'
    //         },
    //         restore: {},
    //         saveAsImage: {}
    //     }
    // },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: date
    },
    yAxis: {
        type: 'value',
        boundaryGap: [0, '100%']
    },
    // dataZoom: [{
    //     type: 'inside',
    //     start: 0,
    //     end: 100
    // }, {
    //     start: 0,
    //     end: 10,
    //     handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
    //     handleSize: '80%',
    //     handleStyle: {
    //         color: '#fff',
    //         shadowBlur: 3,
    //         shadowColor: 'rgba(0, 0, 0, 0.6)',
    //         shadowOffsetX: 2,
    //         shadowOffsetY: 2
    //     }
    // }],
    series: [
        {
            name:'价格',
            type:'line',
            smooth:true,
            symbol: 'none',
            sampling: 'average',
            itemStyle: {
                normal: {
                    color: 'rgb(255, 70, 131)'
                }
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgb(255, 158, 68)'
                    }, {
                        offset: 1,
                        color: 'rgb(255, 70, 131)'
                    }])
                }
            },
            markLine : {
                data : [
                    {type :'average', name: '平均值'},
                    // {type :'min', name: '最低'}
                ]
            },
            data: data
        }
    ]
};