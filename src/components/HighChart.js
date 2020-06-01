import React from 'react'
import Highcharts from 'highcharts/highstock'
import HighchartsReact from 'highcharts-react-official'
import moment from 'moment'
import './HighChart.css'
// import NameTheme from 'highcharts/themes/name-theme'

require('highcharts/modules/exporting')(Highcharts)
require('highcharts/modules/export-data')(Highcharts)

// Highcharts Series data as x,y objects
// var data = 
//     [{
//         x: Date.UTC(2011, 10, 1),
//         y: 213
//     }, {
//         x: Date.UTC(2011, 10, 2),
//         y: 42
//     }, {
//         x: Date.UTC(2011, 10, 3),
//         y: 214
//     }]

// Highcharts Series data as an array of x, y values.
// Date.UTC returns milliseconds from 01JAN1970
// var data2 = [
//     [Date.UTC(2011, 10, 4), 29.9],
//     [Date.UTC(2011, 10, 5), 71.5],
//     [Date.UTC(2011, 10, 6), 106.4]
// ]


// moment(string).valueOf(), similar to Date, returns milliseconds
// but can easily parse ISO8601 time formatting.
var elevObsData = [
    [moment('2017-04-27T04:00').valueOf(), 1553.93],
    [moment('2017-04-27T05:00').valueOf(), 1553.93],
    [moment('2017-04-27T06:00').valueOf(), 1553.92],
    [moment('2017-04-27T07:00').valueOf(), 1553.92],
    [moment('2017-04-27T08:00').valueOf(), 1553.93],
    [moment('2017-04-27T09:00').valueOf(), 1553.96],
    [moment('2017-04-27T10:00').valueOf(), 1553.94],
    [moment('2017-04-27T11:00').valueOf(), 1553.93],
    [moment('2017-04-27T12:00').valueOf(), 1553.93],
    [moment('2017-04-27T13:00').valueOf(), 1553.93],
    [moment('2017-04-27T14:00').valueOf(), 1553.95],
    [moment('2017-04-27T15:00').valueOf(), 1553.94],
    [moment('2017-04-27T16:00').valueOf(), 1553.92],
    [moment('2017-04-27T17:00').valueOf(), 1553.91],
    [moment('2017-04-27T18:00').valueOf(), 1553.94],
    [moment('2017-04-27T19:00').valueOf(), 1553.89],
    [moment('2017-04-27T20:00').valueOf(), 1553.89],
    [moment('2017-04-27T21:00').valueOf(), 1553.91],
    [moment('2017-04-27T22:00').valueOf(), 1553.89],
    [moment('2017-04-27T23:00').valueOf(), 1553.92],
    [moment('2017-04-28T00:00').valueOf(), 1553.94],
    [moment('2017-04-28T01:00').valueOf(), 1553.94],
    [moment('2017-04-28T02:00').valueOf(), 1553.93],
    [moment('2017-04-28T03:00').valueOf(), 1553.92],
    [moment('2017-04-28T04:00').valueOf(), 1553.96],
    [moment('2017-04-28T05:00').valueOf(), 1553.95],
    [moment('2017-04-28T06:00').valueOf(), 1553.95],
    [moment('2017-04-28T07:00').valueOf(), 1553.96],
    [moment('2017-04-28T08:00').valueOf(), 1553.94],
    [moment('2017-04-28T09:00').valueOf(), 1553.96],
    [moment('2017-04-28T10:00').valueOf(), 1553.96],
    [moment('2017-04-28T11:00').valueOf(), 1553.93],
    [moment('2017-04-28T12:00').valueOf(), 1553.91],
    [moment('2017-04-28T13:00').valueOf(), 1553.94],
    [moment('2017-04-28T14:00').valueOf(), 1553.97],
    [moment('2017-04-28T15:00').valueOf(), 1553.96],
    [moment('2017-04-28T16:00').valueOf(), 1553.96],
    [moment('2017-04-28T17:00').valueOf(), 1553.95],
    [moment('2017-04-28T18:00').valueOf(), 1553.95],
    [moment('2017-04-28T19:00').valueOf(), 1553.96],
    [moment('2017-04-28T20:00').valueOf(), 1553.96],
    [moment('2017-04-28T21:00').valueOf(), 1553.95],
    [moment('2017-04-28T22:00').valueOf(), 1553.96],
    [moment('2017-04-28T23:00').valueOf(), 1553.96],
    [moment('2017-04-29T00:00').valueOf(), 1553.95],
    [moment('2017-04-29T01:00').valueOf(), 1553.95],
    [moment('2017-04-29T02:00').valueOf(), 1553.97],
    [moment('2017-04-29T03:00').valueOf(), 1553.97],
    [moment('2017-04-29T04:00').valueOf(), 1553.99],
    [moment('2017-04-29T05:00').valueOf(), 1553.99],
    [moment('2017-04-29T06:00').valueOf(), 1553.99],
    [moment('2017-04-29T07:00').valueOf(), 1554.01],
    [moment('2017-04-29T08:00').valueOf(), 1554.19],
    [moment('2017-04-29T09:00').valueOf(), 1554.23],
    [moment('2017-04-29T10:00').valueOf(), 1554.13],
    [moment('2017-04-29T11:00').valueOf(), 1554.15],
    [moment('2017-04-29T12:00').valueOf(), 1554.22],
    [moment('2017-04-29T13:00').valueOf(), 1554.23],    
]

