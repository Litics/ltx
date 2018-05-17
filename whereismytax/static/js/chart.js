$(function () {
// create the chart
    var chart;
    $(document).ready(function() {
        chart = new Highcharts.Chart({
            chart: {
            backgroundColor: '#fcfcfc',
                style: {
                    fontFamily: 'Futura, Arial, Helvetica, sans-serif'
                },
                renderTo: 'chart',
                type: 'line',
                inverted: true,
                marginRight: 40,
//                marginLeft: 500,
                marginBottom: 25,

            },
            title: {
                text: null,
                visiblity: "hidden",
                x: -20 //center
            },
            subtitle: {
               text: null,
                x: -20
            },
            xAxis: {

                crosshair: true,
                width:10,
                tickWidth: 0.5,
                gridLineWidth: 0,
                minorGridLineWidth: 0,
                labels: {
                       x: -10,
                    useHTML: true,
                    groupedOptions: [{
                        x: 0,
                        y:-10,
                        rotation: -90, // rotate labels for a 1st-level
                        align: 'right',
                        style: {
                            fontSize:'13px',
                            whiteSpace:'pre-wrap',//set to normal
                            fontFamily: 'Verdana, sans-serif',
                            color: '#0f0f0f', // set red font for labels in 1st-Level,]
                        }
                    }],
                    rotation: -0, // 0-level options aren't changed, use them as always,
                    align: 'right',
                    style: {
                            whiteSpace:'pre-wrap',//set to normal
                            fontSize:'14px',
                            textTransform: 'uppercase',
                            fontFamily: 'Verdana, sans-serif',
                            color: '#0f0f0f', // set red font for labels in 1st-Level,
                        }
                },
                categories: chart_labels
            },
            yAxis: {
                labels: {
//                    x: 10,
                    useHTML: true,
                        align: 'center',
                        style: {
                            fontSize:'13px',
                            whiteSpace:'pre-wrap',//set to normal
                            fontFamily: 'Verdana, sans-serif',
                            color: '', // set red font for labels in 1st-Level,]
                        }},
                tickmarkPlacement: 'on',
                gridLineWidth: 0,
                minorGridLineWidth: 0,
                min: 1,
                opposite:true,
                max: 7,
                title: {
                margin:40,
                    text: 'SCORE',
                    style: {
                            fontSize:'13px',
                            whiteSpace:'pre-wrap',//set to normal
                            fontFamily: 'Verdana, sans-serif',
                            color: '', // set red font for labels in 1st-Level,]
                        }
                },
              plotBands: [{
                    color: '#881b1bC4', //  Red
                    from: 1,
                    to:2.5
                  },
                  {
                    color: '#fff8bc80', //  Yellow
                    from: 2.5,
                    to: 3.5
                  },
                  {
                    color: '#7b904b99', //  Green
                    from: 3.5,
                    to: 5.5
                  },
                  {
                    color: '#fff8bc80', //  Yellow
                    from: 5.5,
                    to: 6.5
                  },
                  {
                    color: '#881b1bC4', //  Red
                    from: 6.5,
                    to: 7
                  }],

            },
            plotOptions: {
                series: {
                    animation: true,
                    dataLabels: {
                        enabled: false
                    }
                }
            },
            tooltip: {
            enabled: false,
                formatter: function() {
                        var x = this.x;
                        return '<b>'+ String(x).replace('&nbsp;', "").replace('<br>', '').split(",")[1] + '</b><br/>'
                         + ' - ' + String(x).split(",")[0].replace('&nbsp;', "").replace('<br>', '') + '</b><br/>'
                         + this.series.name + this.y  ;
                }
            },
            legend: {
                enabled: false,
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'top',
                y: 10,
                borderWidth: 0
            },
            series: [{
                lineWidth: 1,
                shadow: true,
                name: "Score",
                data: response_data,
                color: '#310f10',
                marker: {
                    symbol: 'circle',
                    radius: 6
                }
//                pointPadding: 0.5,
//                pointPlacement: -0.5
            }
//            , {
//                name: 'New York',
//                data: [4,3,2,5,3,4,4,4,3,4,4,5,3,4,4,4,5,2,3,4,3,4,4,4,4,5],
//                marker: {
//                    symbol: 'square'
//                }
//            }
            ]
        });
    });

});