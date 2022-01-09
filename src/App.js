import * as React from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import './styles.css';

import Tree from './Tree';

import { DATA } from './constants';

import Test from './Test';
import Counter from './Counter';
import ApolloTest from './ApolloTest';
import FixedButton from './FixedButton';
import Iteration from './Iteration';

import logo from './logo/Soccerball.svg';

export default function App() {
  return (
    <div>
      {/*
      <h1>Basic Example</h1>

      <p>
        This example demonstrates some of the core features of React Router
        including nested <code>&lt;Route&gt;</code>s,{" "}
        <code>&lt;Outlet&gt;</code>s, <code>&lt;Link&gt;</code>s, and using a
        "*" route (aka "splat route") to render a "not found" page when someone
        visits an unrecognized URL.
      </p>
      */}

      {/* Routes nest inside one another. Nested route paths build upon
            parent route paths, and nested route elements render inside
            parent route elements. See the note about <Outlet> below. */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="test" element={<Test />} />
          <Route path="counter" element={<Counter />} />
          <Route path="apolloclient" element={<ApolloTest />} />
          <Route path="iteration" element={<Iteration />} />
          <Route path="Center" element={<Center />} />

          {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
}

function Layout() {
  return (
    <div className="main2-layout">

        <div className="header2-layout">
          RANDOM GRAPH
        </div>

        <div className="content2-layout">
           
            <div className="left2-layout">
                {/*
                <nav>
                <ul>
                    <li>
                    <Link to="/">Home</Link>
                    </li>
                    <li>
                    <Link to="/about">About</Link>
                    </li>
                    <li>
                    <Link to="/dashboard">Dashboard</Link>
                    </li>
                    <li>
                    <Link to="/nothing-here">Nothing Here</Link>
                    </li>
                </ul>
                </nav>
                */}
                <div className="tree">
                 <Tree data={DATA} />
                </div>
            </div>
            <div className="right2-layout">
                <Outlet />
                <FixedButton />
            </div>

        </div>

    </div>
  );
}


function Home() {
  return (
    <div className="center-container">
      <div className="home">
        <img src={logo} className="home-logo" alt="logo" />
        <h2>Random Graph</h2>
      </div>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>Random Graph is a collection reference of useful React Components with source code</h2>
    </div>
  );
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}

function Center() {
  return (

    <div className="center-container">
      <div>center</div>
    </div>
  
  );
}
