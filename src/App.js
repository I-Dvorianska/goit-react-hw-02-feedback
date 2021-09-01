import "./App.css";
import { Component } from "react";
import FeedbackBtns from "components/FeedbackBtns";
import Statistics from "components/Statistics";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  incrementGood = (value) => {
    if (value === "good") {
      this.setState((prevState) => {
        return {
          good: prevState.good + 1,
        };
      });
    }

    if (value === "neutral") {
      this.setState((prevState) => {
        return {
          neutral: prevState.neutral + 1,
        };
      });
    }

    if (value === "bad") {
      this.setState((prevState) => {
        return {
          bad: prevState.bad + 1,
        };
      });
    }
  };

  render() {
    return (
      <>
        <FeedbackBtns incrementGood={this.incrementGood} />
        <Statistics data={this.state} />
      </>
    );
  }
}
export default App;
