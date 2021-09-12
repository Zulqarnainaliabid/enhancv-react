import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { TOGGLEPAGES } from "./Redux/actions/indux";
import {RiArrowUpSLine} from 'react-icons/ri'
export default function Term() {
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

      <div className="HeadingTermOfSerives">Terms of service</div>
      <div className="OuterContainerTerm">
        <div>
          <div className="SubHeading1">Welcome to Enhancv</div>
          <p className="SubParagrapgh">
            Thanks for using our platform and trusting us with your career
            goals. This website and platform ("Services") are provided by
            Enhancv Ltd. ("us", "we", or "our").
            <br />
            <br /> By using Enhancv or accessing any of our Services, you are
            agreeing to the following terms. Please read them carefully and
            contact us if you have any questions.
          </p>
        </div>

        <div>
          <div className="SubHeading1">Accounts</div>
          <p className="SubParagrapgh">
            When you create an account on Enhancv, you are fully responsible for
            maintaining its security and any activities that occur under your
            account. Please, use a "strong" password (or authenticate via a
            third-party) to ensure that your private information, your resumes
            and billing information are safe.
            <br />
            <br /> We cannot and will not be liable for any loss or damage
            arising from your failure to comply with the above requirements.
          </p>
        </div>

        <div>
          <div className="SubHeading1">Content</div>
          <p className="SubParagrapgh">
            You are solely responsible for all the content you create using our
            Services. We may review content to determine whether it violates our
            policies, and we may remove content in those cases. But that does
            not necessarily mean that we review content, so please don’t assume
            that we do.
          </p>
        </div>

        <div>
          <div className="SubHeading1">Subscription fees</div>
          <p className="SubParagrapgh">
            Enhancv reserves the right to require payment or subscription fees
            for any of our Services. At the beginning of each billing period you
            will be automatically charged for the entire period.
            <br />
            <br /> The prices may be changed at any time, upon thirty (30) day
            prior notice to you, which may be sent by email or posted on the
            website. Your use of the Services following such notification
            constitutes your acceptance of any new or increased charges.
            Downgrading your plan may cause the loss of access to some
            capabilities of your Account. Enhancv does not accept any liability
            for such loss. <br />
            <br />
            Please know that all prices on the Enhancv website and all charges
            made are in US Dollars
          </p>
        </div>

        <div>
          <div className="SubHeading1">Cancellation</div>
          <p className="SubParagrapgh">
            If you no longer need our Service, for example after you have found
            an amazing new job, it is solely your responsibility to cancel the
            subscription (through the Billing page) before the next billing
            date. After successful cancellation of your subscription you will
            receive an email confirmation.
            <br />
            <br /> We are not always able to respond to cancellation requests
            via email, nor to issue a refund if have not canceled (unless there
            is evidence of a technical issue on our side that prevented you from
            canceling).
          </p>
        </div>

        <div>
          <div className="SubHeading1">Career Counseling</div>
          <p className="SubParagrapgh">
            By purchasing the Career Counseling service you give us permission
            to access your personal details and documents for the benefit of
            providing the service. Without this access we are unable to provide
            the service. The Career Counseling service is given over an internet
            call or email. We do not provide the service in person. Upon
            scheduling the service (a call with one of our career counsellors),
            you have reserved an appointment, and are unable to request a
            refund. We reserve the right to cancel the service due to
            inappropriate behavior at any time without the obligation of
            refunding.
          </p>
        </div>

        <div>
          <div className="SubHeading1">Refunds</div>
          <p className="SubParagrapgh">
            Any monthly fees paid hereunder are non-refundable if you have used
            our services during that billing period. Quarterly and Semi-annual
            fees are eligible for a partial pro-rated refund. For one-time
            payments (career counseling services or automated resume
            translation) we won’t be able to refund once the service has been
            scheduled and confirmed by you.
          </p>
        </div>

        <div>
          <div className="SubHeading1">Trials & Discounts</div>
          <p className="SubParagrapgh">
            Any trial or reduced pricing (promocode) must be used within the
            specified time. You must cancel your account before the end of the
            promotional period to avoid being charged a regular fee for next
            billing period (always refer to information in Billing page). We
            reserve the right to limit you to one trial period or a single
            promocode as well as to prohibit the combination of trials,
            promocodes, and other offers (such as inviting friends). Credit
            accumulated through inviting friends cannot be exchanged, refunded,
            replaced or redeemed for cash. All promocode-reduced fees are
            non-refundable.
          </p>
        </div>

        <div>
          <div className="SubHeading1">Termination</div>
          <p className="SubParagrapgh">
            Enhancv, in its sole discretion, has the right to terminate your
            account for any reason at any time. Such termination of the Services
            will result in the deactivation or deletion of your account and the
            forfeiture and relinquishment of all content in your account. In
            such cases, you are not eligible for any refunds.
            <br />
            <br /> If you wish to terminate your account, you may do so through
            the Account page.
          </p>
        </div>

        <div>
          <div className="SubHeading1">Privacy</div>
          <p className="SubParagrapgh">
            Your personal information and content is governed by our Privacy
            Policy. By using Enhancv, you agree to our Privacy Policy.
          </p>
        </div>

        <div>
          <div className="SubHeading1">Limited Warranties and Liability</div>
          <p className="SubParagrapgh">
            Enhancv does not make any warranty about the reliability of the
            Services and does not guarantee the security of user data despite
            best efforts. The Service is provided “AS IS” and you agree to not
            hold us responsible nor to seek indemnification for any damages that
            may arise as a result of the loss of use, data, or profits connected
            to the performance of the Services or failure in such performance.
          </p>
        </div>

        <div>
          <div className="SubHeading1">Governing Law</div>
          <p className="SubParagrapgh">
            These Terms shall be governed and construed in accordance with the
            laws of Bulgaria, without regard to its conflict of law provisions.
            <br />
            <br />
            Our failure to enforce any right or provision of these Terms will
            not be considered a waiver of those rights. If any provision of
            these Terms is held to be invalid or unenforceable by a court, the
            remaining provisions of these Terms will remain in effect. These
            Terms constitute the entire agreement between us regarding our
            Service, and supersede and replace any prior agreements we might
            have between us regarding the Service.
          </p>
        </div>

        <div>
          <div className="SubHeading1">Changes</div>
          <p className="SubParagrapgh">
            We reserve the right to modify these terms at any time. If a
            revision is material, we will try to provide at least 15 days notice
            prior to any new terms taking effect. What constitutes a material
            change will be determined at our sole discretion. By continuing to
            access or use our Service after those revisions become effective,
            you agree to be bound by the revised terms. If you do not agree to
            the new terms, please stop using the Service.
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
