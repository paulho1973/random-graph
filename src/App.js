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
import SignupForm from './SignupForm';
import ContactForm from './ContactForm';
import ProfileForm from './ProfileForm';
import ButtonNo from './ButtonNo';
import PageLayout1 from './PageLayout1';
import PageLayout2 from './PageLayout2';
import PageLayout3 from './PageLayout3';
import PageLayout4 from './PageLayout4';
import SectionScroll from './SectionScroll';
import ReactRef from './ReactRef';
import DragDropImage from './DragDropImage';
import DragDropDisplay from './DragDropDisplay';
import BeforeLeave from './BeforeLeave';
import ModalDemo from './ModalDemo';
import LazyImage from './LazyImage';
import SearchBar from './SearchBar';
import LazyComponent from './LazyComponent';
import ToggleSwitch from './ToggleSwitch';
import DarkMode from './DarkMode';
import ModalSlide1 from './ModalSlide1';
import ModalSlide2 from './ModalSlide2';
import ModalSlide3 from './ModalSlide3';
import GetDimension from './GetDimension';
import ScrollMenu1 from './ScrollMenu1';
import SwipeMenu1 from './SwipeMenu1';
import Slider1 from './Slider1';
import ImageSlider1 from './ImageSlider1';
import ImageSlider2 from './ImageSlider2';
import RichTextEditorDemo from './RichTextEditorDemo';

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
          <Route path="center" element={<Center />} />
          <Route path="signupform" element={<SignupForm />} />
          <Route path="contactform" element={<ContactForm />} />
          <Route path="profileform" element={<ProfileForm />} />
          <Route path="buttonno" element={<ButtonNo />} />
          <Route path="profileform" element={<ProfileForm />} />
          <Route path="pagelayout1" element={<PageLayout1 />} />
          <Route path="pagelayout2" element={<PageLayout2 />} />
          <Route path="pagelayout3" element={<PageLayout3 />} />
          <Route path="pagelayout4" element={<PageLayout4 />} />
          <Route path="sectionscroll" element={<SectionScroll />} />
          <Route path="reactref" element={<ReactRef />} />
          <Route path="dragdropimage" element={<DragDropImage />} />
          <Route path="dragdropdisplay" element={<DragDropDisplay />} />
          <Route path="beforeleave" element={<BeforeLeave />} />
          <Route path="modaldemo" element={<ModalDemo />} />
          <Route path="lazyimage" element={<LazyImage />} />
          <Route path="searchbar" element={<SearchBar />} />
          <Route path="lazycomponent" element={<LazyComponent />} />
          <Route path="toggleswitch" element={<ToggleSwitch />} />
          <Route path="darkmode" element={<DarkMode />} />
          <Route path="modalslide1" element={<ModalSlide1 />} />
          <Route path="modalslide2" element={<ModalSlide2 />} />
          <Route path="modalslide3" element={<ModalSlide3 />} />
          <Route path="getdimension" element={<GetDimension />} />
          <Route path="scrollmenu1" element={<ScrollMenu1 />} />
          <Route path="swipemenu1" element={<SwipeMenu1 />} />
          <Route path="slider1" element={<Slider1 />} />
          <Route path="imageslider1" element={<ImageSlider1 />} />
          <Route path="imageslider2" element={<ImageSlider2 />} />
          <Route path="richtexteditordemo" element={<RichTextEditorDemo />} />

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
      <h2>Random Graph is a collection of React Components with source code</h2>
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
