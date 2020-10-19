import React from 'react';
import Counter from './Counter';
import { connect } from 'react-redux';
import { increment, decrement, update, inputValue } from '../actions/index';

class App extends React.Component {
  render() {
    return (
      <div>
        <h3>Counter</h3>
        <Counter 
        count={this.props.count} 
        countTwo={this.props.countTwo} 
        onUpdate={this.props.onUpdate} 
        onIncrement={this.props.onIncrement} 
        onDecrement={this.props.onDecrement} 
        onInputValue={this.props.onInputValue}  
        />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onIncrement: () => dispatch(increment()),
    onDecrement: () => dispatch(decrement()),
    onUpdate: () => dispatch(update()),
    onInputValue: (count) => dispatch(inputValue(count))
  };
}
function mapStateToProps(state) {
    return {
      count: state.count,
      countTwo: state.countTwo
    };
  }

export default connect(mapStateToProps, mapDispatchToProps)(App);