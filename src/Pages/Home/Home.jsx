import React from 'react';
import Banner from '../../Components/Banner/Banner';
import TestimonialSection from '../../Components/TestimonialSection/TestimonialSection';
import OurTeam from '../../Components/OurTeam/OurTeam';

const Home = () => {
    return (
        <div>
            <div className="bg-black">
        <div className="bgImg">
          <Banner />
        </div>
        <TestimonialSection />
        <OurTeam />
      </div>
        </div>
    );
};

export default Home;