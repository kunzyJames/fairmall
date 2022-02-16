import React from "react";
import { BrowserRouter as Router, Routes, Route, Redirect } from 'react-router-dom';
import { pure } from "recompose";

import ProtectedRoute from "./ProtectedRoute";

// pages
const Home = React.lazy(() => import("../components/pages/Home"));


export default pure(() => (
  <Router>
    <Routes>
    <Route path="/shop" element={<Home/>} />
{/*    
    <ProtectedRoute path="/admin/property-request" exact component={PropertyRequest} /> */}
    <Route render={() => <h1>Error 404. Page not found.</h1>} />
    </Routes>
 
  </Router>
));
