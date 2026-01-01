import Link from 'next/link';
import {
  FaUser,
  FaStar,
  FaMobileAlt,
  FaCheckCircle,
  FaCookieBite,
  FaEye,
  FaEdit,
  FaTrashAlt,
  FaBan,
} from 'react-icons/fa';

const PrivacyPolicy = () => {
  return (
    <main className="w-full max-w-380 mx-auto my-8 px-4 overflow-x-hidden">
      <div className="mb-4">
        <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-text-main dark:text-white mb-2">
          Privacy Policy
        </h1>
      </div>
      <div className="space-y-8">
        <section className="scroll-mt-28">
          <div className="flex items-center gap-3 mb-4">
            <span className="flex items-center justify-center size-8 rounded-full bg-primary/10 text-primary font-bold text-sm">
              01
            </span>
            <h2 className="text-2xl font-bold text-text-main dark:text-white">
              Introduction
            </h2>
          </div>
          <div className="prose prose-lg dark:prose-invert text-text-secondary dark:text-gray-300 leading-relaxed wrap-break-word max-w-full">
            <p className="mb-4">
              At <strong>ReviewPortal</strong> (&quot;we,&quot; &quot;our,&quot;
              or &quot;us&quot;), we value your trust and are committed to
              protecting your privacy. This Privacy Policy outlines how we
              collect, use, disclose, and safeguard your information when you
              visit our website including any other media form, media channel,
              mobile website, or mobile application related or connected
              thereto.
            </p>
            <p>
              Please read this privacy policy carefully. If you do not agree
              with the terms of this privacy policy, please do not access the
              site.
            </p>
          </div>
        </section>
        <section className="scroll-mt-28" id="data-collection">
          <div className="flex items-center gap-3 mb-4">
            <span className="flex items-center justify-center size-8 rounded-full bg-primary/10 text-primary font-bold text-sm">
              02
            </span>
            <h2 className="text-2xl font-bold text-text-main dark:text-white">
              Data Collection
            </h2>
          </div>
          <p className="text-text-secondary dark:text-gray-300 leading-relaxed mb-6">
            We may collect information about you in a variety of ways. The
            information we may collect on the Site includes:
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-1 gap-6">
            <div className="p-6 rounded-2xl bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 transition-shadow">
              <div className="size-10 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-4">
                <FaUser className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold mb-2">Personal Data</h3>
              <p className="text-sm text-text-secondary dark:text-gray-400">
                Personally identifiable information, such as your name, shipping
                address, email address, and telephone number that you
                voluntarily give to us when you register.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 shadow-sm hover:shadow-md transition-shadow">
              <div className="size-10 rounded-full bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 flex items-center justify-center mb-4">
                <FaStar className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold mb-2">Review Content</h3>
              <p className="text-sm text-text-secondary dark:text-gray-400">
                Information you provide when submitting a review, including
                photos, ratings, and text descriptions of your experiences.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 shadow-sm hover:shadow-md transition-shadow">
              <div className="size-10 rounded-full bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400 flex items-center justify-center mb-4">
                <FaMobileAlt className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold mb-2">Derivative Data</h3>
              <p className="text-sm text-text-secondary dark:text-gray-400">
                Information our servers automatically collect when you access
                the Site, such as your IP address, your browser type, your
                operating system, and access times.
              </p>
            </div>
          </div>
        </section>
        <section className="scroll-mt-28" id="data-usage">
          <div className="flex items-center gap-3 mb-4">
            <span className="flex items-center justify-center size-8 rounded-full bg-primary/10 text-primary font-bold text-sm">
              03
            </span>
            <h2 className="text-2xl font-bold text-text-main dark:text-white">
              How We Use Your Information
            </h2>
          </div>
          <div className="bg-white dark:bg-white/5 rounded-2xl p-6 md:p-8 border border-gray-100 dark:border-white/10">
            <p className="text-text-secondary dark:text-gray-300 leading-relaxed mb-6">
              Having accurate information about you permits us to provide you
              with a smooth, efficient, and customized experience. Specifically,
              we may use information collected about you via the Site to:
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <FaCheckCircle className="text-primary mt-0.5 w-5 h-5" />
                <span className="text-text-secondary dark:text-gray-300">
                  Create and manage your account.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <FaCheckCircle className="text-primary mt-0.5 w-5 h-5" />
                <span className="text-text-secondary dark:text-gray-300">
                  Compile anonymous statistical data and analysis for use
                  internally or with third parties.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <FaCheckCircle className="text-primary mt-0.5 w-5 h-5" />
                <span className="text-text-secondary dark:text-gray-300">
                  Email you regarding your account or order.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <FaCheckCircle className="text-primary mt-0.5 w-5 h-5" />
                <span className="text-text-secondary dark:text-gray-300">
                  Monitor and analyze usage and trends to improve your
                  experience with the Site.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <FaCheckCircle className="text-primary mt-0.5 w-5 h-5" />
                <span className="text-text-secondary dark:text-gray-300">
                  Prevent fraudulent transactions, monitor against theft, and
                  protect against criminal activity.
                </span>
              </li>
            </ul>
          </div>
        </section>

        <section className="scroll-mt-28" id="cookies">
          <div className="flex items-center gap-3 mb-4">
            <span className="flex items-center justify-center size-8 rounded-full bg-primary/10 text-primary font-bold text-sm">
              04
            </span>
            <h2 className="text-2xl font-bold text-text-main dark:text-white">
              Cookies and Web Beacons
            </h2>
          </div>
          <div className="bg-blue-50 dark:bg-blue-900/10 p-6 rounded-2xl border border-blue-100 dark:border-blue-900/20">
            <h4 className="flex items-center gap-2 font-bold text-primary dark:text-white mb-2">
              <FaCookieBite className="w-5 h-5" />
              Cookie Policy Overview
            </h4>
            <p className="text-sm text-primary/70 dark:text-blue-200/70 leading-relaxed mb-4">
              We may use cookies, web beacons, tracking pixels, and other
              tracking technologies on the Site to help customize the Site and
              improve your experience. When you access the Site, your personal
              information is not collected through the use of tracking
              technology.
            </p>
            <Link
              className="text-sm font-bold text-primary hover:underline dark:text-white"
              href="#"
            >
              Manage Cookie Preferences →
            </Link>
          </div>
        </section>
        <section className="scroll-mt-28" id="user-rights">
          <div className="flex items-center gap-3 mb-4">
            <span className="flex items-center justify-center size-8 rounded-full bg-primary/10 text-primary font-bold text-sm">
              05
            </span>
            <h2 className="text-2xl font-bold text-text-main dark:text-white">
              Your Rights (GDPR &amp; CCPA)
            </h2>
          </div>
          <p className="text-text-secondary dark:text-gray-300 mb-6">
            Depending on your location, you may have specific rights regarding
            your personal data:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex gap-4 items-start">
              <div className="bg-gray-100 dark:bg-white/10 p-2 rounded-lg">
                <FaEye className="text-gray-600 dark:text-gray-300 w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-text-main dark:text-white">
                  Right to Access
                </h4>
                <p className="text-sm text-text-secondary dark:text-gray-400 mt-1">
                  You can request copies of your personal data.
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="bg-gray-100 dark:bg-white/10 p-2 rounded-lg">
                <FaEdit className="text-gray-600 dark:text-gray-300 w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-text-main dark:text-white">
                  Right to Rectification
                </h4>
                <p className="text-sm text-text-secondary dark:text-gray-400 mt-1">
                  Request correction of inaccurate information.
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="bg-gray-100 dark:bg-white/10 p-2 rounded-lg">
                <FaTrashAlt className="text-gray-600 dark:text-gray-300 w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-text-main dark:text-white">
                  Right to Erasure
                </h4>
                <p className="text-sm text-text-secondary dark:text-gray-400 mt-1">
                  Request deletion of your data under certain conditions.
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="bg-gray-100 dark:bg-white/10 p-2 rounded-lg">
                <FaBan className="text-gray-600 dark:text-gray-300 w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-text-main dark:text-white">
                  Right to Restrict Processing
                </h4>
                <p className="text-sm text-text-secondary dark:text-gray-400 mt-1">
                  Limit how we use your data.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="scroll-mt-28" id="security">
          <div className="flex items-center gap-3 mb-4">
            <span className="flex items-center justify-center size-8 rounded-full bg-primary/10 text-primary font-bold text-sm">
              06
            </span>
            <h2 className="text-2xl font-bold text-text-main dark:text-white">
              Security of Your Information
            </h2>
          </div>
          <p className="text-text-secondary dark:text-gray-300 leading-relaxed">
            We use administrative, technical, and physical security measures to
            help protect your personal information. While we have taken
            reasonable steps to secure the personal information you provide to
            us, please be aware that despite our efforts, no security measures
            are perfect or impenetrable, and no method of data transmission can
            be guaranteed against any interception or other type of misuse.
          </p>
        </section>
      </div>
    </main>
  );
};

export default PrivacyPolicy;
