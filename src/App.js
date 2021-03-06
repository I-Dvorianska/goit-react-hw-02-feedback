import "./App.css";
import { Component } from "react";
import FeedbackBtns from "components/FeedbackBtns";
import Statistics from "components/Statistics";
import Section from "./components/Section";
import NotificationMessage from "components/NotificationMessage";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  incrementGood = (value) => {
    this.setState((prevState) => {
      return {
        [value]: prevState[value] + 1,
      };
    });
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
    const {
      incrementGood,
      state,
      countTotalFeedback,
      countPositiveFeedbackPercentage,
    } = this;

    const totalFeedback = countTotalFeedback();
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackBtns
            incrementGood={incrementGood}
            options={["good", "neutral", "bad"]}
          />
        </Section>
        {totalFeedback ? (
          <Section title="Statistics">
            <Statistics
              data={state}
              total={totalFeedback}
              positivePercentage={countPositiveFeedbackPercentage}
            />
          </Section>
        ) : (
          <NotificationMessage message="No feedback given" />
        )}
      </>
    );
  }
}
export default App;
