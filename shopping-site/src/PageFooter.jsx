import React from 'react';
import FacebookLink from './FacebookLink';
import InstagramLink from './InstagramLink';
import TwitterLink from './TwitterLink';

const PageFooter = () => {
    return (
        <div className="contact-details">
            <FacebookLink />
            <TwitterLink />
            <InstagramLink />            
        </div> 
  );
};
export default PageFooter;