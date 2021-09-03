import { List, Button, ListItem } from "components/FeedbackBtns.styled";
import PropTypes from "prop-types";

const FeedbackBtns = ({ incrementGood, options }) => {
  return (
    <div>
      <List>
        {options.map((el) => {
          return (
            <ListItem key={el}>
              <Button
                type="button"
                onClick={() => {
                  incrementGood(el);
                }}
              >
                {el}
              </Button>
            </ListItem>
          );
        })}
      </List>
    </div>
  );
};

FeedbackBtns.propTypes = {
  incrementGood: PropTypes.func,
};

export default FeedbackBtns;
