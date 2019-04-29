import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { Header } from 'components';
import { Layout } from 'layouts';

const Wrapper = styled.section`
  margin: auto;
  padding: 2rem 0 0 0;
  width: 50%;
  max-width: ${props => props.theme.layout[props.type]};
  height: 100%;
  flex: 1;
  @media (max-width: ${props => props.theme.breakpoints.m}) {
    width: 80%;
  }
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    width: 90%;
  }
  ul{
    margin-left: 2rem;
    margin-top: 0.6rem;
  }
`;

const Privacy = center => (
  <Layout>
    <Helmet title={'Privacy - BestPricingPages'} />
    <Header title="Privacy Policy">Effective date: April 27, 2019</Header>
    <Wrapper>
    This Privacy Policy describes how your personal information is collected, used, and shared when you visit bestpricingpages.com (the “Site”).
    We aim for the greatest respect of your privacy.<br /><br />
    <h2>PERSONAL INFORMATION WE COLLECT</h2>
    When you visit the Site, we automatically collect certain information about your device, including information about your web browser, IP address, time zone, and some of the cookies that are installed on your device. Additionally, as you browse the Site, we collect information about the individual web pages or products that you view, what websites or search terms referred you to the Site, and information about how you interact with the Site. We refer to this automatically-collected information as “Device Information&quot; and &quot;Usage Information&quot;.<br />
    We collect Device Information using the following technologies:<br />
    <ul>
    <li>“Cookies” are data files that are placed on your device or computer and often include an anonymous unique identifier. For more information about cookies, and how to disable cookies, visit <a href="http://www.allaboutcookies.org">http://www.allaboutcookies.org</a>.</li>
    <li>“Log files” track actions occurring on the Site, and collect data including your IP address, browser type, Internet service provider, referring/exit pages, and date/time stamps.</li>
    <li>“Web beacons,” “tags,” and “pixels” are electronic files used to record information about how you browse the Site.</li>
    </ul>
    When we talk about “Personal Information” in this Privacy Policy, we are talking both about Device Information and Usage Information.<br /><br />
    <h2>HOW DO WE USE YOUR PERSONAL INFORMATION?</h2>
    BestPricingPages uses the collected data for various purposes:<br />
    <ul>
        <li>To provide and maintain the Service</li>
        <li>To notify you about changes to our Service</li>
        <li>To allow you to participate in interactive features of our Service when you choose to do so</li>
        <li>To provide customer care and support</li>
        <li>To provide analysis or valuable information so that we can improve the Service</li>
        <li>To monitor the usage of the Service</li>
        <li>To detect, prevent and address technical issues</li>
    </ul>
    Please note once again that we anonymize all data. <br /><br />
    <h2>SERVICE PROVIDERS</h2>
    We may employ third party companies and individuals to facilitate our Service ("Service Providers"), to provide the Service on our behalf, to perform Service-related services or to assist us in analyzing how our Service is used.<br />
    These third parties have access to your Personal Data only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.<br /><br />
    <h2>LINKS TO OTHER SITES</h2>
    Our Service may contain links to other sites that are not operated by us. If you click a third party link, you will be directed to that third party's site. We strongly advise you to review the Privacy Policy of every site you visit.<br />
    We have no control over and assume no responsibility for the content, privacy policies or practices of any third party sites or services.<br /><br />
    <h2>SHARING YOUR PERSONAL INFORMATION</h2>
    Your information, including Personal Data, may be transferred to - and maintained on - computers located outside of your state, province, country or other governmental jurisdiction where the data protection laws may differ than those from your jurisdiction.<br />
    If you are located outside Canada and choose to provide information to us, please note that we transfer the data, including Personal Data, to Canada and process it there.<br />
    Your consent to this Privacy Policy followed by your submission of such information represents your agreement to that transfer.<br />
    BestPricingPages will take all steps reasonably necessary to ensure that your data is treated securely and in accordance with this Privacy Policy and no transfer of your Personal Data will take place to an organization or a country unless there are adequate controls in place including the security of your data and other personal information.<br />
    <br /><br />
    We may use third-party Service Providers to monitor and analyze the use of our Service.
    We also use Google Analytics to help us understand how our customers use the Site--you can read more about how Google uses your Personal Information here:  <a href="https://www.google.com/intl/en/policies/privacy/">https://www.google.com/intl/en/policies/privacy/</a>.  You can also opt-out of Google Analytics here:  <a href="https://tools.google.com/dlpage/gaoptout">https://tools.google.com/dlpage/gaoptout</a>.
    Please do note that we respect DNT requests and we anonymize all data.<br />
    Finally, we may also share your Personal Information to comply with applicable laws and regulations, to respond to a subpoena, search warrant or other lawful request for information we receive, or to otherwise protect our rights.<br /><br />
    <h2>DO NOT TRACK</h2>
    Please note that we do alter our Site’s data collection and use practices when we see a Do Not Track signal from your browser.<br /><br />
    <h2>YOUR RIGHTS</h2>
    If you are a European resident, you have the right to access personal information we hold about you and to ask that your personal information be corrected, updated, or deleted. If you would like to exercise this right, please contact us through the contact information below.<br />
    Additionally, if you are a European resident we note that we are processing your information in order to fulfill contracts we might have with you (for example if you make an order through the Site), or otherwise to pursue our legitimate business interests listed above.  Additionally, please note that your information will be transferred outside of Europe, including to Canada and the United States.<br /><br />
    <h2>DATA RETENTION</h2>
    Please get in touch if you'd like your data to be removed<br /><br />
    <h2>SECURITY OF DATA</h2>
    The security of your data is important to us but remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.<br /><br />
    <h2>MINORS</h2>
    We do not knowingly collect personally identifiable information from anyone under the age of 18. If you are a parent or guardian and you are aware that your Child has provided us with Personal Data, please contact us. If we become aware that we have collected Personal Data from children without verification of parental consent, we take steps to remove that information from our servers.<br /><br />
    <h2>CHANGES</h2>
    We may update this privacy policy from time to time in order to reflect, for example, changes to our practices or for other operational, legal or regulatory reasons.<br /><br />
    <h2>CONTACT US</h2>
    For more information about our privacy practices, if you have questions, or if you would like to make a complaint, please contact us by e-mail at privacy(a)bestpricingpages.com.<br />
<br /><br /><br />
    </Wrapper>
  </Layout>
);

export default Privacy;
