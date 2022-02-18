import React, { createRef } from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route, Redirect, Navigate } from 'react-router-dom';
import Navigation from './components/layouts/Navigation';
// import PortalRoutes from './routes/PortalRoutes';
import Home from './components/pages/Home';
import { Roller } from "react-awesome-spinners";
import ProductDescription from "./components/pages/ProductDescription";


function App( ) {
  return (
    <>
     <React.Suspense
      fallback={
        <div className="h-screen flex justify-center content-center items-center">
          <Roller />
        </div>
      }>
    <div className="">
{/* <Navigation/> */}
{/* <Router>
    <Routes>
    <Route path="/shop" element={<Home/>} />
   
    <ProtectedRoute path="/admin/property-request" exact component={PropertyRequest} />
    <Route render={() => <h1>Error 404. Page not found.</h1>} />
    </Routes>
 
  </Router> */}

{/* <Home/> */}
<ProductDescription/>
    </div>
    </React.Suspense>
   
{/* 
  <CardFooter/> */}
    
    </>
    
  );
}

export default App;
