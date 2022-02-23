import { BrowserRouter, Router, Route, Routes } from "react-router-dom";
import StreamList from "./streams/StreamList";
import React from "react";
import StreamCreate from "./streams/SteamCreate";
import StreamShow from "./streams/StreamShow";
import StreamDelete from "./streams/StreamDelete";
import StreamEdit from "./streams/StreamEdit";
import Header from "./Header";
import history from '../history';
import { useLayoutEffect, useState } from "react";


const CustomRouter = ({ history, ...props }) => {
  const [state, setState] = useState({
    action: history.action,
    location: history.location
  });

  useLayoutEffect(() => history.listen(setState), [history]);

  return (
    <Router
      {...props}
      location={state.location}
      navigationType={state.action}
      navigator={history}
    />
  );
};


export default function App() {
  return (
    <div className="ui container">
      <CustomRouter history={history}>
        <Header />
        <Routes>
          <Route path="/" exact element={<StreamList />} />
          <Route path="/streams/new" element={<StreamCreate />} />
          <Route path="/streams/show" element={<StreamShow />} />
          <Route path="/streams/delete" element={<StreamDelete />} />
          <Route path="/streams/edit/:id" element={<StreamEdit />} />
        </Routes>
      </CustomRouter>
    </div>
  );
}
