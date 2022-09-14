import { Section } from '../Section/Section';
import { useState } from "react";
import { Statistics } from '../Statistics/Statistics';
import { Div } from '../App.styled';
import { FeedbackOptions } from '../FeedbackOptions/FeedbackOptions';
import Notification from '../Notification/Notification';


export function SignupForm() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const countleaveFeedback = type => {
    if (type === 'good') {
      let totalGood = 0;
      totalGood = good + 1
      setGood(totalGood)
    }
    if (type === 'neutral') {
      let totalNeutral = 0;
      totalNeutral = neutral + 1
      setNeutral(totalNeutral)
    }
    if (type === 'bad') {
      let totalBad = 0;
      totalBad = bad + 1
      setBad(totalBad)
    }

  };
  const countTotalFeedback = () => {
    const options  = [good,neutral,bad];
    return Object.values(options).reduce((total, value) => value + total, 0);
  }
  const countPositiveFeedbackPercentage = () => {
    return (countTotalFeedback() === 0
      ? '0'
      : ((good / countTotalFeedback()) * 100).toFixed(0))
  }
    return <Div className='thema'>
      <Section title="Please, leave feedback">
        <div>
          <FeedbackOptions
            options={Object.keys({good,neutral,bad})}
            onLeaveFeedback={countleaveFeedback}
          />
        </div>
      </Section>
      <Section title="Statistics">
         {countTotalFeedback() ? (
            <Statistics
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
            good={good}
            neutral={neutral}
            bad={bad} 
        />
          ) : (
            <Notification message="There is no feedback" />
          )}
      </Section>
    </Div>

}

