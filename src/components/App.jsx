import React from 'react';
import { StatisticList } from './StatisticList/StatisticList';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Container } from './Container/Container.styled';
import { GlobalStyle } from './GlobalStyle';
import { useState } from 'react';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onSetFeedback = option => {
    switch (option) {
      case 'good':
        return setGood(prevState => prevState + 1);
      case 'neutral':
        return setNeutral(prevState => prevState + 1);
      case 'bad':
        return setBad(prevState => prevState + 1);
      default:
        throw new Error(`Unsupported type of ${option}`);
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositivePercentage = () => {
    return Math.round((good / countTotalFeedback()) * 100) || 0;
  };

  const feedbackOption = { good, neutral, bad };
  const keys = Object.keys(feedbackOption);
  
  return (
    <Container>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={keys}
          onLeaveFeedback={onSetFeedback}
        ></FeedbackOptions>
      </Section>
      <Section title="Statistics">
        <StatisticList
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback()}
          positivePercentage={countPositivePercentage()}
        />
      </Section>
      <GlobalStyle />
    </Container>
  );
};
