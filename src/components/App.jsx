import './app.css';
import { Component } from 'react';
import { Container, ButtonListEl, ButtonList } from './app.styled';
// import Statistics from './statistics';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClick = option => {
    this.setState(state => ({ [option]: state[option] + 1 }));
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
        <ButtonList>
          <ButtonListEl>
            <button
              type="button"
              onClick={() => {
                this.handleGood();
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
        <p>Total: {this.countTotal()}</p>
        <p>Positive feedback: {this.countPositive()}%</p>
      </Container>
    );
  }
}