var elevCalcData = [
    [moment('2017-04-27T04:00').valueOf(), 1553.93],
    [moment('2017-04-27T05:00').valueOf(), 1553.93],
    [moment('2017-04-27T06:00').valueOf(), 1553.93],
    [moment('2017-04-27T07:00').valueOf(), 1553.93],
    [moment('2017-04-27T08:00').valueOf(), 1553.93],
    [moment('2017-04-27T09:00').valueOf(), 1553.93],
    [moment('2017-04-27T10:00').valueOf(), 1553.93],
    [moment('2017-04-27T11:00').valueOf(), 1553.93],
    [moment('2017-04-27T12:00').valueOf(), 1553.93],
    [moment('2017-04-27T13:00').valueOf(), 1553.94],
    [moment('2017-04-27T14:00').valueOf(), 1553.94],
    [moment('2017-04-27T15:00').valueOf(), 1553.94],
    [moment('2017-04-27T16:00').valueOf(), 1553.94],
    [moment('2017-04-27T17:00').valueOf(), 1553.94],
    [moment('2017-04-27T18:00').valueOf(), 1553.94],
    [moment('2017-04-27T19:00').valueOf(), 1553.94],
    [moment('2017-04-27T20:00').valueOf(), 1553.94],
    [moment('2017-04-27T21:00').valueOf(), 1553.94],
    [moment('2017-04-27T22:00').valueOf(), 1553.94],
    [moment('2017-04-27T23:00').valueOf(), 1553.94],
    [moment('2017-04-28T00:00').valueOf(), 1553.94],
    [moment('2017-04-28T01:00').valueOf(), 1553.94],
    [moment('2017-04-28T02:00').valueOf(), 1553.94],
    [moment('2017-04-28T03:00').valueOf(), 1553.94],
    [moment('2017-04-28T04:00').valueOf(), 1553.94],
    [moment('2017-04-28T05:00').valueOf(), 1553.95],
    [moment('2017-04-28T06:00').valueOf(), 1553.95],
    [moment('2017-04-28T07:00').valueOf(), 1553.95],
    [moment('2017-04-28T08:00').valueOf(), 1553.95],
    [moment('2017-04-28T09:00').valueOf(), 1553.95],
    [moment('2017-04-28T10:00').valueOf(), 1553.95],
    [moment('2017-04-28T11:00').valueOf(), 1553.95],
    [moment('2017-04-28T12:00').valueOf(), 1553.95],
    [moment('2017-04-28T13:00').valueOf(), 1553.95],
    [moment('2017-04-28T14:00').valueOf(), 1553.95],
    [moment('2017-04-28T15:00').valueOf(), 1553.95],
    [moment('2017-04-28T16:00').valueOf(), 1553.95],
    [moment('2017-04-28T17:00').valueOf(), 1553.95],
    [moment('2017-04-28T18:00').valueOf(), 1553.95],
    [moment('2017-04-28T19:00').valueOf(), 1553.95],
    [moment('2017-04-28T20:00').valueOf(), 1553.95],
    [moment('2017-04-28T21:00').valueOf(), 1553.96],
    [moment('2017-04-28T22:00').valueOf(), 1553.96],
    [moment('2017-04-28T23:00').valueOf(), 1553.96],
    [moment('2017-04-29T00:00').valueOf(), 1553.96],
    [moment('2017-04-29T01:00').valueOf(), 1553.96],
    [moment('2017-04-29T02:00').valueOf(), 1553.96],
    [moment('2017-04-29T03:00').valueOf(), 1553.96],
    [moment('2017-04-29T04:00').valueOf(), 1553.96],
    [moment('2017-04-29T05:00').valueOf(), 1553.96],
    [moment('2017-04-29T06:00').valueOf(), 1553.96],
    [moment('2017-04-29T07:00').valueOf(), 1553.96],
    [moment('2017-04-29T08:00').valueOf(), 1554.02],
    [moment('2017-04-29T09:00').valueOf(), 1554.09],
    [moment('2017-04-29T10:00').valueOf(), 1554.13],
    [moment('2017-04-29T11:00').valueOf(), 1554.15],
    [moment('2017-04-29T12:00').valueOf(), 1554.17],
    [moment('2017-04-29T13:00').valueOf(), 1554.19],
    [moment('2017-04-29T14:00').valueOf(), 1554.2],
    [moment('2017-04-29T15:00').valueOf(), 1554.21],
    [moment('2017-04-29T16:00').valueOf(), 1554.22],
    [moment('2017-04-29T17:00').valueOf(), 1554.23],
    [moment('2017-04-29T18:00').valueOf(), 1554.24],
    [moment('2017-04-29T19:00').valueOf(), 1554.25],
    [moment('2017-04-29T20:00').valueOf(), 1554.26],
    [moment('2017-04-29T21:00').valueOf(), 1554.27],
    [moment('2017-04-29T22:00').valueOf(), 1554.27],
    [moment('2017-04-29T23:00').valueOf(), 1554.27],
    [moment('2017-04-30T00:00').valueOf(), 1554.28],
    [moment('2017-04-30T01:00').valueOf(), 1554.28],
    [moment('2017-04-30T02:00').valueOf(), 1554.28],
    [moment('2017-04-30T03:00').valueOf(), 1554.29],
    [moment('2017-04-30T04:00').valueOf(), 1554.29],
    [moment('2017-04-30T05:00').valueOf(), 1554.29],
    [moment('2017-04-30T06:00').valueOf(), 1554.29],
    [moment('2017-04-30T07:00').valueOf(), 1554.3],
    [moment('2017-04-30T08:00').valueOf(), 1554.3],
    [moment('2017-04-30T09:00').valueOf(), 1554.3],
    [moment('2017-04-30T10:00').valueOf(), 1554.3],
    [moment('2017-04-30T11:00').valueOf(), 1554.31],
    [moment('2017-04-30T12:00').valueOf(), 1554.31],
    [moment('2017-04-30T13:00').valueOf(), 1554.32],
    [moment('2017-04-30T14:00').valueOf(), 1554.34],
    [moment('2017-04-30T15:00').valueOf(), 1554.36],
    [moment('2017-04-30T16:00').valueOf(), 1554.38],
    [moment('2017-04-30T17:00').valueOf(), 1554.42],
    [moment('2017-04-30T18:00').valueOf(), 1554.45],
    [moment('2017-04-30T19:00').valueOf(), 1554.49],
    [moment('2017-04-30T20:00').valueOf(), 1554.53],
    [moment('2017-04-30T21:00').valueOf(), 1554.57],
    [moment('2017-04-30T22:00').valueOf(), 1554.62],
    [moment('2017-04-30T23:00').valueOf(), 1554.65],
    [moment('2017-05-01T00:00').valueOf(), 1554.69],
    [moment('2017-05-01T01:00').valueOf(), 1554.72],
    [moment('2017-05-01T02:00').valueOf(), 1554.75],
    [moment('2017-05-01T03:00').valueOf(), 1554.78],
    [moment('2017-05-01T04:00').valueOf(), 1554.81],
    [moment('2017-05-01T05:00').valueOf(), 1554.83],
    [moment('2017-05-01T06:00').valueOf(), 1554.86],
    [moment('2017-05-01T07:00').valueOf(), 1554.89],
    [moment('2017-05-01T08:00').valueOf(), 1554.92],
    [moment('2017-05-01T09:00').valueOf(), 1554.96],
    [moment('2017-05-01T10:00').valueOf(), 1554.99],
    [moment('2017-05-01T11:00').valueOf(), 1555.03],
    [moment('2017-05-01T12:00').valueOf(), 1555.06],
    [moment('2017-05-01T13:00').valueOf(), 1555.09],
    [moment('2017-05-01T14:00').valueOf(), 1555.12],
    [moment('2017-05-01T15:00').valueOf(), 1555.15],
    [moment('2017-05-01T16:00').valueOf(), 1555.18],
    [moment('2017-05-01T17:00').valueOf(), 1555.2],
    [moment('2017-05-01T18:00').valueOf(), 1555.22],
    [moment('2017-05-01T19:00').valueOf(), 1555.24],
    [moment('2017-05-01T20:00').valueOf(), 1555.26],
    [moment('2017-05-01T21:00').valueOf(), 1555.28],
    [moment('2017-05-01T22:00').valueOf(), 1555.29],
    [moment('2017-05-01T23:00').valueOf(), 1555.31],
    [moment('2017-05-02T00:00').valueOf(), 1555.32],
    [moment('2017-05-02T01:00').valueOf(), 1555.34],
    [moment('2017-05-02T02:00').valueOf(), 1555.35],
    [moment('2017-05-02T03:00').valueOf(), 1555.36],
    [moment('2017-05-02T04:00').valueOf(), 1555.37],
    [moment('2017-05-02T05:00').valueOf(), 1555.39],
    [moment('2017-05-02T06:00').valueOf(), 1555.4],
    [moment('2017-05-02T07:00').valueOf(), 1555.41],
    [moment('2017-05-02T08:00').valueOf(), 1555.42],
    [moment('2017-05-02T09:00').valueOf(), 1555.43],
    [moment('2017-05-02T10:00').valueOf(), 1555.44],
    [moment('2017-05-02T11:00').valueOf(), 1555.45],
    [moment('2017-05-02T12:00').valueOf(), 1555.46],
    [moment('2017-05-02T13:00').valueOf(), 1555.47],
    [moment('2017-05-02T14:00').valueOf(), 1555.48],
    [moment('2017-05-02T15:00').valueOf(), 1555.49],
    [moment('2017-05-02T16:00').valueOf(), 1555.5],
    [moment('2017-05-02T17:00').valueOf(), 1555.5],
    [moment('2017-05-02T18:00').valueOf(), 1555.51],
    [moment('2017-05-02T19:00').valueOf(), 1555.52],
    [moment('2017-05-02T20:00').valueOf(), 1555.53],
    [moment('2017-05-02T21:00').valueOf(), 1555.54],
    [moment('2017-05-02T22:00').valueOf(), 1555.54],
    [moment('2017-05-02T23:00').valueOf(), 1555.55],
    [moment('2017-05-03T00:00').valueOf(), 1555.56],
    [moment('2017-05-03T01:00').valueOf(), 1555.56],
    [moment('2017-05-03T02:00').valueOf(), 1555.57],
    [moment('2017-05-03T03:00').valueOf(), 1555.58],
    [moment('2017-05-03T04:00').valueOf(), 1555.58],
    [moment('2017-05-03T05:00').valueOf(), 1555.59],
    [moment('2017-05-03T06:00').valueOf(), 1555.6],
    [moment('2017-05-03T07:00').valueOf(), 1555.6],
    [moment('2017-05-03T08:00').valueOf(), 1555.61],
    [moment('2017-05-03T09:00').valueOf(), 1555.61],
    [moment('2017-05-03T10:00').valueOf(), 1555.62],
    [moment('2017-05-03T11:00').valueOf(), 1555.62],
    [moment('2017-05-03T12:00').valueOf(), 1555.63],
    [moment('2017-05-03T13:00').valueOf(), 1555.63],
    [moment('2017-05-03T14:00').valueOf(), 1555.64],
    [moment('2017-05-03T15:00').valueOf(), 1555.64],
    [moment('2017-05-03T16:00').valueOf(), 1555.65],
    [moment('2017-05-03T17:00').valueOf(), 1555.65],
    [moment('2017-05-03T18:00').valueOf(), 1555.65],
    [moment('2017-05-03T19:00').valueOf(), 1555.66],
    [moment('2017-05-03T20:00').valueOf(), 1555.66],
    [moment('2017-05-03T21:00').valueOf(), 1555.67],
    [moment('2017-05-03T22:00').valueOf(), 1555.67],
    [moment('2017-05-03T23:00').valueOf(), 1555.67],
    [moment('2017-05-04T00:00').valueOf(), 1555.68],
    [moment('2017-05-04T01:00').valueOf(), 1555.68],
    [moment('2017-05-04T02:00').valueOf(), 1555.69],
    [moment('2017-05-04T03:00').valueOf(), 1555.69],
    [moment('2017-05-04T04:00').valueOf(), 1555.69],
    [moment('2017-05-04T05:00').valueOf(), 1555.7],
    [moment('2017-05-04T06:00').valueOf(), 1555.7],
    [moment('2017-05-04T07:00').valueOf(), 1555.7],
    [moment('2017-05-04T08:00').valueOf(), 1555.7],
    [moment('2017-05-04T09:00').valueOf(), 1555.71],
    [moment('2017-05-04T10:00').valueOf(), 1555.71],
    [moment('2017-05-04T11:00').valueOf(), 1555.71],
    [moment('2017-05-04T12:00').valueOf(), 1555.72],
    [moment('2017-05-04T13:00').valueOf(), 1555.72],
    [moment('2017-05-04T14:00').valueOf(), 1555.72],
    [moment('2017-05-04T15:00').valueOf(), 1555.72],
    [moment('2017-05-04T16:00').valueOf(), 1555.73],
    [moment('2017-05-04T17:00').valueOf(), 1555.73],
    [moment('2017-05-04T18:00').valueOf(), 1555.73],
    [moment('2017-05-04T19:00').valueOf(), 1555.73],
    [moment('2017-05-04T20:00').valueOf(), 1555.74],
    [moment('2017-05-04T21:00').valueOf(), 1555.74],
    [moment('2017-05-04T22:00').valueOf(), 1555.74],
    [moment('2017-05-04T23:00').valueOf(), 1555.74],
    [moment('2017-05-05T00:00').valueOf(), 1555.75],
    [moment('2017-05-05T01:00').valueOf(), 1555.75],
    [moment('2017-05-05T02:00').valueOf(), 1555.75],
    [moment('2017-05-05T03:00').valueOf(), 1555.75],
    [moment('2017-05-05T04:00').valueOf(), 1555.75],
    [moment('2017-05-05T05:00').valueOf(), 1555.75],
    [moment('2017-05-05T06:00').valueOf(), 1555.76],
    [moment('2017-05-05T07:00').valueOf(), 1555.76],
    [moment('2017-05-05T08:00').valueOf(), 1555.76],
    [moment('2017-05-05T09:00').valueOf(), 1555.76],
    [moment('2017-05-05T10:00').valueOf(), 1555.76],
    [moment('2017-05-05T11:00').valueOf(), 1555.76],
    [moment('2017-05-05T12:00').valueOf(), 1555.77],
    [moment('2017-05-05T13:00').valueOf(), 1555.77],
    [moment('2017-05-05T14:00').valueOf(), 1555.77],
    [moment('2017-05-05T15:00').valueOf(), 1555.77],
    [moment('2017-05-05T16:00').valueOf(), 1555.77],
    [moment('2017-05-05T17:00').valueOf(), 1555.77],
    [moment('2017-05-05T18:00').valueOf(), 1555.77],
    [moment('2017-05-05T19:00').valueOf(), 1555.77],
    [moment('2017-05-05T20:00').valueOf(), 1555.78],
    [moment('2017-05-05T21:00').valueOf(), 1555.78],
    [moment('2017-05-05T22:00').valueOf(), 1555.78],
    [moment('2017-05-05T23:00').valueOf(), 1555.78],
    [moment('2017-05-06T00:00').valueOf(), 1555.78],
    [moment('2017-05-06T01:00').valueOf(), 1555.78],
    [moment('2017-05-06T02:00').valueOf(), 1555.78],
    [moment('2017-05-06T03:00').valueOf(), 1555.78],
    [moment('2017-05-06T04:00').valueOf(), 1555.78],
    [moment('2017-05-06T05:00').valueOf(), 1555.78],
    [moment('2017-05-06T06:00').valueOf(), 1555.79],
    [moment('2017-05-06T07:00').valueOf(), 1555.79],
    [moment('2017-05-06T08:00').valueOf(), 1555.79],
    [moment('2017-05-06T09:00').valueOf(), 1555.79],
    [moment('2017-05-06T10:00').valueOf(), 1555.79],
    [moment('2017-05-06T11:00').valueOf(), 1555.79],
    [moment('2017-05-06T12:00').valueOf(), 1555.79],
    [moment('2017-05-06T13:00').valueOf(), 1555.79],
    [moment('2017-05-06T14:00').valueOf(), 1555.79],
    [moment('2017-05-06T15:00').valueOf(), 1555.79],
    [moment('2017-05-06T16:00').valueOf(), 1555.79],
    [moment('2017-05-06T17:00').valueOf(), 1555.79],
    [moment('2017-05-06T18:00').valueOf(), 1555.79],
    [moment('2017-05-06T19:00').valueOf(), 1555.79],
    [moment('2017-05-06T20:00').valueOf(), 1555.79],
    [moment('2017-05-06T21:00').valueOf(), 1555.8],
    [moment('2017-05-06T22:00').valueOf(), 1555.8],
    [moment('2017-05-06T23:00').valueOf(), 1555.8],
    [moment('2017-05-07T00:00').valueOf(), 1555.8],
    [moment('2017-05-07T01:00').valueOf(), 1555.8],
    [moment('2017-05-07T02:00').valueOf(), 1555.8],
    [moment('2017-05-07T03:00').valueOf(), 1555.8],
    [moment('2017-05-07T04:00').valueOf(), 1555.8],
    [moment('2017-05-07T05:00').valueOf(), 1555.8],
    [moment('2017-05-07T06:00').valueOf(), 1555.8],
    [moment('2017-05-07T07:00').valueOf(), 1555.8],
    [moment('2017-05-07T08:00').valueOf(), 1555.8],
    [moment('2017-05-07T09:00').valueOf(), 1555.8],
    [moment('2017-05-07T10:00').valueOf(), 1555.8],
    [moment('2017-05-07T11:00').valueOf(), 1555.8],
    [moment('2017-05-07T12:00').valueOf(), 1555.8],
    [moment('2017-05-07T13:00').valueOf(), 1555.8],
    [moment('2017-05-07T14:00').valueOf(), 1555.8],
    [moment('2017-05-07T15:00').valueOf(), 1555.8],
    [moment('2017-05-07T16:00').valueOf(), 1555.8],
    [moment('2017-05-07T17:00').valueOf(), 1555.8],
    [moment('2017-05-07T18:00').valueOf(), 1555.8],
    [moment('2017-05-07T19:00').valueOf(), 1555.8],
    [moment('2017-05-07T20:00').valueOf(), 1555.8],
    [moment('2017-05-07T21:00').valueOf(), 1555.8],
    [moment('2017-05-07T22:00').valueOf(), 1555.8],
    [moment('2017-05-07T23:00').valueOf(), 1555.8],
    [moment('2017-05-08T00:00').valueOf(), 1555.8],
]

