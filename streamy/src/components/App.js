import { Router, Route, Switch} from "react-router-dom";
import StreamList from "./streams/StreamList";
import React from "react";
import StreamCreate from "./streams/SteamCreate";
import StreamShow from "./streams/StreamShow";
import StreamDelete from "./streams/StreamDelete";
import StreamEdit from "./streams/StreamEdit";
import Header from "./Header";
import history from '../history';


export default function App() {
  return (
    <div className="ui container">
      <Router history={history}>
        <Header />
        <Switch>
          <Route path="/" exact component={StreamList} />
          <Route path="/streams/new" component={StreamCreate} />
          <Route path="/streams/:id" component={StreamShow} />
          <Route path="/streams/delete/:id" component={StreamDelete} />
          <Route path="/streams/edit/:id" component={StreamEdit} />
        </Switch>
      </Router>
    </div>
  );
}
