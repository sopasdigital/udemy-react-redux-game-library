import React, { Component } from 'react';

//  Import 'connect' from the 'react-redux'
//  library  
import { connect } from 'react-redux';
//  Import Actions and bindActionCreators from redux
import { selectGame } from '../../Actions/index';
import { bindActionCreators } from 'redux';

//  Creates the 'GameList' class
class GameList extends Component {

  //  Method that renders our 'li's
  renderList() {

    //  Maps through the 'games' prop that
    //  we pass to this return. Then returns an
    //  'li' with the 'title's of each game mapped
    return this.props.games.map((game) => {
      return (
        <li key={game.title}
            onClick={() => this.props.selectGame(game)}
            className="list-group-item">{game.title}</li>
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

//  Returns as props of the 'GameList' container
function mapDispatchToProps(dispatch) {
  //  Whenever 'selectBook' is called, the
  //  result is passed onto all reducers
  return bindActionCreators({ selectGame }, dispatch);
}

//  Takes our 'mapStateToProps' function and uses
//  redux to connect it to our 'GameList' container
//  Also connects the 'mapDispatchToProps' to our
//  container
export default connect(mapStateToProps, mapDispatchToProps)(GameList);
