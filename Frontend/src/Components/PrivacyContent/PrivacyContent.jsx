import React from "react";
import "./PrivacyContent.css";
import heroImg from "../../assets/privacy-policy.webp";

const TermsPage = () => {
  return (
    <section className="terms-page-wrapper">
      {/* HERO IMAGE */}
      <div className="terms-page-hero">
        <img src={heroImg} alt="Terms banner" />
      </div>

      {/* CONTENT */}
      <div className="terms-page-content">
        <p className="terms-page-updated">
          This Privacy Policy was last updated on September 1, 2020.
        </p>

        <h2>1. What Data We Get</h2>
        <p>Our website address is: http://staxexample.com</p>

        <div className="terms-page-highlight">
          We collect certain data from you directly, like information you enter
          yourself, data about your participation in courses, and data from
          third-party platforms you connect with Stax. We also collect some data
          automatically, like information about your device and what parts of
          our Services you interact with or spend time using.
        </div>

        <h2>2. Data You Provide to Us</h2>
        <p>
          We may collect different data from or about you depending on how you
          use the Services. Below are some examples to help you better
          understand the data we collect.
        </p>

        <h2>3. How We Get Data About You</h2>
        <p>
          We use tools like cookies, web beacons, analytics services, and advertising providers to gather the data listed above. Some of these tools offer you the ability to opt out of data collection.
        </p>

        <h2>4. What We Use Your Data For</h2>
        <ol>
          <li>Responding to your questions and concerns</li>
          <li>Sending you administrative messages and information, including messages from instructors and teaching assistants, notifications about changes to our Service, and updates to our agreements;</li>
          <li>Sending push notifications to your wireless device to provide updates and other relevant messages (which you can manage from the “options” or “settings” page of the mobile app);</li>
        </ol>

        <h2>5. Your Choices About the Use of Your Data</h2>
        <p>
          You can choose not to provide certain data to us, but you may not be
          able to use certain features of the Services.
        </p>

        <ul>
          <li>To stop receiving promotional communications from us, you can opt out by using the unsubscribe mechanism in the promotional communication you receive or by changing the email preferences in your account. Note that regardless of your email preference settings, we will send you transactional and relationship messages regarding the Services, including administrative confirmations, order confirmations, important updates about the Services, and notices about our policies.</li>
          <li>The browser or device you use may allow you to control cookies and other types of local data storage. Your wireless device may also allow you to control whether location or other data is collected and shared. You can manage Adobe's LSOs through their Website Storage Settings panel.</li>
          <li>To get information and control cookies used for tailored advertising from participating companies, see the consumer opt-out pages for the Network Advertising Initiative and Digital Advertising Alliance, or if you're located in the European Union, visit the Your Online Choices site. To opt out of Google's display advertising or customize Google Display Network ads, visit the Google Ads Settings page. To opt out of Taboola's targeted ads, see the Opt-out Link in their Cookie Policy.</li>
          <li>Update your account information anytime .</li>
        </ul>

        <h2>6. Our Policy Concerning Children</h2>
        <p>
            We recognize the privacy interests of children and encourage parents and guardians to take an active role in their children's online activities and interests. Children under 13 (or under 16 in the European Economic Area) should not use the Services. If we learn that we've collected personal data from a child under those ages.
        </p>
      </div>
    </section>
  );
};

export default TermsPage;
