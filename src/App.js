import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './styles/App.css';

import CreateForum from './components/CreateForum';
import ShowForumList from './components/ShowForumList';
import ShowForumDetails from './components/ShowForumDetails';
import UpdateForumInfo from './components/UpdateForumInfo';
import Schedules from './components/Schedules';

class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <Route exact path='/' component={ShowForumList} />
          <Route path='/create-forum' component={CreateForum} />
          <Route path='/edit-forum/:id' component={UpdateForumInfo} />
          <Route path='/show-forum/:id' component={ShowForumDetails} />
          <Route path='/schedules' component={Schedules} />
        </div>
      </Router>
    );
  }
}

export default App;