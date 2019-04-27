import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { Header } from 'components';
import { Layout } from 'layouts';
import { Link } from 'gatsby';

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

const Terms = center => (
  <Layout>
    <Helmet title={'Terms of Service - BestPricingPages'} />
    <Header title="Terms of Service">Last updated: April 27, 2019</Header>
    <Wrapper>
        Please read these Terms of Service ("Terms", "Terms of Service") carefully before using the https://bestpricingpages.com website (the "Service") operated by BestPricingPages ("us", "we", or "our").<br />
        Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms. These Terms apply to all visitors, users and others who access or use the Service.<br />
        By accessing or using the Service you agree to be bound by these Terms. If you disagree with any part of the terms then you may not access the Service.<br />
        <br /><br />
        <h2>Appropriate Use and Access</h2>
        By agreeing to these Terms of Service, you represent that you are at least the age of majority in your state or province of residence, or that you are the age of majority in your state or province of residence and you have given us your consent to allow any of your minor dependents to use this site.
        You may not use our products for any illegal or unauthorized purpose nor may you, in the use of the Service, violate any laws in your jurisdiction (including but not limited to copyright laws).
        You must not transmit any worms or viruses or any code of a destructive nature.
        A breach or violation of any of the Terms will result in an immediate termination of your Services.
        <br /><br />
        <h2>Accuracy, Completeness And Timeliness Of Information</h2>
        We are not responsible if information made available on this site is not accurate, complete or current. The material on this site is provided for general information only and should not be relied upon or used as the sole basis for making decisions without consulting primary, more accurate, more complete or more timely sources of information. Any reliance on the material on this site is at your own risk.<br />
        This site may contain certain historical information. Historical information, necessarily, is not current and is provided for your reference only. We reserve the right to modify the contents of this site at any time, but we have no obligation to update any information on our site. You agree that it is your responsibility to monitor changes to our site.<br />
        <br /><br />
        <h2>User Comments, Feedback And Other Submissions</h2>
        If, at our request, you send certain specific submissions (for example contest entries) or without a request from us you send creative ideas, suggestions, proposals, plans, or other materials, whether online, by email, by postal mail, or otherwise (collectively, 'comments'), you agree that we may, at any time, without restriction, edit, copy, publish, distribute, translate and otherwise use in any medium any comments that you forward to us. We are and shall be under no obligation (1) to maintain any comments in confidence; (2) to pay compensation for any comments; or (3) to respond to any comments.<br />
        We may, but have no obligation to, monitor, edit or remove content that we determine in our sole discretion are unlawful, offensive, threatening, libelous, defamatory, pornographic, obscene or otherwise objectionable or violates any party’s intellectual property or these Terms of Service.<br />
        You agree that your comments will not violate any right of any third-party, including copyright, trademark, privacy, personality or other personal or proprietary right. You further agree that your comments will not contain libelous or otherwise unlawful, abusive or obscene material, or contain any computer virus or other malware that could in any way affect the operation of the Service or any related website. You may not use a false e-mail address, pretend to be someone other than yourself, or otherwise mislead us or third-parties as to the origin of any comments. You are solely responsible for any comments you make and their accuracy. We take no responsibility and assume no liability for any comments posted by you or any third-party.
        <br /><br />
        <h2>Links To Other Web Sites</h2>
        Our Service may contain links to third-party web sites or services that are not owned or controlled by BestPricingPages.<br />
        BestPricingPages has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third party web sites or services. You further acknowledge and agree that BestPricingPages shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with use of or reliance on any such content, goods or services available on or through any such web sites or services.<br />
        We strongly advise you to read the terms and conditions and privacy policies of any third-party web sites or services that you visit.
        <br /><br />
        <h2>Personal Information & Privacy Policy</h2>
        Your submission of personal information through the website is governed by our <Link to="/privacy">Privacy Policy</Link>.
        <br /><br />
        <h2>Prohibited Uses</h2>
        In addition to other prohibitions as set forth in the Terms of Service, you are prohibited from using the site or its content: (a) for any unlawful purpose; (b) to solicit others to perform or participate in any unlawful acts; (c) to violate any international, federal, provincial or state regulations, rules, laws, or local ordinances; (d) to infringe upon or violate our intellectual property rights or the intellectual property rights of others; (e) to harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate based on gender, sexual orientation, religion, ethnicity, race, age, national origin, or disability; (f) to submit false or misleading information; (g) to upload or transmit viruses or any other type of malicious code that will or may be used in any way that will affect the functionality or operation of the Service or of any related website, other websites, or the Internet; (h) to collect or track the personal information of others; (i) to spam, phish, pharm, pretext, spider, crawl, or scrape; (j) for any obscene or immoral purpose; or (k) to interfere with or circumvent the security features of the Service or any related website, other websites, or the Internet. We reserve the right to terminate your use of the Service or any related website for violating any of the prohibited uses.
        <br /><br />
        <h2>Termination</h2>
        We may terminate or suspend access to our Service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
        All provisions of the Terms which by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity and limitations of liability.
        <br /><br />
        <h2>DISCLAIMER OF WARRANTIES; LIMITATION OF LIABILITY</h2>
        WE DO NOT GUARANTEE, REPRESENT OR WARRANT THAT YOUR USE OF OUR SERVICE WILL BE UNINTERRUPTED, TIMELY, SECURE OR ERROR-FREE.
        WE DO NOT WARRANT THAT THE RESULTS THAT MAY BE OBTAINED FROM THE USE OF THE SERVICE WILL BE ACCURATE OR RELIABLE.<br />
        YOU AGREE THAT FROM TIME TO TIME WE MAY REMOVE THE SERVICE FOR INDEFINITE PERIODS OF TIME OR CANCEL THE SERVICE AT ANY TIME, WITHOUT NOTICE TO YOU.<br />
        YOU EXPRESSLY AGREE THAT YOUR USE OF, OR INABILITY TO USE, THE SERVICE IS AT YOUR SOLE RISK. THE SERVICE AND ALL PRODUCTS AND SERVICES DELIVERED TO YOU THROUGH THE SERVICE ARE (EXCEPT AS EXPRESSLY STATED BY US) PROVIDED 'AS IS' AND 'AS AVAILABLE' FOR YOUR USE, WITHOUT ANY REPRESENTATION, WARRANTIES OR CONDITIONS OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING ALL IMPLIED WARRANTIES OR CONDITIONS OF MERCHANTABILITY, MERCHANTABLE QUALITY, FITNESS FOR A PARTICULAR PURPOSE, DURABILITY, TITLE, AND NON-INFRINGEMENT.<br />
        IN NO CASE SHALL BESTPRICINGPAGES, OUR DIRECTORS, OFFICERS, EMPLOYEES, AFFILIATES, AGENTS, CONTRACTORS, INTERNS, SUPPLIERS, SERVICE PROVIDERS OR LICENSORS BE LIABLE FOR ANY INJURY, LOSS, CLAIM, OR ANY DIRECT, INDIRECT, INCIDENTAL, PUNITIVE, SPECIAL, OR CONSEQUENTIAL DAMAGES OF ANY KIND, INCLUDING, WITHOUT LIMITATION LOST PROFITS, LOST REVENUE, LOST SAVINGS, LOSS OF DATA, REPLACEMENT COSTS, OR ANY SIMILAR DAMAGES, WHETHER BASED IN CONTRACT, TORT (INCLUDING NEGLIGENCE), STRICT LIABILITY OR OTHERWISE, ARISING FROM YOUR USE OF ANY OF THE SERVICE OR ANY PRODUCTS PROCURED USING THE SERVICE, OR FOR ANY OTHER CLAIM RELATED IN ANY WAY TO YOUR USE OF THE SERVICE OR ANY PRODUCT, INCLUDING, BUT NOT LIMITED TO, ANY ERRORS OR OMISSIONS IN ANY CONTENT, OR ANY LOSS OR DAMAGE OF ANY KIND INCURRED AS A RESULT OF THE USE OF THE SERVICE OR ANY CONTENT (OR PRODUCT) POSTED, TRANSMITTED, OR OTHERWISE MADE AVAILABLE VIA THE SERVICE, EVEN IF ADVISED OF THEIR POSSIBILITY. BECAUSE SOME STATES OR JURISDICTIONS DO NOT ALLOW THE EXCLUSION OR THE LIMITATION OF LIABILITY FOR CONSEQUENTIAL OR INCIDENTAL DAMAGES, IN SUCH STATES OR JURISDICTIONS, OUR LIABILITY SHALL BE LIMITED TO THE MAXIMUM EXTENT PERMITTED BY LAW.
        <br /><br />
        <h2>Indemnification</h2>
        You agree to indemnify, defend and hold harmless BestPricingPages and our parent, subsidiaries, affiliates, partners, officers, directors, agents, contractors, licensors, service providers, subcontractors, suppliers, interns and employees, harmless from any claim or demand, including reasonable attorneys’ fees, made by any third-party due to or arising out of your breach of these Terms of Service or the documents they incorporate by reference, or your violation of any law or the rights of a third-party.
        <br /><br />
        <h2>Severability</h2>
        In the event that any provision of these Terms of Service is determined to be unlawful, void or unenforceable, such provision shall nonetheless be enforceable to the fullest extent permitted by applicable law, and the unenforceable portion shall be deemed to be severed from these Terms of Service, such determination shall not affect the validity and enforceability of any other remaining provisions.
        <br /><br />
        <h2>Entire Agreement</h2>
        The failure of us to exercise or enforce any right or provision of these Terms of Service shall not constitute a waiver of such right or provision.<br />
        These Terms of Service and any policies or operating rules posted by us on this site or in respect to The Service constitutes the entire agreement and understanding between you and us and govern your use of the Service, superseding any prior or contemporaneous agreements, communications and proposals, whether oral or written, between you and us (including, but not limited to, any prior versions of the Terms of Service).<br />
        Any ambiguities in the interpretation of these Terms of Service shall not be construed against the drafting party.
        <br /><br />
        <h2>Indemnification</h2>
        You agree to indemnify, defend and hold harmless BestPricingPages and our parent, subsidiaries, affiliates, partners, officers, directors, agents, contractors, licensors, service providers, subcontractors, suppliers, interns and employees, harmless from any claim or demand, including reasonable attorneys’ fees, made by any third-party due to or arising out of your breach of these Terms of Service or the documents they incorporate by reference, or your violation of any law or the rights of a third-party.
        <br /><br />
        <h2>Governing Law</h2>
        These Terms shall be governed and construed in accordance with the laws of Quebec, Canada, without regard to its conflict of law provisions.<br />
        Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect. These Terms constitute the entire agreement between us regarding our Service, and supersede and replace any prior agreements we might have between us regarding the Service.
        <br /><br />
        <h2>Modifications & Changes</h2>
        You can review the most current version of the Terms of Service at any time at this page.<br />
        We reserve the right, at our sole discretion, to modify or replace these Terms and all or part of the Service at any time. If a terms revision is material we will try to provide at least 15 days notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
        By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, please stop using the Service.
        <br /><br />
        <h2>Contact Us</h2>
        If you have any questions about these Terms, please contact us at contact(a)bestpricingpages.com.
        <br /><br /><br /><br />
    </Wrapper>
  </Layout>
);

export default Terms;
