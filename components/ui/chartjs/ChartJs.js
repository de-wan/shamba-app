// ChartJs.js
import React, { forwardRef, useContext, useImperativeHandle, useState } from 'react';
import { Text, useColorScheme } from 'react-native';
import { WebView } from 'react-native-webview';
import { ThemeContext } from '../../../context/ThemeContext';
// eslint-disable-next-line prettier/prettier

export const ChartJs = forwardRef((props, ref) => {
  const theme = useContext(ThemeContext);
  const chartJsHtml = `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0" /><style>body{background-color: ${theme.wb_color1}; border-color: ${theme.wb_color1};}</style><script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.3.0/chart.umd.js" integrity="sha512-CMF3tQtjOoOJoOKlsS7/2loJlkyctwzSoDK/S40iAB+MqWSaf50uObGQSk5Ny/gfRhRCjNLvoxuCvdnERU4WGg==" crossorigin="anonymous" referrerpolicy="no-referrer"></script></head><body style="overflow: hidden"></body></html>`;

  let webref;
  const colorTheme = useColorScheme();
  let [isChartAdded, setChartAdded] = useState(false);

  const addChart = () => {
    let myJs = `const canvasEl = document.createElement("canvas");
    canvasEl.style.width = '200px'
    canvasEl.style.height = '${props.height || 70}px'
    const colorTheme = '${colorTheme}'
    //canvasEl.style.backgroundColor = '${
      colorTheme === 'dark' ? '#000' : '#fff'
    }'
    document.body.appendChild(canvasEl);
    var ctx = canvasEl.getContext("2d")
    
    var gradients = [];
    let chart_colors = ${JSON.stringify(props.hexColors)};
    for (let color of chart_colors) {
      let gradient = ctx.createLinearGradient(0, 0, 0, ${
        props.gradientHeight
      } || 110);
      gradient.addColorStop(0, color+'FF');   
      gradient.addColorStop(1, color+'00');
      gradients.push(gradient);
    }

    let prop_datasets = ${JSON.stringify(props.datasets)}
    let datasets = []
    for (let dataset_idx in prop_datasets){
      let dataset = prop_datasets[dataset_idx];
      datasets.push({
        backgroundColor: gradients[dataset_idx],
        borderColor: chart_colors[dataset_idx],
        ...dataset
      });
    }

    window.canvasLine = new Chart(canvasEl, {
      type: '${props.type}' || 'line',
      data: {
        labels : ${JSON.stringify(props.labels)},
        datasets: datasets,
      },
      options: ${JSON.stringify(props.options) || '{}'}
    });
    
    `;
    webref.injectJavaScript(myJs);
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
