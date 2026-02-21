# API Endpoints Documentation

## Authentication

### POST /api/auth/login
- **Request:**  
  - Body:  
    ```json
    {  
      "username": "string",  
      "password": "string"  
    }
    ```
- **Response:**  
  - Code: `200 OK`  
    ```json
    {  
      "token": "string"  
    }
    ```  
  - Code: `401 Unauthorized`

### POST /api/auth/register
- **Request:**  
  - Body:  
    ```json
    {  
      "username": "string",  
      "password": "string"  
    }
    ```
- **Response:**  
  - Code: `201 Created`  
  - Code: `400 Bad Request`

## Users

### GET /api/users
- **Response:**  
  - Code: `200 OK`  
  - Body:  
    ```json
    [  
      {  
        "id": "number",  
        "username": "string"  
      }  
    ]
    ```

## Products

### GET /api/products
- **Response:**  
  - Code: `200 OK`  
  - Body:  
    ```json
    [  
      {  
        "id": "number",  
        "name": "string",  
        "price": "number"  
      }  
    ]
    ```

### POST /api/products
- **Request:**  
  - Body:  
    ```json
    {  
      "name": "string",  
      "price": "number"  
    }
    ```
- **Response:**  
  - Code: `201 Created`  
  - Code: `400 Bad Request`

## Cart

### GET /api/cart
- **Response:**  
  - Code: `200 OK`  
  - Body:  
    ```json
    {  
      "items": [  
        {  
          "productId": "number",  
          "quantity": "number"  
        }  
      ]  
    }
    ```

### POST /api/cart/add
- **Request:**  
  - Body:  
    ```json
    {  
      "productId": "number",  
      "quantity": "number"  
    }
    ```
- **Response:**  
  - Code: `200 OK`  
  - Code: `404 Not Found`

## Orders

### POST /api/orders
- **Request:**  
  - Body:  
    ```json
    {  
      "items": [  
        {  
          "productId": "number",  
          "quantity": "number"  
        }  
      ],  
      "address": "string"  
    }
    ```
- **Response:**  
  - Code: `201 Created`  
  - Code: `400 Bad Request`

## Admin Operations

### GET /api/admin/users
- **Response:**  
  - Code: `200 OK`
  - Body:  
    ```json
    [  
      {  
        "id": "number",  
        "username": "string",  
        "role": "string"  
      }  
    ]
    ```

### DELETE /api/admin/users/{id}
- **Response:**  
  - Code: `204 No Content`
  - Code: `404 Not Found`

## Status Codes
- `200 OK`: Request succeeded.
- `201 Created`: Resource created successfully.
- `204 No Content`: Successful deletion with no content.
- `400 Bad Request`: Invalid request.
- `401 Unauthorized`: Authentication failed.
- `404 Not Found`: Resource not found.

---