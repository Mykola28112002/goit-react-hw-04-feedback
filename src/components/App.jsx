import { Section } from './Section/Section';
import React, { Component } from "react";
import { Statistics } from './Statistics/Statistics';
import { Div } from './App.styled';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import Notification from './Notification/Notification';
export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  countleaveFeedback = type => {
      this.setState(prevState => ({
      [type]: prevState[type] + 1,
    }));
  };
   countTotalFeedback = () => {
    const options  = this.state;
        return Object.values(options).reduce((total, value) => value + total, 0);
  }
  countPositiveFeedbackPercentage = () => {
    const good = this.state.good;
    return (this.countTotalFeedback() === 0
      ? '0'
      : ((good / this.countTotalFeedback()) * 100).toFixed(0))
  }

  render() {
    return <Div className='thema'>
      <Section title="Please, leave feedback">
        <div>
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.countleaveFeedback}
          />
        </div>
      </Section>
      <Section title="Statistics">
         {this.countTotalFeedback() ? (
            <Statistics
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad} 
        />
          ) : (
            <Notification message="There is no feedback" />
          )}
      </Section>
    </Div>
  }
}