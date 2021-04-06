import React, { Component } from 'react';
import Footer from '../Footer/Footer';

import './Campaign.css';
import CampaignMov from './CampaignMov';
import CampaignWeb from './CampaignWeb';

export default class Campaign extends Component{
   render(){
      return(
         <div className="CampaignMainBox" id="Campaign">
            <CampaignWeb/>
            <CampaignMov/>
            <Footer/>
         </div>
      );
   }
}