import React from 'react';

import DreamJob from '../LandingPage/DreamJob';
import Companies from '../LandingPage/Companies';
import JobCategory from '../LandingPage/JobCategory';
import Working from '../LandingPage/Working';
import Testimonial from '../LandingPage/Testimonial';
import Subscribe from '../LandingPage/Subscribe';



const HomePage: React.FC = () => {
  return (
    <div className="min-h-[100vh] bg-mine-shaft-950 font-['poppins']">

      <DreamJob />
      <Companies />
      <JobCategory />
      <Working />
      <Testimonial />
      <Subscribe />


    </div>
  );
};

export default HomePage;
