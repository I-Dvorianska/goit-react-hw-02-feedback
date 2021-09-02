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

  countTotalFeedback = () => {
    const values = Object.values(this.state);

    return values.reduce((total, num) => {
      total += num;
      return total;
    }, 0);
  };

  countPositiveFeedbackPercentage = (total) => {
    if (total === 0) {
      return 0;
    }
    return Math.ceil((this.state.good / total) * 100);
  };

  render() {
    return (
      <>
        <FeedbackBtns incrementGood={this.incrementGood} />
        <Statistics
          data={this.state}
          total={this.countTotalFeedback()}
          positivePercentage={this.countPositiveFeedbackPercentage}
        />
      </>
    );
  }
}
export default App;
