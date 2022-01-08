import * as React from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import './styles.css';

import Tree from './Tree';

import { DATA } from './constants';

import Test from './Test';
import Counter from './Counter';
import ApolloTest from './ApolloTest';
import FixedButton from './FixedButton';

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


var rows = [];
for (var i = 0; i < 30; i++) {
    rows.push(<h2 key={i}>Home</h2>);
}

function Home() {
  return (
    <div>
      {rows}
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>Random Graph is collection of useful React Components with source code</h2>
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
