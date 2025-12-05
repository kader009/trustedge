# User Dashboard - বাকি কাজের তালিকা (Remaining Tasks)

## 📍 Dashboard Routes Overview

```
/dashboard/user/
├── page.tsx (Main Dashboard)
├── reviews/
├── favorites/
├── profile/
├── comments/
└── settings/
```

---

## 1️⃣ `/dashboard/user` - Main Dashboard Page

### ✅ যা আছে (Completed):

- ✅ Basic UI layout
- ✅ Stats cards (Total Reviews, Favorites, Profile Views, Comments)
- ✅ Recent Activity section
- ✅ Quick Actions section
- ✅ Profile Completion progress bar

### ❌ যা বাকি (Remaining):

#### **Backend API প্রয়োজন:**

- ❌ `GET /api/v1/users/dashboard/stats` - User এর statistics fetch করা
  - Total reviews count
  - Favorites count
  - Profile views count
  - Comments count
  - Recent activity data

#### **Frontend কাজ:**

- ❌ API integration করে real data দেখানো (এখন সব 0 দেখাচ্ছে)
- ❌ Recent Activity list তৈরি করা (এখন empty)
- ❌ Loading state add করা
- ❌ Error handling add করা
- ❌ Profile completion percentage calculation (এখন hardcoded 60%)

#### **Features:**

- ❌ Activity timeline with icons
- ❌ Quick stats animation
- ❌ Refresh data functionality

---

## 2️⃣ `/dashboard/user/reviews` - My Reviews Page

### ✅ যা আছে (Completed):

- ✅ Basic UI layout
- ✅ Stats cards (Total Reviews, Total Views, Avg Rating)
- ✅ Empty state with CTA
- ✅ "Write New Review" button

### ❌ যা বাকি (Remaining):

#### **Backend API প্রয়োজন:**

- ❌ `GET /api/v1/products/user/:userId` - User এর সব reviews fetch করা
  - With pagination
  - With filters (status: draft, pending, published)
- ❌ `GET /api/v1/products/user/:userId/stats` - Review statistics
  - Total reviews
  - Total views
  - Average rating
- ❌ `PUT /api/v1/products/:id` - Review edit করা
- ❌ `DELETE /api/v1/products/:id` - Review delete করা

#### **Frontend কাজ:**

- ❌ User এর reviews list দেখানো
  - Review cards with image, title, rating, status
  - Status badges (Draft, Pending, Published, Unpublished)
- ❌ Filter options add করা:
  - All Reviews
  - Published
  - Pending
  - Drafts
  - Unpublished
- ❌ Search functionality
- ❌ Pagination implement করা
- ❌ Edit button (review edit modal/page)
- ❌ Delete button with confirmation
- ❌ View count per review
- ❌ Admin feedback দেখানো (if unpublished)
- ❌ Real stats data show করা

#### **Features:**

- ❌ Review status indicator
- ❌ Quick edit/delete actions
- ❌ Sort by date, rating, views
- ❌ Bulk actions (delete multiple)
- ❌ Review analytics per item

---

## 3️⃣ `/dashboard/user/favorites` - My Favorites Page

### ✅ যা আছে (Completed):

- ✅ Basic UI layout
- ✅ Stats cards (Favorite Products, Saved Reviews)
- ✅ Empty state with CTA

### ❌ যা বাকি (Remaining):

#### **Backend API প্রয়োজন:**

- ❌ `POST /api/v1/favorites` - Add to favorites
- ❌ `GET /api/v1/favorites/user/:userId` - User এর favorites fetch করা
- ❌ `DELETE /api/v1/favorites/:id` - Remove from favorites
- ❌ Database Schema: `Favorite` model তৈরি করা
  ```prisma
  model Favorite {
    id        String   @id @default(cuid())
    userId    String
    productId String
    user      User     @relation(fields: [userId], references: [id])
    product   Product  @relation(fields: [productId], references: [id])
    createdAt DateTime @default(now())
  }
  ```

#### **Frontend কাজ:**

- ❌ Favorites list display করা
  - Product/Review cards
  - Image, title, rating, category
- ❌ Remove from favorites button
- ❌ Filter by category
- ❌ Search in favorites
- ❌ Pagination
- ❌ Real stats data
- ❌ Empty state improvement

#### **Features:**

- ❌ Heart icon toggle (add/remove favorite)
- ❌ Grid/List view toggle
- ❌ Sort options (newest, oldest, highest rated)
- ❌ Quick view modal

---

## 4️⃣ `/dashboard/user/profile` - User Profile Page

### ✅ যা আছে (Completed):

- ✅ Profile header with image
- ✅ User info display (name, email, role, status)
- ✅ Personal Information section
- ✅ Account Settings section
- ✅ Basic UI layout

### ❌ যা বাকি (Remaining):

#### **Backend API প্রয়োজন:**

- ❌ `GET /api/v1/users/profile` - User profile fetch করা
- ❌ `PUT /api/v1/users/profile` - Profile update করা
  - Name
  - Email
  - Bio (new field)
  - Social links (new field)
- ❌ `POST /api/v1/users/profile/image` - Profile image upload
  - Cloudinary/AWS S3 integration
