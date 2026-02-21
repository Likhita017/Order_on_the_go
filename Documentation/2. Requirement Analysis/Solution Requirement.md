# Functional Requirements

1. **User Registration and Login**
   - Users can create accounts with email/phone and password.
   - Social login options (Google/Facebook) for faster access.
   - Password reset and account recovery features.

2. **Secure Authentication using JWT**
   - JSON Web Token (JWT) based authentication for secure sessions.
   - Role-based access control (User, Admin).
   - Token expiration and refresh mechanism.

3. **View Restaurants and Products**
   - Browse restaurants with filters (cuisine, ratings, location).
   - View detailed product information (name, description, price, availability).
   - Real-time updates for menu changes.

4. **Add / Remove Items from Cart**
   - Add selected food items to cart.
   - Update item quantity or remove items.
   - Dynamic cart total calculation including taxes and discounts.

5. **Place Orders**
   - Checkout process with delivery address and payment method.
   - Multiple payment options (Credit/Debit Card, UPI, Wallets, Cash on Delivery).
   - Order validation before submission.

6. **View Order History**
   - Users can view past orders with details (items, price, date, status).
   - Option to reorder from history.
   - Track ongoing orders in real-time.

7. **Admin Login**
   - Separate login for administrators.
   - Secure authentication with elevated privileges.

8. **Admin Product Management**
   - CRUD operations for products (add, update, delete).
   - Manage restaurant menus and availability.
   - Upload product images and descriptions.

9. **View and Manage Orders**
   - Admin dashboard to view all customer orders.
   - Update order status (Pending, Preparing, Out for Delivery, Delivered).
   - Assign delivery partners and track progress.

---

# Non-Functional Requirements

1. **Secure System with Encrypted Passwords**
   - Passwords stored using hashing algorithms (e.g., bcrypt).
   - Secure communication via HTTPS.
   - Protection against common vulnerabilities (SQL injection, XSS).

2. **Fast Response Time**
   - Page load time < 2 seconds.
   - Optimized API calls and database queries.
   - Use of caching for frequently accessed data.

3. **Responsive UI for Mobile and Desktop**
   - Mobile-first design with responsive layouts.
   - Consistent user experience across devices (desktop, tablet, mobile).
   - Accessibility compliance (WCAG standards).

4. **Reliable Database Storage**
   - MongoDB for scalable and flexible data storage.
   - Backup and recovery mechanisms.
   - High availability with replication.

5. **Error Handling and Validation**
   - Input validation on both client and server side.
   - Clear error messages for users.
   - Logging and monitoring for debugging and maintenance.

---

### Summary
The system ensures **secure authentication, smooth ordering, efficient admin management, and responsive design**, while maintaining **performance, reliability, and scalability**.
