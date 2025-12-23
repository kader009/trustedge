import Link from 'next/link';
import {
  FaEnvelope,
  FaPhone,
  FaArrowRight,
  FaChevronDown,
  FaMapMarkerAlt,
} from 'react-icons/fa';

const ContactPage = () => {
  return (
    <main className="grow">
      <div className="relative isolate overflow-hidden py-16 sm:py-24 lg:py-32">
        <div
          className="absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              'linear-gradient(rgba(47, 79, 79, 0.4) 0%, rgba(47, 79, 79, 0.7) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuC91Fgii31jjf_Wyu9n8-UvfUcryUrGRAZ956T08Lnyny4MIOqeM_0AGc7M8k0SU08wVreS8KpeWFIVklTcB4CZv4YM00xL6_lUCEs-dkYV1OkAx3LmWpwTNt6-z4aCwWGdsusOVNqGjmP3Ps2AUB50Ci3pH-F19bKNt3vY_EZ0aQsit8WedDJZJX7-tfoNk5RZCkcNmdeu1EsHmbikxsbqKE-B_2hBwghiqDv2ySPr9_Rp33FXSa9-JM43qIcfEPXfTlL6ab-KQ9c")',
          }}
        ></div>
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 text-center mb-6">
          <h1 className="text-4xl font-black tracking-tighter text-white">
            Get in Touch
          </h1>
          <p className="mt-4 text-lg text-white/90">
            We are here to help and answer any question you might have. We look
            forward to hearing from you.
          </p>
        </div>
      </div>
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 -mt-24 sm:-mt-32 relative z-10">
        <div className="bg-white dark:bg-background-dark/80 backdrop-blur-sm rounded-xl p-8 mb-8">
          <div className="flex flex-col gap-3 mb-8 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-text-light dark:text-white">
              Send us a Message
            </h2>
            <p className="text-text-light dark:text-text-dark">
              Fill out the form below and we&apos;ll get back to you as soon as
              possible.
            </p>
          </div>
          <form className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label
                  className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-200 pb-2"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  autoComplete="name"
                  className="form-input block w-full rounded-lg border-0 bg-gray-100 dark:bg-white/5 py-3.5 px-4 text-gray-900 dark:text-white ring-1 ring-inset ring-gray-200 dark:ring-white/10 placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-primary text-sm leading-6"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  type="text"
                  required
                />
              </div>
              <div>
                <label
                  className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-200 pb-2"
                  htmlFor="email"
                >
                  Email Address
                </label>
                <input
                  autoComplete="email"
                  className="form-input block w-full rounded-lg border-0 bg-gray-100 dark:bg-white/5 py-3.5 px-4 text-gray-900 dark:text-white ring-1 ring-inset ring-gray-200 dark:ring-white/10 placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-primary text-sm leading-6"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  type="email"
                  required
                />
              </div>
            </div>
            <div>
              <label
                className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-200 pb-2"
                htmlFor="inquiry-type"
              >
                Inquiry Type
              </label>
              <select
                className="form-select block w-full rounded-lg border-0 bg-gray-100 dark:bg-white/5 py-3.5 px-4 text-gray-900 dark:text-white ring-1 ring-inset ring-gray-200 dark:ring-white/10 focus:ring-2 focus:ring-inset focus:ring-primary text-sm leading-6"
                id="inquiry-type"
                name="inquiry-type"
              >
                <option>General Question</option>
                <option>Technical Support</option>
                <option>Content Moderation</option>
                <option>Partnership</option>
              </select>
            </div>
            <div>
              <label
                className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-200 pb-2"
                htmlFor="message"
              >
                Your Message
              </label>
              <textarea
                className="form-textarea block w-full rounded-lg border-0 bg-gray-100 dark:bg-white/5 py-3.5 px-4 text-gray-900 dark:text-white ring-1 ring-inset ring-gray-200 dark:ring-white/10 placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-primary text-sm leading-6"
                id="message"
                name="message"
                placeholder="Write your message here..."
                rows={4}
                required
              ></textarea>
            </div>
            <div>
              <button
                className="flex w-full items-center justify-center rounded-lg bg-primary px-5 py-3 text-sm font-bold text-white shadow-sm hover:opacity-90 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-primary"
                type="submit"
              >
                Submit Message
              </button>
            </div>
          </form>
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-white/10">
            <div className="accordion-item">
              <label
                className="flex justify-between items-center text-lg font-bold tracking-tight text-gray-900 dark:text-white"
                htmlFor="accordion-toggle"
              >
                <span>Other Support Channels &amp; FAQ</span>
                <span className="text-gray-500 dark:text-gray-400">
                  <FaChevronDown />
                </span>
              </label>
              <div className="space-y-6 pt-4">
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-5 rounded-xl bg-gray-100 dark:bg-white/5">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary">
                      <FaEnvelope className="text-xl" />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-gray-900 dark:text-white">
                        Email Us
                      </h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        support@reviewportal.com
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-5 rounded-xl bg-gray-100 dark:bg-white/5">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary">
                      <FaPhone className="text-xl" />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-gray-900 dark:text-white">
                        Call Us
                      </h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Mon-Fri, 9am - 5pm EST
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-4 p-5 rounded-xl bg-gray-100 dark:bg-white/5">
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary">
                        <FaMapMarkerAlt className="text-xl" />
                      </div>
                      <div>
                        <h3 className="text-base font-semibold text-gray-900 dark:text-white">
                          Visit Us
                        </h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          123 Commerce St, Market City, ST 12345
                        </p>
                      </div>
                    </div>
                    <div className="w-full h-48 rounded-lg overflow-hidden">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1422937950147!2d-73.98731968459391!3d40.75889497932681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1622648234678!5m2!1sen!2sus"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                      ></iframe>
                    </div>
                  </div>
                </div>
                <div className="mt-8 border-t border-gray-200 dark:border-white/10 pt-8">
                  <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white mb-4">
                    Looking for quick answers?
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 mb-6">
                    Check out our frequently asked questions to find solutions
                    to common issues and learn more about our platform.
                  </p>
                  <Link
                    className="inline-flex items-center gap-2 rounded-lg bg-primary/20 dark:bg-primary/30 px-5 py-3 text-sm font-bold text-primary hover:bg-primary/30 dark:hover:bg-primary/40"
                    href="/termandservices"
                  >
                    <span>Visit our FAQ</span>{' '}
                    <FaArrowRight className="text-base" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ContactPage;
