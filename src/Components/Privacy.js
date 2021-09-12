import React, { useState } from "react";
import { Link } from "react-scroll";
import { useHistory } from "react-router-dom";
import { RiArrowUpSLine } from "react-icons/ri";
import {TOGGLEPAGES } from './Redux/actions/indux'
import { useDispatch, useSelector } from "react-redux";
export default function Privacy() {
  const [Stick, setSticky] = useState(null);
  const [DisplaySearchbar, setDisplaySearchbar] = useState(false);
  const [BoxShadow, setBoxShadow] = useState("none");
  let history = useHistory();
  const dispatch = useDispatch();
  function goToCV() {
    dispatch(TOGGLEPAGES(true));
    localStorage.setItem("TogglePAge", JSON.stringify(true));
    history.push("/super_cv");
  }
  function goToCoverLetter() {
    dispatch(TOGGLEPAGES(false));
    localStorage.setItem("TogglePAge", JSON.stringify(false));
    history.push("/cover_letter");
  }
  function goToHome() {
    history.goBack();
  }
  const SetStickyPosition = () => {
    if (window.scrollY >= 152) {
      setSticky("0");
      setDisplaySearchbar(true);
      setBoxShadow("0 5px 5px rgb(0 0 0 / 40%)");
    } else {
      setSticky(null);
      setDisplaySearchbar(false);
      setBoxShadow("none");
    }
  };
  window.addEventListener("scroll", SetStickyPosition);
  return (
    <>
      <RiArrowUpSLine
        className="ArrowUP"
        onClick={() => window.scrollTo(0, 0)}
      />
      <div className="NaveBar">
        <div className="NaveBarLinks" onClick={goToHome}>
          Home
        </div>
        <div className="NaveBarLinks" onClick={goToCoverLetter}>
          Cover Letter
        </div>
        <div className="NaveBarLinks" onClick={goToCV}>
          CV
        </div>
      </div>
      {DisplaySearchbar && (
        <div
          style={{
            position: "sticky",
            top: Stick,
            zIndex: "3",
            boxShadow: BoxShadow,
          }}
        >
          <div className="NaveBar">
            <div className="NaveBarLinks" onClick={goToHome}>
              Home
            </div>
            <div className="NaveBarLinks" onClick={goToCoverLetter}>
              Cover Letter
            </div>
            <div className="NaveBarLinks" onClick={goToCV}>
              CV
            </div>
          </div>
        </div>
      )}
      <div className="HeadingTermOfSerives">Privacy Policy</div>
      <div className="OuterContainerTerm">
        <div>
          <div className="SubHeading1">Table of contents:</div>
          <p className="SubParagrapgh">
            <ul className="BullotsPrivacy">
              <Link spy={true} to={"A1"}>
                {" "}
                <li className="SubBolletsPrivacy">Introduction</li>
              </Link>
              <Link spy={true} to={"A"}>
                <li className="SubBolletsPrivacy">Usage information</li>
              </Link>
              <Link spy={true} to={"B"}>
                <li className="SubBolletsPrivacy">Log information</li>
              </Link>
              <Link spy={true} to={"C"}>
                <li className="SubBolletsPrivacy">Account information</li>
              </Link>
              <Link spy={true} to={"D"}>
                <li className="SubBolletsPrivacy">
                  Billing information and Payment details
                </li>
              </Link>
              <Link spy={true} to={"E"}>
                <li className="SubBolletsPrivacy">Contact information</li>
              </Link>
              <Link spy={true} to={"F"}>
                <li className="SubBolletsPrivacy">Sensitive information</li>
              </Link>
              <Link spy={true} to={"G"}>
                <li className="SubBolletsPrivacy">Cookies</li>
              </Link>
              <Link spy={true} to={"H"}>
                <li className="SubBolletsPrivacy">
                  How do we protect your personal information?
                </li>
              </Link>
              <Link spy={true} to={"I"}>
                <li className="SubBolletsPrivacy">Your legal rights</li>
              </Link>
              <Link spy={true} to={"I"}>
                <li className="SubBolletsPrivacy">
                  Can this Privacy Policy change?
                </li>
              </Link>
            </ul>
          </p>
        </div>
        <div>
          <div id={"A1"} className="SubHeading1">
            Introduction
          </div>
          <p className="SubParagrapgh">
            Resumes are deeply personal documents which reveal a lot about you.
            Enhancv values your privacy, so we've developed an easy to
            understand Privacy Policy that covers how we collect and use your
            information. Depending on your relationship with Enhancv, this info
            may include usage information,
            <br />
            <br /> log information, account or billing information, payment
            details, contact information. You can understand when we collect and
            how we treat each type of data in the sections below.
            <br />
            <br /> When we refer to “we” and “us”, we mean Enhancv Ltd. which
            controls the information collected when you use our services on the
            Enhancv platform (also called "service", “product” within this
            document) to create your resume (or, as better known in other parts
            of the world, a CV) or any other document.
            <br />
            <br /> Keep in mind we never share the information you provide with
            third parties, except for chosen partners that are used for the
            purpose of providing you with a stable and enjoyable experience when
            using Enhancv. We have tried to outline here the main points of how
            these partners and third party services collect and use data, but
            for the most detailed and up-to-date information you should review
            their own privacy policies.
            <br />
            <br /> You always remain in control of your data. You may edit or
            erase your data from our services at any time or ask us to update or
            erase information we store, as long as this erasure is not in
            conflict with any legal obligations we may hold to national and
            international regulators.
            <br />
            <br /> By providing us with your data, you warrant to us that you
            are over 13 years of age. If this is not the case, you need to
            contact us immediately to delete any personally identifiable
            information from our records.
            <br />
            <br /> Depending on your relationship with Enhancv, we’d collect
            different types of information, as outlined below.
          </p>
        </div>

        <div>
          <div id={"A"} className="SubHeading1">
            Usage information
          </div>
          <div className="Subtitle">What is it?</div>
          <p className="SubParagrapgh">
            When visiting one of our domains, we will collect information about
            your interaction with the site, like pages you visit and specific
            actions you take like signing up or sharing one of our resume
            examples.
            <br />
            <br /> When using the Enhancv platform for creating your resume, we
            will collect information about the way our platform is used,
            including features used, resume sections used, number of resumes
            created, design elements used, etc. All information you knowingly
            include in your resume, including email, address, telephone number,
            is also stored in our database.
            <br />
            <br /> This information is collected in combination with data like
            user location, Internet browser type, device, operating system, your
            language preference, or the referring website you came to us
            through.
            <br />
            <br /> If, during the usage of Enhancv, you decide to take advantage
            of our Invite Friends feature and decide to invite friends by email,
            we will collect and store the email addresses of those friends in
            order to show you whether they have subscribed through your link or
            not, to provide you with the option of resending the invitation and
            to remind you which of your friends you’ve already invited. In all
            other cases when using the feature (e.g. sharing the link on social
            media or as a link in direct messaging platforms), we will only
            collect referral data, showing us a person came through your invite
            link, so that we can assign your earned credit.
          </p>
        </div>

        <div>
          <div className="SubHeading1">How do we use it?</div>
          <p className="SubParagrapgh">
            Usage information is used primarily in aggregate for statistical
            purposes. It helps us understand which parts of our product are of
            greatest interest and also provides information used to improve our
            platform and develop exciting new features. This information is
            shared with our third-party analytics services (including Google
            Analytics, Amplitude, Intercom and Attribution App). Those services
            operate either within the EU or in accordance with the EU-US Privacy
            Shield, ensuring the secure transfer of information.
            <br />
            <br /> Resume content is stored for the purpose of providing you
            with the primary service of Enhancv - creating, storing, displaying,
            and rendering your resume. This information is stored in JSON format
            in mLab database hosting.
            <br />
            <br /> Information about your invited friends is sent to Mandrill
            for the purpose of sending out the email invitations.
          </p>
        </div>
        <div>
          <div className="SubHeading1">Data retention</div>
          <p className="SubParagrapgh">
            Usage information stored in Google Analytics is kept up to 26 months
            after your last visit and afterwards used only in aggregate reports.
            Usage information in Amplitude, Intercom, and Attribution App is
            kept for an indefinite period of time and used only in aggregate to
            analyze usage patterns.
            <br />
            <br /> Resume content is stored for the duration of that resume
            being kept on our platform. If you delete your resume or delete your
            account, all resume content is instantaneously removed from our
            database.
            <br />
            <br /> Information about invited friends is kept within the Mandrill
            platform for 30 days after email sendout.
          </p>
        </div>
        <div>
          <div id={"B"} className="SubHeading1">
            Log information
          </div>
          <div className="Subtitle">What is it?</div>
          <p className="SubParagrapgh">
            Log data contain data about the nature of each access of our
            services, including originating Internet Protocol (IP) addresses and
            endpoint (the requested files on our platform), as well as
            timestamps for this activity. Web servers usually keep log files
            that record data each time a device accesses those servers.
            <br />
            <br /> We will also collect error logs which may collect more system
            data needed to fix known platform bugs.
          </p>
          <div className="Subtitle">How do we use it?</div>
          <p className="SubParagrapgh">
            Log data is used to analyze platform usage, improve performance and
            eliminate any bugs. We primarily look at this information in
            aggregate, but we might review individual logs when looking for the
            cause of a specific issues. This may happen either by our own
            initiative or in relation to a request you log with our customer
            success team.
            <br />
            <br /> Only a small part of our engineering team has access to the
            full platform logs.
          </p>
          <div className="Subtitle">Data retention</div>
          <p className="SubParagrapgh">
            Log data stored on our platform is kept for an indefinite period of
            time to help us review potential recurrence of bugs and user issues,
            and to monitor any attempts for unauthorised access to our services.
          </p>
        </div>
        <div>
          <div id={"C"} className="SubHeading1">
            Account information
          </div>
          <div className="Subtitle">What is it?</div>
          <p className="SubParagrapgh">
            When you create an account on the Enhancv platform, you may register
            with your name, email address and a password you choose. Those are
            stored in our platform.
            <br />
            <br /> If you choose to register by using a third-party account
            (LinkedIn or Facebook), we receive your personal information (name,
            profile photo, email, and work experience information that can be
            included in your resume) from third parties if you give permission
            to those third parties to share your information with us. Your
            password for those third-party services is never shared with us.
          </p>
          <div className="Subtitle">How do we use it?</div>
          <p className="SubParagrapgh">
            Account information is used to create your Enhancv account and
            identify you when logging into our platform to provide your
            account’s content.
          </p>
          <div className="Subtitle">Data retention</div>
          <p className="SubParagrapgh">
            Your account information is kept during your account’s lifetime in
            order to identify you when logging to the platform. If you delete
            your account, we keep your email address in order to resolve
            following billing issues for the same user.
          </p>
        </div>
        <div>
          <div id={"D"} className="SubHeading1">
            Billing information and Payment details
          </div>
          <div className="Subtitle">What is it?</div>
          <p className="SubParagrapgh">
            If you are using one of our paid plans, you need to provide billing
            information and payment details (credit card or Paypal account).
            <br />
            <br />
            Payments are processed by Braintree, a Level 1 PCI DSS compliant
            third-party and your credit card info is safely stored with them.
            Our partners never share with us payment details - we never receive
            your credit card or Paypal account information under any
            circumstances.
            <br />
            <br /> We analyze and review payment trends with the help of
            Baremetrics. Information contains name, user email addresses,
            information about plan types and sums paid.
          </p>
          <div className="Subtitle">How do we use it?</div>
          <p className="SubParagrapgh">
            We use your billing information to log payments submitted as part of
            your plan. You can view information about all payments you’ve made
            to us on the Billing page of your account. You are also able to
            update your details whenever you need to.
            <br />
            <br /> Aggregate information about payments is used with statistical
            purposes and to execute our legitimate interest of making our
            business more sustainable.
          </p>
          <div className="Subtitle">Data retention</div>
          <p className="SubParagrapgh">
            We store billing information and a full history of your payments
            even if you cancel your subscription or delete your account. This is
            part of our legal obligation to keep transaction records for local
            or international authorities. We also store your IP address together
            with your invoice data, so that we pay tax accordingly and comply
            with European Tax Law.
            <br />
            <br /> We never receive or store any payment details - they are kept
            with our payment partners. For further information you may refer to
            Braintree’s privacy policy.
          </p>
        </div>
        <div>
          <div id={"E"} className="SubHeading1">
            Contact information
          </div>
          <div className="Subtitle">What is it?</div>
          <p className="SubParagrapgh">
            If you contact us with a question, through any of our communication
            channels, like our Help Center, email, or through our social media
            accounts on Facebook, Twitter, or LinkedIn, we will receive and
            store your contact details, like email, name, or social media
            account link.
            <br />
            <br /> In the case of support queries, we might need additional
            information to help you with your request - this will depend on the
            nature of your query and issue at hand. We will aim to ask for the
            minimal additional information needed to solve your request. You may
            also provide us with your contact details when subscribing to our
            newsletter or product news list. We might also collect information
            about categories of interests you provide us with, such as what
            types of content do you want to receive from us.
          </p>
          <div className="Subtitle">How do we use it?</div>
          <p className="SubParagrapgh">
            We use your contact information to communicate regarding your query,
            in the case of support request, or to send you product updates and
            helpful materials that will help you get the most of Enhancv and
            create a resume you’re proud of.
            <br />
            <br /> Before we send you any promotional messages or content, we
            will collect your explicit consent for doing so. We may send you
            product news and updates about our latest features on rare
            occasions, as this is in line with our commitment for bringing value
            to our users, as well as our legitimate interests as service
            provider. You can unsubscribe from both types of communication - you
            will find an unsubscribe link in the footer of each promotional
            email we send out. You can also manage those settings from your
            Enhancv Account. All our email communication is managed through our
            partners Intercom.
            <br />
            <br /> If you are a registered user of our platform, we will
            continue sending high priority information about your account,
            billing status, changes to our terms of service and other important
            topics. This information is an integral part of providing you our
            service and is managed either through Intercom or Mandrill. If you
            delete your account, you will stop receiving further communication
            from us.
          </p>
          <div className="Subtitle">Data retention</div>
          <p className="SubParagrapgh">
            All communication history through our official communication
            channels between you and our team is kept in Intercom for future
            reference, even if your account is deleted. This is done in order to
            be able to answer complaints or any future questions you might have.
            <br />
            <br />
            Contact information used for subscribing to promotional emails or
            product news is kept in our active subscriber lists. If you
            unsubscribe, we will still keep your contact information on file to
            prevent future email send-outs.
            <br />
            <br /> For all types of communication information, you can request
            that we delete your data and we’ll do so within a 30 day period.
          </p>
        </div>
        <div>
          <div id={"F"} className="SubHeading1">
            Sensitive information
          </div>
          <p className="SubParagrapgh">
            We do not knowingly collect any Sensitive Data about you. Sensitive
            data refers to data that includes details about your race or
            ethnicity, religious or philosophical beliefs, sex life, sexual
            orientation, political opinions, trade union membership, information
            about your health and genetic and biometric data. We do not collect
            any information about criminal convictions and offences. If you
            include such information as part of the content of your resume, we
            would still not purposefully collect and store this information or
            disclose to anyone.
          </p>
        </div>
        <div>
          <div id={"G"} className="SubHeading1">
            Cookies
          </div>
          <div className="Subtitle">What is it?</div>
          <p className="SubParagrapgh">
            A "cookie" is a piece of information that is stored on your computer
            and which records how you move your way around a website, so that
            when you revisit that website, it can present tailored options based
            on the information stored about your last visit. Cookies can also be
            used to analyse traffic and for advertising and marketing purposes.
            Cookies are used by nearly all websites and do not harm your system.
            <br />
            <br />
            Cookies can be session-based - only stored on your computer during
            your web session and are automatically deleted when you close your
            browser - or persistent - remaining even after you close your
            browser. Persistent cookies are stored as a file on your computer
            and can be read only by the website that created them when you visit
            that website again.
          </p>
          <div className="Subtitle">How do we use it?</div>
          <p className="SubParagrapgh">
            We use cookies to track your use of our website. This enables us to
            understand how you use the site and track any patterns with regards
            how you are using our website. This helps us to develop and improve
            our platform in response to what you might need or want.
            <br />
            <br /> For registered users, our platform uses cookies and HTML5
            browser local storage to save your preferences and authenticate you.
            The third-party services we use might also use cookies, pixel tags
            and other similar technologies.
            <br />
            <br /> Cookies are also used to pursue our legitimate interests of
            improving marketing performance by analyzing the effectiveness of
            advertising and other promotional efforts.
            <br />
            <br /> We use cookies in Google Analytics, Amplitude and Attribution
            App to analyze aggregate data for the purposes outlined above. We
            also cookies or pixel tags for services such as Facebook, LinkedIn,
            or Twitter in order to create and manage marketing campaigns
          </p>
          <div className="Subtitle">Deactivating cookies</div>
          <p className="SubParagrapgh">
            You can set your browser to refuse all or some browser cookies, or
            to alert you when websites set or access cookies. If you disable or
            refuse cookies, please note that some parts of this website may not
            function properly. You can visit this page for more information on
            how to manage and remove cookies across a number of different
            internet browsers.
            <br />
            <br /> You can also deactivate specific 3rd party cookies through
            the following page managed by the EDAA (European Interactive Digital
            Advertising Alliance).
          </p>
          <br />
          <br />
          <p className="SubParagrapgh">
            Information and opt-out options for some common cookie providers
            used by us can be found here:
          </p>
          <br />
          <br />
          <ul className="BullotsPrivacy">
            <li className="SubBolletsPrivacy">Google Analytics</li>
            <li className="SubBolletsPrivacy">Google AdWords</li>
            <li className="SubBolletsPrivacy">Facebook</li>
            <li className="SubBolletsPrivacy">Twitter</li>
          </ul>
        </div>
        <div>
          <div id={"H"} className="SubHeading1">
            How do we protect your personal information?
          </div>
          <p className="SubParagrapgh">
            Enhancv Ltd. and its authorized partners shall take appropriate
            organizational and technical measures to protect your Information
            and traffic data provided to us/them or collected by us/them, and
            shall not retain it any longer than permitted in order to perform
            its Services or as required under relevant legislation. Your
            personal data can only be accessed by authorized employees of
            Enhancv, or by Enhancv authorized partners' employees needing to
            access this data to fulfill their given duties.
            <br />
            <br /> Whenever possible, we will keep any information you provide
            us with limited to our own databases and systems. We may have to
            share your personal data in the following limited circumstances:
          </p>
          <br />
          <br />
          <ul className="BullotsPrivacy">
            <li className="SubBolletsPrivacy">
              Allow our customers to pay for our Services.
            </li>
            <li className="SubBolletsPrivacy">
              Facilitate communication with you.
            </li>
            <li className="SubBolletsPrivacy">
              Manage our customer support services to you.
            </li>
            <li className="SubBolletsPrivacy">
              Manage our general business operation with the help of
              professional advisers including lawyers, bankers, auditors and
              insurers.
            </li>
            <li className="SubBolletsPrivacy">
              Abide by local and international regulations by providing
              information to government bodies that require us to report
              processing activities.
            </li>
            <li className="SubBolletsPrivacy">
              Track our service’s usage and provide reports to help us improve
              our services and conversions.
            </li>
          </ul>
          <br />
          <br />
          <p className="SubParagrapgh">
            We require all third parties to whom we transfer your data to
            respect the security of your personal data and to treat it in
            accordance with the law. We only allow such third parties to process
            your personal data for specified purposes and in accordance with our
            instructions as outlined in mutual agreements and those third
            parties’ privacy policies.
          </p>
        </div>
        <div>
          <div className="SubHeading1">
            How do we protect your personal information?
          </div>
          <p className="SubParagrapgh">
            Under data protection laws you have rights in relation to your
            personal data that include the right to request access, correction,
            erasure, restriction, transfer, to object to processing, to
            portability of data and (where the lawful ground of processing is
            consent) to withdraw consent.
            <br />
            <br /> If you wish to exercise any of the rights set out above,
            please email us at help@enhancv.com.
            <br />
            <br /> You will not have to pay a fee to access your personal data
            (or to exercise any of the other rights). We may need to request
            specific information from you to help us confirm your identity and
            ensure your right to access your personal data (or to exercise any
            of your other rights). This is a security measure to ensure that
            personal data is not disclosed to any person who has no right to
            receive it. We may also contact you to ask you for further
            information in relation to your request to speed up our response.
            <br />
            <br /> We try to respond to all legitimate requests within one
            month. Occasionally it may take us longer than a month if your
            request is particularly complex or you have made a number of
            requests. In this case, we will notify you.
            <br />
            <br /> We may need to request specific information from you to help
            us confirm your identity and ensure your right to access your
            personal data (or to exercise any of your other rights). This is a
            security measure to ensure that personal data is not disclosed to
            any person who has no right to receive it.
          </p>
        </div>
        <div>
          <div id={"I"} className="SubHeading1">
            Can this Privacy Policy change?
          </div>
          <p className="SubParagrapgh">
            We may update our Privacy Policy from time to time. We will notify
            you whenever we change the policy in a material way by contacting
            you through email and publishing the updated privacy policy on this
            same URL address. <br />
            <br /> If you have any questions or concerns regarding this policy
            or the Enhancv service, please contact us at help@enhancv.com.
          </p>
        </div>
      </div>
      <div className="NaveBar">
        <div className="NaveBarLinks" onClick={goToHome}>
          Home
        </div>
        <div className="NaveBarLinks" onClick={goToCoverLetter}>
          Cover Letter
        </div>
        <div className="NaveBarLinks" onClick={goToCV}>
          CV
        </div>
      </div>
    </>
  );
}
