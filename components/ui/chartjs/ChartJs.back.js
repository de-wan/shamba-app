// ChartJs.js
import React, { forwardRef, useImperativeHandle, useState } from 'react';
import { Text } from 'react-native';
import { WebView } from 'react-native-webview';
// eslint-disable-next-line prettier/prettier
const chartJsHtml = '<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0" /><script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.3.0/chart.umd.js" integrity="sha512-CMF3tQtjOoOJoOKlsS7/2loJlkyctwzSoDK/S40iAB+MqWSaf50uObGQSk5Ny/gfRhRCjNLvoxuCvdnERU4WGg==" crossorigin="anonymous" referrerpolicy="no-referrer"></script></head><body style="overflow: hidden"></body></html>';

export const ChartJs = forwardRef((props, ref) => {
  let webref;
  let [isChartAdded, setChartAdded] = useState(false);

  const addChart = () => {
    let myJs = `const canvasEl = document.createElement("canvas");
    canvasEl.style.width = '200px'
    canvasEl.style.height = '${props.height || 70}px'
    document.body.appendChild(canvasEl);
    var ctx = canvasEl.getContext("2d")
    var gradients = [];
    let chart_colors = [];
    for (let color of ${
      JSON.stringify(props.hexColors) || "['#47E162', '#FFC107', '#FF5252']"
    }) {
      let gradient = ctx.createLinearGradient(0, 0, 0, 110);
      gradient.addColorStop(0, color+'FF');   
      gradient.addColorStop(1, color+'00');
      gradients.push(gradient);
      chart_colors.push(color);
    }

    let prop_datasets = ${JSON.stringify(props.datasets)}
    let datasets = []
    for (let dataset_idx in prop_datasets){
      let dataset = prop_datasets[dataset_idx]
      datasets.push({
        backgroundColor: gradients[dataset_idx],
        ...dataset
      }
    }

    window.canvasLine = new Chart(canvasEl, {
      type: ${props.type} || 'line',
      data: {
        datasets: datasets || [
          {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            backgroundColor: gradients[0],
            label: 'Wallet Balance',
            data: [70, 20, 30, 20, 50, 60],
            fill: true,
            borderColor: '#47E162',
            borderWidth: 2,
            tension: 0.4,
            pointRadius: 2,
          },
        ],
      },
      options: ${JSON.stringify(props.options)} || {
        responsive: true,
        scales: {
          x:{
            display: false,
          },
          y: {
              display: false,
            },
        },
        plugins: {
          legend: {
            display: false,
          },
        },
      }
    });
    `;

    console.log(myJs);
    console.log('chart loaded');
    webref.injectJavaScript(myJs);
    console.log('js injected');
    if (!isChartAdded && props.onChartAdded) {
      props.onChartAdded();
      setChartAdded(true);
    }
  };

  const setData = dataSets => {
    if (dataSets) {
      dataSets.forEach((_, i) => {
        webref.injectJavaScript(`window.canvasLine.config.data.datasets[${i}].data = ${JSON.stringify(
          dataSets[i]
        )};
        window.canvasLine.config.data.datasets[${i}].backgroundColor = gradients[${i}];
        window.canvasLine.update();`);
      });
    }
  };

  useImperativeHandle(ref, () => ({
    setData,
  }));

  return (
    <WebView
      style={{ height: props.height || 70 }}
      hardwareAccelerationDisabledAndroid={true}
      originWhitelist={['*']}
      ref={r => (webref = r)}
      source={{ html: chartJsHtml, baseUrl: '' }}
      onLoadEnd={() => {
        addChart(props);
      }}
    />
  );
});
