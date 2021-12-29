import Card from "../Card/Card";
import Topbar from "../Topbar/Topbar";
import styles from "./Overview.module.scss";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import LargeCard from "../LargeCard/LargeCard";
import TaskCard from "../TaskCard/TaskCard";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];
const cardValues = [
  { title: "Unresolved", value: 60 },
  { title: "Overdue", value: 16, bgcolor: "blue" },
  { title: "Open", value: 43 },
  { title: "On hold", value: 64 },
];
const Overview = () => {
  return (
    <div className={styles.container}>
      <Topbar />
      <div className={styles.content}>
        <div className={styles.cardContainer}>
          {cardValues.map((card) => (
            <Card
              title={card.title}
              value={card.value}
              //bgcolor={card?.bgcolor}
            />
          ))}
        </div>
        <div className={styles.chartContainer}>
          <LineChart width={1200} height={400} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" padding={{ left: 30, right: 30 }} />
            {/* <YAxis /> */}
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="pv"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
          </LineChart>
        </div>
        <div className={styles.largeCardContainer}>
          <LargeCard />
          <TaskCard />
        </div>
      </div>
    </div>
  );
};

export default Overview;
