import { BrowserRouter, Route, Routes } from "react-router-dom";
import StreamList from "./streams/StreamList";
import React from "react";
import StreamCreate from "./streams/SteamCreate";
import StreamShow from "./streams/StreamShow";
import StreamDelete from "./streams/StreamDelete";
import StreamEdit from "./streams/StreamEdit";
import Header from "./Header";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" exact element={<StreamList />} />
          <Route path="/streams/new" element={<StreamCreate />} />
          <Route path="/streams/show" element={<StreamShow />} />
          <Route path="/streams/delete" element={<StreamDelete />} />
          <Route path="/streams/edit" element={<StreamEdit />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