- ❌ `PUT /api/v1/users/change-password` - Password change
- ❌ `DELETE /api/v1/users/account` - Account delete

#### **Frontend কাজ:**

- ❌ Profile edit modal/form তৈরি করা
  - Name edit
  - Email edit
  - Bio add করা
  - Social links add করা
- ❌ Profile image upload functionality
  - Image preview
  - Crop functionality (optional)
  - Upload to cloud storage
- ❌ Change Password modal
  - Current password
  - New password
  - Confirm password
  - Validation
- ❌ Email Preferences modal
  - Notification settings
- ❌ Privacy Settings modal
  - Profile visibility
  - Review visibility
- ❌ Delete Account confirmation modal
  - Warning message
  - Password confirmation
  - Final confirmation

#### **Features:**

- ❌ Profile completion percentage (dynamic)
- ❌ Activity summary
- ❌ Member since badge
- ❌ Verification badge (if applicable)
- ❌ Social media links
- ❌ Bio/About section
- ❌ **Payment History section** (IMPORTANT for premium reviews)
  - Transaction list
  - Date, amount, review title
  - Receipt download

---

## 5️⃣ `/dashboard/user/comments` - My Comments Page

### ✅ যা আছে (Completed):

- ✅ Basic UI layout
- ✅ Stats cards (Total Comments, Replies Received, Likes)
- ✅ Empty state with CTA

### ❌ যা বাকি (Remaining):

#### **Backend API প্রয়োজন:**

- ❌ `GET /api/v1/comments/user/:userId` - User এর সব comments fetch করা
- ❌ `GET /api/v1/comments/user/:userId/stats` - Comment statistics
- ❌ `PUT /api/v1/comments/:id` - Comment edit করা
- ❌ `DELETE /api/v1/comments/:id` - Comment delete করা
- ❌ Database Schema: `Comment` model তৈরি করা
  ```prisma
  model Comment {
    id          String    @id @default(cuid())
    content     String
    userId      String
    productId   String
    parentId    String?   // For replies
    likes       Int       @default(0)
    user        User      @relation(fields: [userId], references: [id])
    product     Product   @relation(fields: [productId], references: [id])
    parent      Comment?  @relation("CommentReplies", fields: [parentId], references: [id])
    replies     Comment[] @relation("CommentReplies")
    createdAt   DateTime  @default(now())
    updatedAt   DateTime  @updatedAt
  }
  ```

#### **Frontend কাজ:**

- ❌ Comments list display করা
  - Comment text
  - Review/Product link
  - Date posted
  - Likes count
  - Replies count
- ❌ Edit comment functionality
- ❌ Delete comment with confirmation
- ❌ Navigate to original review
- ❌ Real stats data
- ❌ Pagination
- ❌ Filter options:
  - All comments
  - With replies
  - Most liked

#### **Features:**

- ❌ Quick edit inline
- ❌ View replies
- ❌ Sort by date, likes
- ❌ Search in comments

---

## 6️⃣ `/dashboard/user/settings` - Settings Page

### ✅ যা আছে (Completed):

- ✅ Basic UI layout
- ✅ Notifications section (UI only)
- ✅ Security section (UI only)
- ✅ Appearance section (UI only)
- ✅ Privacy section (UI only)
- ✅ Danger Zone (UI only)

### ❌ যা বাকি (Remaining):

#### **Backend API প্রয়োজন:**

- ❌ `GET /api/v1/users/settings` - Settings fetch করা
- ❌ `PUT /api/v1/users/settings/notifications` - Notification preferences update
- ❌ `PUT /api/v1/users/settings/privacy` - Privacy settings update
- ❌ `PUT /api/v1/users/change-password` - Password change
- ❌ `POST /api/v1/users/2fa/enable` - Enable 2FA
- ❌ `POST /api/v1/users/2fa/disable` - Disable 2FA
- ❌ Database Schema: User model এ settings fields add করা
  ```prisma
  model User {
    // ... existing fields
    emailNotifications  Boolean @default(true)
    pushNotifications   Boolean @default(true)
    publicProfile       Boolean @default(true)
    showEmail           Boolean @default(false)
    theme               String  @default("light") // light, dark, auto
    twoFactorEnabled    Boolean @default(false)
  }
  ```

#### **Frontend কাজ:**

- ❌ Notification toggles কে functional করা
  - Email notifications on/off
  - Push notifications on/off
  - Save to backend
- ❌ Change Password modal implement করা
  - Form with validation
  - API integration
  - Success/error messages
- ❌ Two-Factor Authentication setup
  - QR code generation
  - Verification code input
  - Enable/disable functionality
- ❌ Theme switcher functional করা
  - Light/Dark/Auto toggle
  - Save preference
  - Apply theme dynamically
- ❌ Privacy toggles functional করা
  - Public profile on/off
  - Show email on/off
  - Save to backend
- ❌ Delete Account functionality
  - Confirmation modal
  - Password verification
  - Final warning
  - API call to delete

#### **Features:**

- ❌ Real-time theme switching
- ❌ Settings auto-save
- ❌ Export user data option
- ❌ Download account data

---

