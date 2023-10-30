import React from 'react';
import InitiateChat from '../CreateNewOpportunity/InitiateChat';
import FrontEnds from './FrontEnd';
import OpportunityOverviews from './OpportunityOverview';

const PixelsAndGraph = () => {
    return (
        <div className='flex lg:flex-row flex-col-reverse'>
            <FrontEnds />
            <div>
                <OpportunityOverviews />
                <div className='lg:block hidden'>
                <InitiateChat/>
                </div>
            </div>
        </div>
    );
};

export default PixelsAndGraph;