import React, { Component } from 'react';

//  Import 'connect' from the 'react-redux'
//  library  
import { connect } from 'react-redux';

//  Creates the 'GameList' class
class GameList extends Component {

  //  Method that renders our 'li's
  renderList() {

    //  Maps through the 'games' prop that
    //  we pass to this return. Then returns an
    //  'li' with the 'title's of each game mapped
    return this.props.games.map((game) => {
      return (
        <li key={game.title} className="list-group-item">{game.title}</li>
      );
    });
  }
  
  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    );
  }
}

//  This function is the core for our
//  redux connection with this container
function mapStateToProps(state) {
  //  Whatever is returned will show as
  //  props inside of 'GameList'
  return {
    games: state.games
  };
}

//  Takes our 'mapStateToProps' function and uses
//  redux to connect it to our 'GameList' container
export default connect(mapStateToProps)(GameList);