## 🔥 **CRITICAL MISSING FEATURES (Assignment Requirements)**

### 1. **Payment History** ⚠️ **MUST HAVE**

According to assignment: _"View payment history in profile"_

#### **Backend API:**

- ❌ `GET /api/v1/payments/user/:userId` - User এর payment history
- ❌ Database Schema:
  ```prisma
  model Payment {
    id              String   @id @default(cuid())
    userId          String
    productId       String
    amount          Float
    currency        String   @default("BDT")
    status          String   // success, failed, pending
    transactionId   String   @unique
    paymentMethod   String   // SSLCommerz, ShurjoPay
    receiptUrl      String?
    user            User     @relation(fields: [userId], references: [id])
    product         Product  @relation(fields: [productId], references: [id])
    createdAt       DateTime @default(now())
  }
  ```

#### **Frontend:**

- ❌ Create new page: `/dashboard/user/payments`
- ❌ Payment history table/list
  - Date
  - Review title
  - Amount
  - Status
  - Receipt download button
- ❌ Filter by date range
- ❌ Total spent display
- ❌ Add link in sidebar navigation

### 2. **Premium Review Access Tracking**

- ❌ Track which premium reviews user has purchased
- ❌ Show "Purchased" badge on premium reviews
- ❌ Allow access to vote/comment on purchased premium reviews

---

## 📋 **SUMMARY - কাজের সংক্ষিপ্ত তালিকা**

### **Backend Development (সবচেয়ে জরুরি):**

1. ❌ User dashboard stats API
2. ❌ User reviews CRUD APIs
3. ❌ Favorites system APIs
4. ❌ Profile update APIs
5. ❌ Image upload to Cloudinary
6. ❌ Comments management APIs
7. ❌ Settings update APIs
8. ❌ **Payment history API** (CRITICAL)
9. ❌ Password change API
10. ❌ Account deletion API

### **Frontend Development:**

1. ❌ API integration সব pages এ
2. ❌ Real data display (remove hardcoded 0s)
3. ❌ Edit/Delete functionality for reviews
4. ❌ Favorites add/remove
5. ❌ Profile edit modal
6. ❌ Image upload UI
7. ❌ Comments list with actions
8. ❌ Settings toggles functional করা
9. ❌ **Payment history page তৈরি করা** (CRITICAL)
10. ❌ Loading states everywhere
11. ❌ Error handling
12. ❌ Form validations
13. ❌ Confirmation modals

### **Database Schema:**

1. ❌ Favorite model
2. ❌ Comment model (with replies)
3. ❌ Payment model (CRITICAL)
4. ❌ User model এ settings fields
5. ❌ Product model এ views, isPremium, price fields

---

## 🎯 **PRIORITY ORDER (কোনটা আগে করবেন)**

### **Phase 1: Core Functionality (সবচেয়ে জরুরি)**

1. Backend APIs for user reviews (GET, PUT, DELETE)
2. Display user's reviews with real data
3. Edit/Delete review functionality
4. Profile update API and UI

### **Phase 2: Important Features**

1. Favorites system (backend + frontend)
2. Comments management
3. Settings functionality
4. Image upload

### **Phase 3: Assignment Requirements (MUST COMPLETE)**

1. **Payment history page** (CRITICAL - assignment requirement)
2. Premium review access tracking
3. Receipt download functionality

### **Phase 4: Polish**

1. Loading states
2. Error handling
3. Form validations
4. Animations and transitions

---

## 📊 **Current Status**

| Route                       | UI Complete | API Integration | Functionality | Status         |
| --------------------------- | ----------- | --------------- | ------------- | -------------- |
| `/dashboard/user`           | ✅ 90%      | ❌ 0%           | ❌ 10%        | 🔴 Not Working |
| `/dashboard/user/reviews`   | ✅ 80%      | ❌ 0%           | ❌ 0%         | 🔴 Not Working |
| `/dashboard/user/favorites` | ✅ 70%      | ❌ 0%           | ❌ 0%         | 🔴 Not Working |
| `/dashboard/user/profile`   | ✅ 85%      | ❌ 0%           | ❌ 5%         | 🔴 Not Working |
| `/dashboard/user/comments`  | ✅ 70%      | ❌ 0%           | ❌ 0%         | 🔴 Not Working |
| `/dashboard/user/settings`  | ✅ 90%      | ❌ 0%           | ❌ 0%         | 🔴 Not Working |
| **Payment History**         | ❌ 0%       | ❌ 0%           | ❌ 0%         | 🔴 **MISSING** |

**Overall User Dashboard Completion: ~25%**

- UI: 80% complete
- Backend APIs: 0% complete
- Functionality: 5% complete

---

## 💡 **Next Steps**

1. **Backend তৈরি করুন** - এটা সবচেয়ে জরুরি
2. **Database Schema** design করুন (Prisma)
3. **APIs implement** করুন step by step
4. **Frontend এ API integration** করুন
5. **Payment History page** তৈরি করুন (assignment requirement)
6. **Testing** করুন সব functionality

---

**Generated:** 2025-12-05  
**Project:** TrustEdge - Product Review Portal  
**Focus:** User Dashboard Routes
