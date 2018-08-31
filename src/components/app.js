import React, { Component } from 'react';

import GameList from '../Containers/GameList';
import Game from '../Containers/Game';

export default class App extends Component {
  render() {
    return (
      <div>
        <GameList />
        <Game />
      </div>
    );
  }
}
