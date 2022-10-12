import FeedbackOptions from './feedbackoptions';
import Statistics from './statistics';
import Section from './section';
import Notification from './notification';
import './app.css';
import { Container } from './app.styled';
import { useState } from 'react';

const GOOD_STR = 'good';
const NEUTRAL_STR = 'neutral';
const BAD_STR = 'bad';

export function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleClick = option => {
    switch (option) {
      case GOOD_STR:
        setGood(r => r + 1);
        break;
      case NEUTRAL_STR:
        setNeutral(r => r + 1);
        break;
      case BAD_STR:
        setBad(r => r + 1);
        break;
      default:
        break;
    }
  };

  const countTotal = () => good + neutral + bad;

  const countPositive = () => Math.round((good / countTotal()) * 100);

  const options = [GOOD_STR, NEUTRAL_STR, BAD_STR];

  return (
    <Container>
      <Section title={'Please leave feedback'}>
        <FeedbackOptions options={options} onLeaveFeedback={handleClick} />
      </Section>
      <Section title={'Statistics'}>
        {countTotal() !== 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotal()}
            positive={countPositive()}
          />
        ) : (
          <Notification message="No feedback given" />
        )}
      </Section>
    </Container>
  );
}
