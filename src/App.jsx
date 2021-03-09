// import Home from './components/home/Home';
// // import Notice from './components/home/notice/Notice';
// // import Marquee from './components/home/marquee/Marquee';
// function App() {
//   return (
//     <div className="App">
//       <Home />
//     </div>
//   );
// }

// export default App;

import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NewsAndEvent from './components/news&events/NewsAndEvent';
// import NewsAndEvent from "../news&events/NewsAndEvent";
import Home from './components/home/Home'
import Department from './components/home/department/Department';
import OurMission from './components/missionAndVission/OurMission';
import PageNotFound from './components/PageNotFound';
import ContactUs from './components/contactUs/ContactUs';
import AllNotic from './components/allNotice/AllNotic';
import PrincipalMsg from './components/pricipalMsg/PrincipalMsg';
import AllDepartment from './components/allDepartment/AllDepartment';
import Computer from './components/allDepartment/components/Computer';
import ChemicalAndFood from './components/allDepartment/components/ChemicalAndFood';
import Civil from './components/allDepartment/components/Civil';
import Electronics from './components/allDepartment/components/Electronics';
import Environmental from './components/allDepartment/components/Environmental';
import Mechanical from './components/allDepartment/components/Mechanical';
import Power from './components/allDepartment/components/Power';
import ScrollToTop from './components/ScrollTop/ScrollToTop';
import ScrollTop from './components/ScrollTop/ScrollTop';
import Architecture from './components/allDepartment/components/Architecture';
import Electrical from './components/allDepartment/components/Electrical';

export default function App() {
  return (
    <div className="App">
      <Router>
        <ScrollTop showBelow={250} />
        <ScrollToTop />
        <Switch>
          <Route path="/departMent">
            <NewsAndEvent />
          </Route>
          <Route path="/mission">
            <OurMission />
          </Route>

          <Route path="/users">
            <Department></Department>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route path="/contactUs">
            <ContactUs />
          </Route>
          <Route path="/allNotic">
            <AllNotic />
          </Route>
          <Route path="/principalMsg">
            <PrincipalMsg />
          </Route>
          <Route path="/allDepartment">
            <AllDepartment />
          </Route>
          <Route path="/computer">
            <Computer />
          </Route>
          <Route path="/chemicalAndFood">
            <ChemicalAndFood />
          </Route>

          <Route path="/civil">
            <Civil />
          </Route>

          <Route path="/electronics">
            <Electronics />
          </Route>

          <Route path="/electrical">
            <Electrical />
          </Route>

          <Route path="/environmental">
            <Environmental />
          </Route>

          <Route path="/mechanical">
            <Mechanical />
          </Route>

          <Route path="/architecture">
            <Architecture />
          </Route>



          <Route path="/power">
            <Power />
          </Route>

          <Route path="*">
            <PageNotFound />
          </Route>
        </Switch>
      </Router>
    </div>

  );
}

// function Home() {
//   return <h2>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.</h2>;
// }
