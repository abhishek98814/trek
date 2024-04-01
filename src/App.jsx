import React, { Suspense, lazy } from 'react';
import { Route, Routes, Navigate } from "react-router-dom";
import axios from 'axios';

const Layout = lazy(() => import("./common/Layout"));
const AddOverview = lazy(() => import("./components/allTrek/AddTrekItems"));
const AllTrekviews = lazy(() => import("./components/allTrek/AllTrekviews"));

import Location from "./components/category/Location"
import { Bookings } from './components/trekContentList/Bookings'
import Inquiryy from './components/trekContentList/Inquiry'
import UserList from './components/trekContentList/UserList';
import About from "./components/page/About"
import TermCondition from './components/page/TermCondition';
import Privacy from './components/page/Privacy';
import Bookingcancellation from './components/page/Bookingcancellation';
import Awardcertification from './components/page/Awardcertification';
import { OfferList } from "./components/offer/OfferList"


axios.defaults.withCredentials = true;

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {/* <Route path="/" element={<Navigate to="/dash" />} /> */}
        <Route path="/" element={<Layout />}>
          <Route path="addOverview/:id" element={<AddOverview />} />
          <Route path="allTrek/:id?" element={<AllTrekviews />} />

          <Route path="termcond" element={<TermCondition />} />
          <Route path="privacy" element={<Privacy />} />
          <Route path="bookingcancelation" element={<Bookingcancellation />} />
          <Route path="aboutus" element={<About />} />
          <Route path="award&certificate" element={<Awardcertification />} />



          <Route path="alltreks" element={<AllTrekviews />} />
          <Route path="bookingss" element={<Bookings />} />
          <Route path="inquiryy" element={<Inquiryy />} />
          <Route path="userlist" element={<UserList />} />

          <Route path="offerlist" element={<OfferList />} />

          <Route path="location" element={<Location />} />
          <Route path="booking/:id?" element={<Bookings />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
