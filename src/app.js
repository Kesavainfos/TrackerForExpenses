import Card from "./components/card";
import Main from "./mainComponent";

export default function App() {
  return (
    <div className="App">
      <Card heading={"Expense Tracker"} content={<Main />} />
    </div>
  );
}
