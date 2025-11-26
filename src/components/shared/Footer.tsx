const Footer = () => {
  return (
    <footer className="bg-card-dark dark:bg-gray-900 mt-16 text-white/80">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3 text-white">
              <h1 className="text-xl font-bold leading-tight tracking-[-0.015em]">
                ReviewPortal
              </h1>
            </div>
            <p className="text-sm">
              Your trusted source for honest product reviews from a community of
              real people.
            </p>
            <div className="flex gap-4 mt-2">
              <a
                className="text-white/80 hover:text-primary transition-colors"
                href="#"
              >
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.323-1.325z"></path>
                </svg>
              </a>
              <a
                className="text-white/80 hover:text-primary transition-colors"
                href="#"
              >
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616v.064c0 2.296 1.634 4.208 3.803 4.649-.6.164-1.24.223-1.897.182.615 1.9 2.396 3.281 4.5 3.318-2.225 1.743-5.013 2.784-8.049 2.748-.62 0-1.23-.036-1.824-.107 2.891 1.853 6.324 2.93 10.063 2.93 12.072 0 18.675-10.001 18.675-18.675 0-.284-.006-.568-.019-.85.88-.636 1.64-1.428 2.24-2.324z"></path>
                </svg>
              </a>
              <a
                className="text-white/80 hover:text-primary transition-colors"
                href="#"
              >
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.689-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.441 1.441 1.441 1.441-.645 1.441-1.441-.645-1.44-1.441-1.44z"></path>
                </svg>
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-white">Quick Links</h4>
            <div className="flex flex-col gap-2 text-sm">
              <a className="hover:text-primary transition-colors" href="#">
                Home
              </a>
              <a className="hover:text-primary transition-colors" href="#">
                Categories
              </a>
              <a className="hover:text-primary transition-colors" href="#">
                Write a Review
              </a>
              <a className="hover:text-primary transition-colors" href="#">
                Login/Sign Up
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-white">Company</h4>
            <div className="flex flex-col gap-2 text-sm">
              <a className="hover:text-primary transition-colors" href="#">
                About Us
              </a>
              <a className="hover:text-primary transition-colors" href="#">
                Contact Us
              </a>
              <a className="hover:text-primary transition-colors" href="#">
                Terms of Service
              </a>
              <a className="hover:text-primary transition-colors" href="#">
                Privacy Policy
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-white">Stay Updated</h4>
            <p className="text-sm mb-3">
              Subscribe to our newsletter for the latest reviews and updates.
            </p>
            <form className="flex">
              <input
                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-l-lg text-text-light dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border-0 bg-white/10 dark:bg-white/5 h-10 placeholder:text-white/50 px-4 text-sm font-normal leading-normal"
                placeholder="Your email here..."
                type="email"
                required
              />
              <button
                className="flex items-center justify-center rounded-r-lg h-10 px-4 bg-primary text-white text-sm font-bold hover:opacity-90 transition-opacity"
                type="submit"
              >
                <span className="material-symbols-outlined">send</span>
              </button>
            </form>
          </div>
        </div>
        <div className="mt-10 pt-8 border-t border-white/10 text-center text-sm">
          © {new Date().getFullYear()} ReviewPortal. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
