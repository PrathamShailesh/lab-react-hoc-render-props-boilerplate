import React, { useState } from 'react';

const withLikeCounter = (WrappedComponent, initialCount = 0) => {
  return class WithLikeCounter extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        likeCounter: initialCount,
      };
    }

    handleLikeCount = () => {
      this.setState((prevState) => ({
        likeCounter: prevState.likeCounter + 1,
      }));
    };

    render() {
      return (
        <>
        <WrappedComponent
          {...this.props}
          likeCounter={this.state.likeCounter}
          handleLikeCount={this.handleLikeCount}
        /></>
      );
    }
  };
};

export default withLikeCounter;