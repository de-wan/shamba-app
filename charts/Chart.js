import { Dimensions } from "react-native";
import { BarChart, LineChart, PieChart} from "react-native-chart-kit";

const chartConfig = {
  backgroundColor:'#fff',
  backgroundGradientFrom: "#fff",
  backgroundGradientFromOpacity: 0.1,
  backgroundGradientTo: "#fff",
  backgroundGradientToOpacity: 0.1,
  color: () => "#3CB371",
  collectionColor: () => "#90ee91"
}

const collectionData = {
  labels: ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"],
  datasets: [
    {
      data: [20, 45, 28, 80, 99, 43, 60],
    }
  ],
};
const annualSaleData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  datasets: [
    {
      data: [20, 45, 28, 80, 99, 43, 60, 30, 45, 38, 72, 40]
    }
  ],
};
const pieData = [
  {
    name: "Savings",
    population: 215000,
    color: "#3CB371",
    legendFontColor: "#7F7F7F",
    legendFontSize: 15
  },
  {
    name: "Loans",
    population: 280000,
    color: "#E55451",
    legendFontColor: "#7F7F7F",
    legendFontSize: 15
  }
] 
export function LoansSavingsPie() {
  return(
    <PieChart
      data={pieData}
      width={Dimensions.get("window").width}
      height={220}
      chartConfig={chartConfig}
      accessor={"population"}
      paddingLeft={"15"}
      center={[0, 0]}
      absolute
    />
  )
}

export function RouteCollectionChart() {
  return (
    <BarChart
      width={Dimensions.get("window").width - 80}
      height={220}
      data={collectionData}
      yAxisSuffix={'Litres'}
      chartConfig={chartConfig}
      style={{
        color:chartConfig.color(),
        borderRadius: 16,
      }}
    />
  )
}
export function AnnualSale () {
  return(
    <LineChart
      width={Dimensions.get("window").width - 40}
      height={220}
      data={annualSaleData}
      yAxisSuffix={'k l'}
      chartConfig={chartConfig}
      style={{
        color:chartConfig.color(),
        borderRadius: 16,
      }}
      bezier
    />
  )
}

