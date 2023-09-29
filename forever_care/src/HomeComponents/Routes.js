// routes.js
import React from 'react';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
// import { Switch } from '@chakra-ui/react';

import { Home }from '../Pages/Home'; // Create Home component
// import {Services} from '../serviceComponents/Services'; // Create Services component
import {About} from '../Pages/About'; // Create About component
import {Packages} from '../Pages/Packages'; // Create Packages component
import {Contact} from '../Pages/Contact'; // Create Contact component
import { SignUp } from '../LoginComponent/Signup';
import { Services } from '../serviceComponents/Services';

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route exact path="/" component={Home} />
        {/* <Route path="/services" component={Services} /> */}
        <Route path='/services' element={<Services />}/>
        <Route path="/about" component={About} />
        <Route path="/packages" component={Packages} />
        <Route path="/contact" component={Contact} />
        <Route path='/login' element={<SignUp />} />
      </Routes>
    </div> 
  );
};

export default AllRoutes;