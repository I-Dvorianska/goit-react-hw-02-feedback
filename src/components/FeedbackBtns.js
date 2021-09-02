import { List, Button, ListItem } from "components/FeedbackBtns.styled";
import PropTypes from "prop-types";

const FeedbackBtns = ({ incrementGood }) => {
  return (
    <div>
      <List>
        <ListItem>
          <Button
            type="button"
            onClick={() => {
              incrementGood("good");
            }}
          >
            Good
          </Button>
        </ListItem>
        <ListItem>
          <Button
            type="button"
            onClick={() => {
              incrementGood("neutral");
            }}
          >
            Neutral
          </Button>
        </ListItem>
        <ListItem>
          <Button
            type="button"
            onClick={() => {
              incrementGood("bad");
            }}
          >
            Bad
          </Button>
        </ListItem>
      </List>
    </div>
  );
};

FeedbackBtns.propTypes = {
  incrementGood: PropTypes.func,
};

export default FeedbackBtns;
