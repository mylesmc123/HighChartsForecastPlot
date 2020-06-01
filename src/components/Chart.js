import React from 'react'
import $ from 'jquery'
import Highcharts from 'highcharts'

/**
 * A Chart button: tap the button to increase the count.
 */
class Chart extends React.Component {
  componentDidMount () {
    $(this.container).bind('mousemove touchmove touchstart', function (e) {
      var chart, point, i, event

      for (i = 0; i < Highcharts.charts.length; i = i + 1) {
        chart = Highcharts.charts[i]
        event = chart.pointer.normalize(e.originalEvent) // Find coordinates within the chart
        point = chart.series[0].searchPoint(event, true) // Get the hovered point

        if (point) {
          point.highlight(e)
        }
      }
    })

    Highcharts.Pointer.prototype.reset = function () {
      return undefined
    }

    Highcharts.Point.prototype.highlight = function (event) {
      this.onMouseOver() // Show the hover marker
      this.series.chart.tooltip.refresh(this) // Show the tooltip
      this.series.chart.xAxis[0].drawCrosshair(event, this) // Show the crosshair
    }

    function syncExtremes (e) {
      var thisChart = this.chart

      if (e.trigger !== 'syncExtremes') { // Prevent feedback loop
        Highcharts.each(Highcharts.charts, function (chart) {
          if (chart !== thisChart) {
            if (chart.xAxis[0].setExtremes) { // It is null while updating
              chart.xAxis[0].setExtremes(e.min, e.max, undefined, false, { trigger: 'syncExtremes' })
            }
          }
        })
      }
    }

    const self = this

    $.getJSON('https://www.highcharts.com/samples/data/jsonp.php?filename=activity.json&callback=?', function (activity) {
      $.each(activity.datasets, function (i, dataset) {
    // Add X values
        dataset.data = Highcharts.map(dataset.data, function (val, j) {
          return [activity.xData[j], val]
        })

        const el = document.createElement('div')
        el.class = 'chart'
        self.container.appendChild(el)

        Highcharts.chart(el, {
            chart: {
                marginLeft: 40, // Keep all charts left aligned
                spacingTop: 30,
                spacingBottom: 90,
                zoomType:  'xy',

                resetZoomButton: {
                    position: {
                    align: 'right', // by default
                    verticalAlign: 'bottom', // by default
                    x: 0,
                    y: 40
                    },
                },

                panning: {
                    enabled: true,
                    type: 'xy'
                },

                panKey: 'shift',
                
            
            },

            title: {
                text: dataset.name,
                align: 'left',
                margin: 0,
                x: 30
            },
            credits: {
                enabled: false
            },
            legend: {
                enabled: false
            },
            xAxis: {
                crosshair: true,
                events: {
                setExtremes: syncExtremes
                },
                labels: {
                format: '{value} km'
                }
            },
            yAxis: {
                title: {
                text: null
                }
            },
            tooltip: {
                positioner: function () {
                return {
                    x: this.chart.chartWidth - this.label.width, // right aligned
                    y: -1 // align to title
                }
                },
                borderWidth: 0,
                backgroundColor: 'none',
                pointFormat: '{point.y}',
                headerFormat: '',
                shadow: false,
                style: {
                fontSize: '18px'
                },
                valueDecimals: dataset.valueDecimals
            },
            series: [{
                data: dataset.data,
                name: dataset.name,
                type: dataset.type,
                color: Highcharts.getOptions().colors[i],
                fillOpacity: 0.3,
                tooltip: {
                valueSuffix: ' ' + dataset.unit
                }
            }]
            })
        })
        })
  }

  render () {
    return (
      <div ref={(container) => { this.container = container }} id='container' />
    )
  }
}
export default Chart
