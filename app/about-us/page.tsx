import Link from 'next/link';
import { FaCheckCircle, FaUsers, FaStar } from 'react-icons/fa';

export default function AboutUsPage() {
  return (
    <div className="w-full">
      <main className="flex-1 px-4 pt-8">
        <div className="mx-auto container flex flex-col gap-8">
          {/* Hero Section */}
          <section>
            <div className="w-full">
              <div
                className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat rounded-xl items-center justify-center p-8 text-center"
                style={{
                  backgroundImage:
                    'linear-gradient(rgba(47, 79, 79, 0.4) 0%, rgba(47, 79, 79, 0.7) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuC91Fgii31jjf_Wyu9n8-UvfUcryUrGRAZ956T08Lnyny4MIOqeM_0AGc7M8k0SU08wVreS8KpeWFIVklTcB4CZv4YM00xL6_lUCEs-dkYV1OkAx3LmWpwTNt6-z4aCwWGdsusOVNqGjmP3Ps2AUB50Ci3pH-F19bKNt3vY_EZ0aQsit8WedDJZJX7-tfoNk5RZCkcNmdeu1EsHmbikxsbqKE-B_2hBwghiqDv2ySPr9_Rp33FXSa9-JM43qIcfEPXfTlL6ab-KQ9c")',
                }}
              >
                <div className="flex flex-col gap-4">
                  <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em]">
                    About Our Portal
                  </h1>
                  <h2 className="text-white/90 text-base font-normal leading-normal max-w-2xl mx-auto md:text-lg">
                    Bringing transparency and honesty to your shopping
                    decisions.
                  </h2>
                </div>
              </div>
            </div>
          </section>
          {/* Our Mission Section */}
          <section>
            <div className="flex flex-col gap-4">
              <h2 className="text-gray-900 dark:text-white text-2xl md:text-3xl font-bold leading-tight tracking-[-0.015em]">
                Our Mission
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-base md:text-lg font-normal leading-relaxed">
                Our portal was founded with a simple yet powerful goal: to
                create a space where consumers can find trustworthy, unbiased
                reviews for the products they use every day. We believe in
                empowering shoppers with the information they need to make
                confident purchasing decisions, fostering a community built on
                honesty and shared experiences.
              </p>
            </div>
          </section>
          {/* What We Stand For Section */}
          <section className="flex flex-col gap-8">
            <h2 className="text-gray-900 dark:text-white text-2xl md:text-3xl font-bold leading-tight tracking-[-0.015em]">
              What We Stand For
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="flex flex-col gap-4 p-6 bg-white dark:bg-background-dark/50 border border-gray-200 dark:border-white/10 rounded-xl">
                <div className="flex items-center justify-center size-12 rounded-lg bg-primary/10 text-primary">
                  <FaCheckCircle className="text-3xl" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                  Honesty
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  We prioritize authentic, user-generated reviews to ensure
                  complete transparency.
                </p>
              </div>
              <div className="flex flex-col gap-4 p-6 bg-white dark:bg-background-dark/50 border border-gray-200 dark:border-white/10 rounded-xl">
                <div className="flex items-center justify-center size-12 rounded-lg bg-primary/10 text-primary">
                  <FaUsers className="text-3xl" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                  Community
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  We foster a supportive community where users can share
                  insights and help others.
                </p>
              </div>
              <div className="flex flex-col gap-4 p-6 bg-white dark:bg-background-dark/50 border border-gray-200 dark:border-white/10 rounded-xl">
                <div className="flex items-center justify-center size-12 rounded-lg bg-primary/10 text-primary">
                  <FaStar className="text-3xl" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                  Quality
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Our platform is dedicated to featuring high-quality products
                  and in-depth reviews.
                </p>
              </div>
            </div>
          </section>
          {/* Meet the Team Section */}
          <section className="flex flex-col gap-6">
            <h2 className="text-gray-900 dark:text-white text-2xl md:text-3xl font-bold leading-tight tracking-[-0.015em]">
              The Team Behind the Reviews
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="flex flex-col items-center text-center gap-4 p-6 bg-white dark:bg-background-dark/50 border border-gray-200 dark:border-white/10 rounded-xl">
                <div
                  className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-24"
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBDViQHSUITphzVLbH_KqUlCuJPeOgzO4xZS5mI6A2QXmBRBsIgDQTgbm6AX93bZftU2p2TZTbH86Rrj74CPs_U6vWr_GfU3ddugczvvuvygk9s4ZSkGdaFP05_5pIiM09qSgO53lZTlYmwd4tCigkvHWCI13ikAnuKBLXhVAUk0c4lKODq5lMMW-yxazNuDe9F-0CyQX51_sBHY6tCEz1GFRm76Dp0zvsFQALM0TBqeh8fT1tkCLilAUOL-r7kDTKxTN_1lLTE2Q")',
                  }}
                ></div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                    Jane Doe
                  </h3>
                  <p className="text-sm text-primary">Founder & CEO</p>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Jane is passion for consumer rights led her to create a
                  platform built on trust and transparency.
                </p>
              </div>
              <div className="flex flex-col items-center text-center gap-4 p-6 bg-white dark:bg-background-dark/50 border border-gray-200 dark:border-white/10 rounded-xl">
                <div
                  className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-24"
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuACRONZJczAa1z7Q1gc5eltgKCrMBHs99n--Tvwl-hyWiObZikCImRP5p5T8AxXcJBPhpbYLJka07Kgu4tfISTct-zthdcZETob7zuct37NsFURE6X-BfXjojP0tqdNkEXZ5sVpIQuVGHxZpzp1nB6KxhS-RmOC84uZ9poHO_sBCQCa2OcX688cCn2qNHkHUEf7RrlEAD_aH_qP0HdDEAoenG_4iCv6dkw6ugZate_UHF-GjKXk0RjBiC4Tb21dwqKr0Zu0kBH8zw")',
                  }}
                ></div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                    John Smith
                  </h3>
                  <p className="text-sm text-primary">Head of Product</p>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  John ensures our platform is intuitive, user-friendly, and
                  always evolving to meet community needs.
                </p>
              </div>
              <div className="flex flex-col items-center text-center gap-4 p-6 bg-white dark:bg-background-dark/50 border border-gray-200 dark:border-white/10 rounded-xl">
                <div
                  className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-24"
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBBg8CqKwLIAVCbKxCQAxO0_r5PyoPAhaZQ2UmqYuKzv-H0PDPlTm6AeuIeiF2ejAMQkWQR8QTDTHkA6HMtEIrcPJdYei77fHDP8cdtNw9fKqHHFxn6r3VAdad5b_Beg39n0Ew1eFpxqb9Bst4whAE-T9_fm1SEPTYVn6oDW-9pyBqlD_-kE3ZPESX4zlAyWrbyO06ds3zGhKrqWJbefSeGfKtrfF1f-lOmuVGkqGRdWvabBiNB8HejhiHTZQtX2CB8yXi2R_C3Uw")',
                  }}
                ></div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                    Emily Carter
                  </h3>
                  <p className="text-sm text-primary">Community Manager</p>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Emily is the heart of our community, fostering engagement and
                  ensuring all voices are heard.
                </p>
              </div>
            </div>
          </section>
          {/* Call to Action Section */}
          <section className="bg-white dark:bg-background-dark/50 border border-gray-200 dark:border-white/10 rounded-xl p-8 md:p-12 text-center max-w-4xl mx-auto w-full mb-8">
            <div className="flex flex-col items-center gap-4">
              <h2 className="text-gray-900 dark:text-white text-2xl md:text-3xl font-bold leading-tight tracking-[-0.015em]">
                Ready to Join Us?
              </h2>
              <p className="text-gray-600 dark:text-gray-300 max-w-lg">
                Become part of a community dedicated to honest reviews and help
                others make better, more informed decisions.
              </p>
              <button className="mt-4 flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors">
                <span className="truncate">
                  <Link href="/register">Registered Now</Link>
                </span>
              </button>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