function zoomeyOutey(chart) {
    // chart.xAxis[0].setExtremes(null,null);
    console.log(chart)
};

const options = {

    chart: {
        zoomType:  'xy',

        spacingBottom: 35,

        resetZoomButton: {
            position: {
              align: 'right', // by default
              verticalAlign: 'bottom', // by default
              x: 3,
              y: 40
            },
        },

        panning: {
            enabled: true,
            type: 'xy'
        },

        panKey: 'shift',

        events: {
            click:  function(e) {
                e.xAxis[0].axis.setExtremes(null,null)
                e.yAxis[0].axis.setExtremes(null,null)
            },   
        }
        
    },

    title: {
        text: 'Altus Forecast',
        style: {
            color: '#ffffff',
            font: 'bold 16px "Trebuchet MS", Verdana, sans-serif'
        }
    },
    series: 
        [

        {    
            name: 'Elevation Observed',
            type: 'areaspline',
            data: elevObsData,
            threshold: null,
            dashStyle: 'Solid',
            zIndex: 0
        },
        {
            name: 'Elevation Calculated',
            type: 'areaspline',
            data: elevCalcData,
            threshold: null,
            dashStyle: 'Dot',
            zIndex: 1 
            // fillColor: {
            //     linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
            //     stops: [
            //       [0, '#a9baba'],
            //       [1, '#e1f2f2']
            //     ]
            //   }
        },
    
    ],

    plotOptions: {
        areaspline: {
            fillOpacity: 0.2
        },
        // series: {
        //     dashStyle: 'Dot'
        // }
    },


    colors: ['#058DC7', '#50B432', '#ED561B', '#DDDF00', '#24CBE5', '#64E572',   
             '#FF9655', '#FFF263', '#6AF9C4'],
    // chart: {
    //     backgroundColor: {
    //         linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
    //         stops: [
    //             [0, '#a9baba'],
    //             [1, '#e1f2f2']
    //         ]
    //     },
    // },

    subtitle: {
        style: {
            color: '#666666',
            font: 'bold 12px "Trebuchet MS", Verdana, sans-serif',
            text: 'Forecaster: Myles McManus'
        }
    },

    legend: {
        itemStyle: {
            font: '9pt Trebuchet MS, Verdana, sans-serif',
            color: 'black'
        },
        itemHoverStyle:{
            color: 'gray'
        }   
    },

    exporting: {
        showTable: false
    },

    xAxis: {
        type: 'datetime',
        // events: {
        //     setExtremes: function (e) {
        //         console.log(Highcharts.dateFormat(null, e.min) +
        //             ' | e.max: ' + Highcharts.dateFormat(null, e.max) + ' | e.trigger: ' + e.trigger);
        //     }
        // }
    },
    
};



const HighChart = (props) => {
    return (    
        <HighchartsReact
            highcharts={Highcharts}
            constructorType={'chart'}
            options={options}>
        </HighchartsReact>
            
            
    )
}

export default HighChart