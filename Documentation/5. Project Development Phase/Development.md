# 🗄️ Database Development

### 📹 Reference Video
- [Create database in cloud](https://drive.google.com/file/d/1CQil5KzGnPvkVOPWTLP0h-Bu2bXhq7A3/view)

### ⚙️ Steps
- Install **Mongoose**  
- Create database connection  

📹 [Connect Node.js with MongoDB](https://drive.google.com/file/d/1cTS3_-EOAAvDctkibG5zVikrTdmoY2Ag/view?usp=sharing)  
📖 [MongoDB Atlas Connection Guide](https://www.mongodb.com/docs/atlas/tutorial/connect-to-your-cluster/)  

---

## 📑 Schema Use-Cases

### 1. User Schema
- **Schema:** `userSchema`  
- **Model:** `User`  
- Fields: `username`, `email`, `password`

### 2. Product Schema
- **Schema:** `productSchema`  
- **Model:** `Product`  
- Stores product details for ordering

### 3. Orders Schema
- **Schema:** `ordersSchema`  
- **Model:** `Orders`  
- Fields: `userId`, `productId`, `productName`, `quantity`, `size`, `orderDate`

### 4. Cart Schema
- **Schema:** `cartSchema`  
- **Model:** `Cart`  
- Fields: `userId`, `productId`, `productName`, `quantity`, `size`, `orderDate`  
- `userId` references the user who owns the cart

### 5. Admin Schema
- **Schema:** `adminSchema`  
- **Model:** `Admin`  
- Stores categories, promoted restaurants, etc.

### 6. Restaurant Schema
- **Schema:** `restaurantSchema`  
- **Model:** `Restaurant`  
- Stores restaurant info and menu details

---

# ⚙️ Backend Development

### 1. Project Setup
- Create a new directory  
- Initialize with `npm init`  
- Install dependencies: `express`, `mongoose`, etc.  

📹 [Setup Project Structure](https://drive.google.com/file/d/19df7NU-gQK3DO6wr7ooAfJYIQwnemZoF/view?usp=sharing)

---

### 2. Express Server Setup
- Create `index.js`  
- Start server on desired port  
- Define APIs  

📹 [Setup Express Server](https://drive.google.com/file/d/1-uKMIcrok_ROHyZl2vRORggrYRio2qXS/view?usp=sharing)

---

### 3. Database Configuration
- Use **MongoDB Atlas** or **MongoDB Compass**  
- Create collections: `admin`, `users`, `restaurants`, `products`, `orders`  

📖 [MongoDB Atlas Connection Guide](https://www.mongodb.com/docs/atlas/tutorial/connect-to-your-cluster/)  

---

### 4. Express.js Server
- Handle HTTP requests  
- Configure middleware: `body-parser`, `cors`

---

### 5. API Routes
- Separate route files for `users`, `orders`, `auth`  
- Implement CRUD operations with Express + Mongoose  

---

### 6. User Authentication
- Routes for register, login, logout  
- Middleware for protected routes  

---

### 7. Products & Orders
- Routes for product listing  
- Order placement with validation and DB updates  

---

### 8. Admin Functionality
- Routes for product management, order management  
- Authorization checks for admin access  

---

### 9. Error Handling
- Middleware for catching errors  
- Return proper HTTP status codes  

---

# 🎨 Frontend Development

### 1. Setup React App
- Create React app in `client/`  
- Install required libraries  
- Create pages and components  

### 2. Design UI Components
- Build reusable components  
- Implement layout and styling  
- Add navigation  

### 3. Frontend Logic
- Integrate with API endpoints  
- Implement data binding  

📹 [React Frontend Setup](https://drive.google.com/file/d/1EokogagcLMUGiIluwHGYQo65x8GRpDcP/view?usp=sharing)  
📖 [React Getting Started](https://www.w3schools.com/react/react_getstarted.asp)  

---

# 💻 Code Explanation

### 🔧 Server Setup
- Import required libraries  
- Connect to MongoDB  

### 🔐 User Authentication
- Backend: Handle HTTP requests for login/register/logout  
- Frontend: Create forms and integrate with APIs  

---

### 🛍️ Products (User)
- **Frontend:** Fetch products on home page, apply filters  
- **Backend:** Provide product data via API  

---

### 🛒 Cart & Orders
- **Frontend:** Add product to cart, place orders  
- **Backend:** Handle cart updates and order placement  

---

### 🛠️ Admin Dashboard
- Add new products  
- View/manage orders and products  
- Implement admin-only routes
