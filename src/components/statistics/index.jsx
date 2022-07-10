import { Component } from 'react';
import { Container, ButtonListEl, ButtonList } from './statistics.styled';

class Statistics extends Component {
  static defaultProps = {
    basicGood: 0,
    basicNeutral: 0,
    basicBad: 0,
  };

  state = {
    good: this.props.basicGood,
    neutral: this.props.basicNeutral,
    bad: this.props.basicBad,
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

  render() {
    return (
      <Container>
        <ButtonList>
          <ButtonListEl>
            <button type="button" onClick={this.handleGood}>
              Good
            </button>
          </ButtonListEl>
          <ButtonListEl>
            <button type="button" onClick={this.handleNeutral}>
              Neutral
            </button>
          </ButtonListEl>
          <ButtonListEl>
            <button type="button" onClick={this.handleBad}>
              Bad
            </button>
          </ButtonListEl>
        </ButtonList>
        <h2>Statistics</h2>
        <span>Good: {this.state.good}</span>
        <br />
        <span>Neutral: {this.state.neutral}</span>
        <br />
        <span>Bad: {this.state.bad}</span>
      </Container>
    );
  }
}

export default Statistics;
