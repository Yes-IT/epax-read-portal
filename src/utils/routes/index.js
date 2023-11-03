import React from "react";
import Home from "../../page/Home";
import Gallery from "../../page/Gallery";
import Login from "../../page/Login";
import SignUp from "../../page/SignUp";
import Tensorflow from "../../page/tensorflow";
import Drawerable from "../../page/Drawerable";
import GalleryWithDrawable from '../../page/GalleryWithDrawable';
export default [
  {
    path: "/",
    exact: true,
    component: () => <Home />,
    protected: "auth",
  },
  {
    path: "/gallery",
    component: () => <Gallery />,
    protected: "guest",
  },
  {
    path: "/login",
    component: () => <Login />,
    protected: "guest",
  },
  {
    path: "/signup",
    component: () => <SignUp />,
    protected: "guest",
  },
  {
    path: "/tensorflow",
    component: () => <Tensorflow />,
    protected: null,
  },
  {
    path: "/admin",
    component: () => <Drawerable />,
    protected: "auth",
  },
  {
    path: "/gallery2",
    component: () => <GalleryWithDrawable />,
    protected: null,
  },
];
