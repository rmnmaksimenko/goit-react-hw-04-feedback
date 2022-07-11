import { ButtonList, ButtonListEl, Button } from './feedbackoptions.styled';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ButtonList>
      {options.map(option => {
        return (
          <ButtonListEl key={option}>
            <Button onClick={() => onLeaveFeedback(option)}>{option}</Button>
          </ButtonListEl>
        );
      })}
    </ButtonList>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
