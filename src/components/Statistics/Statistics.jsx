import { Div } from './Statistics.styled';
import PropTypes from 'prop-types';

export const Statistics = ({good,neutral,bad, total, positivePercentage}) => {
    return <Div>
      {Object.keys({ good, neutral, bad }).map((key) => (
        <p key={key}>
          {key} : {{ good, neutral, bad }[key]}
        </p>
      ))}
      <div>
        <p>
          Total : <span> {total} </span>
        </p>
        <p>
          PositiveFeedback :
          <span> {positivePercentage} % </span>
        </p>
      </div>
    </Div>;
}

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.string,
};