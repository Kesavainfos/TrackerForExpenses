import React from "react";
import ActionComonent from "./components/ActionComponent";
import Card from "./components/card";
export default class Main extends React.PureComponent {
  constructor(props) {
    super(props);
    const a = window.localStorage.getItem("Trax")
      ? window.localStorage.getItem("Trax").split("?")
      : [];
    this.state = {
      trax: a
    };
  }
  getTransactions = (data) => {
    const obj = this.state.trax ? [...this.state.trax] : [];
    obj.push(data);
    this.setState({
      trax: obj
    });
    window.localStorage.setItem(
      "Trax",
      obj.reduce((a, b) => {
        return a + " ? " + b;
      })
    );
  };
  render() {
    return (
      <div>
        <ActionComonent update={this.getTransactions} />

        {this.state.trax.map((item) => {
          return <Card content={item}></Card>;
        })}
      </div>
    );
  }
}
