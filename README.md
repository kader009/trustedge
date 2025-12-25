# TrustEdge

**TrustEdge** is a high-performance, features-rich Product Review Portal designed for modern web engagement. It empowers users to discover, review, and discuss products while providing administrators with powerful tools for moderation and analytics.

---

## Key Features

### Advanced Admin Dashboard
- **Real-time Analytics**: Monitor platform performance, user registrations, and content value through dynamic charts and stats.
- **User Management**: Comprehensive control over user profiles, roles, and status.
- **Review Moderation**: Efficiently approve or reject pending reviews with an intuitive interface.
- **Comment Moderation**: Dedicated system for managing nested discussions and ensuring platform safety.

### 📝 Comprehensive Review System
- **Product Discovery**: Browse products by categories with smart filtering and search.
- **Detailed Insights**: View in-depth product descriptions, ratings, and community feedback.
- **Related Recommendations**: Intelligent display of similar products based on category.

### Interactive Community
- **Nested Commenting**: Engage in deep discussions with support for multi-level replies.
- **Approval Workflow**: All comments undergo moderation to maintain high-quality interactions.
- **Dynamic Updates**: Real-time comment counts and UI updates for instant feedback.

### Modern UI/UX
- **Dark Mode Support**: Seamlessly toggle between Light and Dark themes.
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop experiences.
- **Premium Aesthetics**: Glassmorphism, smooth animations, and a curated color palette.

---

## Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Library**: [React 19](https://react.dev/)
- **Core Language**: [TypeScript](https://www.typescriptlang.org/)
- **State Management**: [Redux Toolkit](https://redux-toolkit.js.org/) & [RTK Query](https://redux-toolkit.js.org/rtk-query/overview)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Data Persistence**: [Redux Persist](https://github.com/rt2zz/redux-persist)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/)
- **Notifications**: [Sonner](https://sonner.stevenlyui.com/) (Toasts)

---

## Getting Started

### Prerequisites
- Node.js (Latest LTS version recommended)
- npm or yarn

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/kader009/trustedge.git
   cd trustedge
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Environment Setup**:
   Create a `.env.local` file in the root directory (refer to `.env.example` if available).

4. **Run the development server**:
   ```bash
   npm run dev
   ```

5. **Open the app**:
   Navigate to [http://localhost:3000](http://localhost:3000) in your browser.

---

## Architecture

TrustEdge utilizes a hybrid architecture of **Server Components** for fast initial data fetching/SEO and **Client Components** for rich interactivity. 

- **API Integration**: Centralized fetching logic with efficient caching strategies.
- **State Synchronization**: Redux manages the global application state (User Auth, Theme), ensuring consistency across the dashboard and main site.
- **Tag Invalidation**: RTK Query tags are used to ensure data (like comment counts) updates instantly across the UI after mutations.


## Developer

Developed with ❤️ by Md Abdul kade molla.
