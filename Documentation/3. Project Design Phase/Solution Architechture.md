# Three-Tier Architecture

This system follows a **three-tier architecture** that ensures scalability, maintainability, and performance. Each layer is responsible for a distinct set of tasks, making the application modular and easier to manage.

---

## 1. Presentation Layer (Frontend)
- **Technology:** React.js  
- **Responsibilities:**  
  - Handles user interface (UI)  
  - Manages user interactions  
  - Provides a responsive and dynamic experience  

---

## 2. Application Layer (Backend)
- **Technology:** Node.js + Express.js  
- **Responsibilities:**  
  - Handles API requests  
  - Implements business logic  
  - Acts as a bridge between frontend and database  

---

## 3. Data Layer (Database)
- **Technology:** MongoDB  
- **Responsibilities:**  
  - Stores user, product, cart, and order data  
  - Provides efficient querying and persistence  
  - Ensures data integrity and scalability  

---

## Architecture Diagram

![Three-Tier Architecture](https://copilot.microsoft.com/th/id/BCO.7fdf0224-0278-47c2-84d2-cf9a6fc86084.png)

---

## Key Benefits
- **Scalability:** Each layer can be scaled independently.  
- **Maintainability:** Clear separation of concerns simplifies updates.  
- **Performance:** Optimized communication between layers ensures responsiveness.  
