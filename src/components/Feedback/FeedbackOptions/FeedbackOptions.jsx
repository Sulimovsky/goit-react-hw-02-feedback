import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const [good, neutral, bad] = options;
  return (
    <>
      <button className={s.btn} onClick={e => onLeaveFeedback(good)}>
        Good
      </button>
      <button className={s.btn} onClick={e => onLeaveFeedback(neutral)}>
        Neutral
      </button>
      <button className={s.btn} onClick={e => onLeaveFeedback(bad)}>
        Bad
      </button>
    </>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.array,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
