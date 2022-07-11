import { Component } from 'react';
import FeedbackOptions from './feedbackoptions';
import Statistics from './statistics';
import Section from './section';
import Notification from './notification';
import './app.css';
import { Container } from './app.styled';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClick = option => {
    this.setState(state => ({ [option]: state[option] + 1 }));
  };

  countTotal = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositive = () => {
    return Math.round((this.state.good / this.countTotal()) * 100);
  };

  render() {
    const { good, neutral, bad } = this.state;
    const options = Object.keys(this.state);
    return (
      <Container>
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.handleClick}
          />
        </Section>
        <Section title={'Statistics'}>
          {this.countTotal() !== 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotal()}
              positive={this.countPositive()}
            />
          ) : (
            <Notification message="No feedback given" />
          )}
        </Section>
      </Container>
    );
  }
}
