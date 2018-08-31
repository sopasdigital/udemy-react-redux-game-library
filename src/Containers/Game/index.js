import React, { Component } from 'react';
import { connect } from 'react-redux';

class Game extends Component {
  render() {
    //  Does an initial check for the props
    //  Returns a default
    if (!this.props.game) {
      return <div>Select a book to get started.</div>;
    }

    return (
      <div>
        <h3>Game Information:</h3>
        <div>
          <p>Title: {this.props.game.title}</p>
          <p>No. of Players: {this.props.game.players}</p>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    game: state.activeGame
  };
}

export default connect(mapStateToProps)(Game);
