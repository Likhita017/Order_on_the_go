# User Admin Flow Documentation

This document outlines the user flows for the Order_on_the_go application, specifically focusing on the following:  
1. User Registration Flow  
2. Ordering Flow  
3. Restaurant/Vendor Flow  
4. Admin Flow  

---  

## 1. User Registration Flow  
#### Step 1: Access Registration Page  
- User navigates to the Registration page.  
- **Decision Point:** Is the page loaded successfully?  
  - Yes: Proceed to Step 2  
  - No: Display error message.

#### Step 2: Fill Registration Form  
- User enters required information:  
  - Username  
  - Email  
  - Password  
  - Confirm Password
- **Decision Point:** Are all fields filled correctly?  
  - Yes: Proceed to Step 3  
  - No: Display appropriate error message.

#### Step 3: Submit Registration  
- User submits the form.  
- **Decision Point:** Is registration successful?  
  - Yes: Redirect to Login page with a success message.  
  - No: Display error message (e.g., email already exists).

---  

## 2. Ordering Flow  
#### Step 1: Log In  
- User logs into their account.  

#### Step 2: Browse Menu  
- User navigates to the menu page of a restaurant.  
- **Decision Point:** Is the menu loaded correctly?  
  - Yes: Continue to Step 3  
  - No: Display error message.

#### Step 3: Add Items to Cart  
- User selects items to add to cart.  

#### Step 4: Checkout  
- User proceeds to checkout.  
- **Decision Point:** Is payment successful?  
  - Yes: Confirm order and display confirmation page.  
  - No: Display error message and retry payment option.

---  

## 3. Restaurant/Vendor Flow  
#### Step 1: Log In as Vendor  
- Vendor logs into their account.  

#### Step 2: Manage Menu  
- Vendor adds or updates menu items.  

#### Step 3: Review Orders  
- Vendor reviews incoming orders.  

#### Step 4: Update Order Status  
- Vendor updates order status (e.g., preparing, completed).  

---  

## 4. Admin Flow  
#### Step 1: Log In as Admin  
- Admin logs into their account.  

#### Step 2: Manage Users  
- Admin reviews user accounts and their activities.  

#### Step 3: Review Reports  
- Admin reviews sales and order reports.  

#### Step 4: Manage Vendors  
- Admin adds or removes vendor accounts as necessary.  

---  

This document serves as a guide to understand the user flows associated with the Order_on_the_go application. Each flow has decision points that require user input or system responses to ensure a smooth user experience.  
