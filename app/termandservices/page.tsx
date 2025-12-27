import Link from 'next/link';
import { FaGavel, FaBan, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const TermAndServices = () => {
  return (
    <main className="grow w-full flex flex-col items-center py-8 px-4">
      <article className="w-full max-w-380 bg-white dark:bg-[#151c2b] rounded-md shadow-sm border border-border-light dark:border-border-dark overflow-hidden">
        <div className="p-8 sm:p-12 border-b border-border-light dark:border-border-dark bg-linear-to-br from-white to-blue-50 dark:from-primary dark:to-primary">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2 text-primary text-sm font-semibold uppercase tracking-wide">
              <FaGavel className="text-lg" />
              <span>Legal</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-black leading-tight tracking-[-0.033em] text-text-main dark:text-white">
              Terms of Service
            </h1>
          </div>
        </div>
        <div className="p-8 space-y-6">
          <section>
            <p className="text-base font-normal leading-relaxed text-gray-700 dark:text-gray-300">
              Welcome to ReviewPortal. Please read these Terms of Service
              (&quot;Terms&quot;, &quot;Terms of Service&quot;) carefully before
              using the ReviewPortal website (the &quot;Service&quot;) operated
              by ReviewPortal Inc. (&quot;us&quot;, &quot;we&quot;, or
              &quot;our&quot;). Your access to and use of the Service is
              conditioned on your acceptance of and compliance with these Terms.
              These Terms apply to all visitors, users, and others who access or
              use the Service. By accessing or using the Service you agree to be
              bound by these Terms.
            </p>
          </section>
          <section className="space-y-4">
            <h2 className="text-2xl font-bold leading-tight text-text-main dark:text-white flex items-center gap-2">
              <span className="text-primary text-lg">01.</span> Definitions
            </h2>
            <p className="text-base font-normal leading-relaxed text-gray-700 dark:text-gray-300">
              For the purposes of this Terms of Service agreement:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300 ml-2">
              <li>
                <strong>&quot;Service&quot;</strong> refers to the ReviewPortal
                website and any related mobile applications.
              </li>
              <li>
                <strong>&quot;Content&quot;</strong> refers to text, images,
                ratings, or other information posted by users.
              </li>
              <li>
                <strong>&quot;Business Account&quot;</strong> refers to users
                who register to claim and manage their business listing.
              </li>
            </ul>
          </section>
          <section className="space-y-4">
            <h2 className="text-2xl font-bold leading-tight text-text-main dark:text-white flex items-center gap-2">
              <span className="text-primary text-lg">02.</span> User Accounts
            </h2>
            <p className="text-base font-normal leading-relaxed text-gray-700 dark:text-gray-300">
              When you create an account with us, you must provide us
              information that is accurate, complete, and current at all times.
              Failure to do so constitutes a breach of the Terms, which may
              result in immediate termination of your account on our Service.
            </p>
            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-primary p-4 rounded-r text-sm text-gray-800 dark:text-gray-200">
              <span className="font-bold block mb-1">Security Notice</span>
              You are responsible for safeguarding the password that you use to
              access the Service and for any activities or actions under your
              password.
            </div>
          </section>
          <section className="space-y-4">
            <h2 className="text-2xl font-bold leading-tight text-text-main dark:text-white flex items-center gap-2">
              <span className="text-primary text-lg">03.</span> User Generated
              Content &amp; Reviews
            </h2>
            <p className="text-base font-normal leading-relaxed text-gray-700 dark:text-gray-300">
              Our Service allows you to post reviews, link, store, share and
              otherwise make available certain information, text, graphics,
              videos, or other material (&quot;Content&quot;). You are
              responsible for the Content that you post to the Service,
              including its legality, reliability, and appropriateness.
            </p>
            <p className="text-base font-normal leading-relaxed text-gray-700 dark:text-gray-300">
              By posting Content to the Service, you grant us the right and
              license to use, modify, publicly perform, publicly display,
              reproduce, and distribute such Content on and through the Service.
              You retain any and all of your rights to any Content you submit,
              post or display on or through the Service and you are responsible
              for protecting those rights.
            </p>
            <h3 className="text-lg font-semibold text-text-main dark:text-white mt-4">
              Review Guidelines
            </h3>
            <p className="text-base font-normal leading-relaxed text-gray-700 dark:text-gray-300">
              Reviews must be based on genuine, first-hand experiences. We
              strictly prohibit:
            </p>
            <ul className="space-y-2 mt-2">
              <li className="flex items-start gap-3">
                <FaBan className="text-red-500 text-lg mt-1" />
                <span className="text-gray-700 dark:text-gray-300">
                  Fake reviews or reviews incentivized by payment.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <FaBan className="text-red-500 text-lg mt-1" />
                <span className="text-gray-700 dark:text-gray-300">
                  Hate speech, harassment, or personal threats.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <FaBan className="text-red-500 text-lg mt-1" />
                <span className="text-gray-700 dark:text-gray-300">
                  Private information about employees or individuals.
                </span>
              </li>
            </ul>
          </section>
          <section className="space-y-4">
            <h2 className="text-2xl font-bold leading-tight text-text-main dark:text-white flex items-center gap-2">
              <span className="text-primary text-lg">04.</span> Intellectual
              Property
            </h2>
            <p className="text-base font-normal leading-relaxed text-gray-700 dark:text-gray-300">
              The Service and its original content (excluding Content provided
              by users), features and functionality are and will remain the
              exclusive property of ReviewPortal Inc. and its licensors. The
              Service is protected by copyright, trademark, and other laws of
              both the United States and foreign countries.
            </p>
          </section>
          <section className="space-y-4">
            <h2 className="text-2xl font-bold leading-tight text-text-main dark:text-white flex items-center gap-2">
              <span className="text-primary text-lg">05.</span> Limitation of
              Liability
            </h2>
            <p className="text-base font-normal leading-relaxed text-gray-700 dark:text-gray-300">
              In no event shall ReviewPortal Inc., nor its directors, employees,
              partners, agents, suppliers, or affiliates, be liable for any
              indirect, incidental, special, consequential or punitive damages,
              including without limitation, loss of profits, data, use,
              goodwill, or other intangible losses, resulting from (i) your
              access to or use of or inability to access or use the Service;
              (ii) any conduct or content of any third party on the Service;
              (iii) any content obtained from the Service; and (iv) unauthorized
              access, use or alteration of your transmissions or content.
            </p>
          </section>
          <section className="space-y-4">
            <h2 className="text-2xl font-bold leading-tight text-text-main dark:text-white flex items-center gap-2">
              <span className="text-primary text-lg">06.</span> Changes to Terms
            </h2>
            <p className="text-base font-normal leading-relaxed text-gray-700 dark:text-gray-300">
              We reserve the right, at our sole discretion, to modify or replace
              these Terms at any time. If a revision is material we will try to
              provide at least 30 days notice prior to any new terms taking
              effect. What constitutes a material change will be determined at
              our sole discretion.
            </p>
          </section>
          <hr className="border-border-light dark:border-border-dark" />
          <section className="space-y-4 pt-2">
            <h2 className="text-xl font-bold leading-tight text-text-main dark:text-white">
              Contact Us
            </h2>
            <p className="text-base font-normal leading-relaxed text-gray-700 dark:text-gray-300">
              If you have any questions about these Terms, please contact us at:
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
              <div className="flex items-center gap-2">
                <FaEnvelope className="text-primary" />
                <Link
                  className="text-primary hover:underline font-medium"
                  href="mailto:legal@reviewportal.com"
                >
                  legal@reviewportal.com
                </Link>
              </div>
              <div className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-primary" />
                <span className="text-gray-700 dark:text-gray-300">
                  123 Commerce St, Market City, ST 12345
                </span>
              </div>
            </div>
          </section>
          <div className="flex flex-col sm:flex-row justify-between gap-4 pt-6 mt-6 border-t border-border-light dark:border-border-dark">
            <button className="px-6 py-2.5 rounded-lg border border-border-light dark:border-border-dark text-text-main dark:text-white font-medium hover:bg-gray-50 dark:hover:bg-white/5 transition-colors cursor-pointer">
              Decline
            </button>
            <button className="px-6 py-2.5 rounded-lg bg-primary text-white font-bold shadow-md transition-all hover:shadow-lg cursor-pointer">
              I Agree to Terms
            </button>
          </div>
        </div>
      </article>
    </main>
  );
};

export default TermAndServices;
