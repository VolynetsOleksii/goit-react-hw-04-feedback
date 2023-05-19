import PropTypes from 'prop-types';
import { Button } from './FeedbackOptions.styled';
export const FeedbackOptions = ({options, onLeaveFeedback}) => {
   return  options.map((key) => (
    <Button key={key} type="button" onClick={() => onLeaveFeedback(key)}>{key}</Button>
   ))
};

FeedbackOptions.propTypes = {
    options: PropTypes.array.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
};
