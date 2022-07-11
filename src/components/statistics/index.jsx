import { Component } from 'react';
import { Container, ButtonListEl, ButtonList } from './statistics.styled';

class Statistics extends Component {
  // static defaultProps = {
  //   basicGood: 0,
  //   basicNeutral: 0,
  //   basicBad: 0,
  // };

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    positivePercentage: 0,
  };

  handleGood = () => {
    this.setState(state => {
      return { good: state.good + 1 };
    });
  };
  handleNeutral = () => {
    this.setState(state => {
      return { neutral: state.neutral + 1 };
    });
  };
  handleBad = () => {
    this.setState(state => {
      return { bad: state.bad + 1 };
    });
  };

  handleTotal = () => {
    this.setState(state => {
      return { total: state.bad + state.neutral + state.good };
    });
  };

  handlePositive = () => {
    this.setState(state => {
      return {
        positivePercentage: ((state.good / state.total) * 100).toFixed(0),
      };
    });
  };

  render() {
    return (
      <Container>
        <ButtonList>
          <ButtonListEl>
            <button
              type="button"
              onClick={() => {
                this.handleGood();
                this.handleTotal();
                this.handlePositive();
              }}
            >
              Good
            </button>
          </ButtonListEl>
          <ButtonListEl>
            <button
              type="button"
              onClick={() => {
                this.handleNeutral();
                this.handleTotal();
                this.handlePositive();
              }}
            >
              Neutral
            </button>
          </ButtonListEl>
          <ButtonListEl>
            <button
              type="button"
              onClick={() => {
                this.handleBad();
                this.handleTotal();
                this.handlePositive();
              }}
            >
              Bad
            </button>
          </ButtonListEl>
        </ButtonList>
        <h2>Statistics</h2>
        <p>Good: {this.state.good}</p>
        <p>Neutral: {this.state.neutral}</p>
        <p>Bad: {this.state.bad}</p>
        <p>Total: {this.state.total}</p>
        <p>Positive feedback: {this.state.positivePercentage}%</p>
      </Container>
    );
  }
}

export default Statistics;
