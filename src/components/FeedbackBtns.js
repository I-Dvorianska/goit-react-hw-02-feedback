import { Title, List, Button, ListItem } from "components/FeedbackBtns.styled";

const FeedbackBtns = () => {
  return (
    <div>
      <Title>Please leave feedback</Title>
      <List>
        <ListItem>
          <Button type="button">Good</Button>
        </ListItem>
        <ListItem>
          <Button type="button">Neutral</Button>
        </ListItem>
        <ListItem>
          <Button type="button">Bad</Button>
        </ListItem>
      </List>
    </div>
  );
};

export default FeedbackBtns;
