import React from 'react';
import './ShareInfo.css';
import { EmailShareButton, EmailIcon, WhatsappShareButton, WhatsappIcon, FacebookShareButton, FacebookIcon, TwitterShareButton, TwitterIcon, LinkedinShareButton, LinkedinIcon,  RedditShareButton, RedditIcon } from 'react-share';

const ShareInfo = () => {

  const pageUrl = String(window.location);
  //const pageUrl =`www.countryInfo.com/countryX`; 
  const mainText = `Check out this country information:`;
  const emailSubject = `Explore the world - Country X`;
  const facebookHashtag = `#exploreworld`;
  const twitterAccount = `ExploreWorld`;
  const twitterHashtag = [`explore`, 'world'];
  const twitterText =`Check out this country information: ${pageUrl}`;

  return (
    <div className="share-section">
      <div className="share-label">Click to share:</div>
      <div>
        <EmailShareButton 
          url={pageUrl} 
          subject={emailSubject}
          body={mainText}>
          <EmailIcon round={true} size={24}/>
        </EmailShareButton>

        <WhatsappShareButton 
          url={pageUrl} 
          title={mainText}>
          <WhatsappIcon round={true} size={24}/>
        </WhatsappShareButton>

        <FacebookShareButton 
          url={pageUrl} 
          quote={mainText}
          hashtag={facebookHashtag}>
          <FacebookIcon round={true} size={24}/>
        </FacebookShareButton>

        <TwitterShareButton 
          url={pageUrl} 
          title={twitterText}
          via={twitterAccount}
          hashtags={twitterHashtag}
          >
          <TwitterIcon round={true} size={24}/>
        </TwitterShareButton>

        <LinkedinShareButton
          url={pageUrl} 
          windowWidth={750}
          windowHeight={600}>
          <LinkedinIcon round={true} size={24}/>
        </LinkedinShareButton>

        <RedditShareButton
          url={pageUrl} 
          title={mainText}
          windowWidth={750}
          windowHeight={600}>
          <RedditIcon round={true} size={24}/>
        </RedditShareButton>
      </div>

    </div>
  )}
 
export default ShareInfo;