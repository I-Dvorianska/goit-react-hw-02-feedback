import PropTypes from "prop-types";
import { List, Title, Text } from "./Statistics.styled";

const Statistics = ({ data, total, positivePercentage }) => {
  const { good, neutral, bad } = data;

  return (
    <div>
      <Title>Statistics</Title>
      <List>
        <li>
          <Text>Good: {good}</Text>
        </li>
        <li>
          <Text>Neutral: {neutral}</Text>
        </li>
        <li>
          <Text>Bad: {bad}</Text>
        </li>
        <li>
          <Text>Total: {total}</Text>
        </li>
        <li>
          <Text>Positive Feedback: {positivePercentage(total)}%</Text>
        </li>
      </List>
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
};

export default Statistics;
