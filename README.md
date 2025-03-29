
# EmployWise - User Management App

EmployWise is a React-based application for managing users, with login authentication, user list management, CRUD operations and Dynamic filtering.

---

## **Getting Started**
### **Installation Steps**
1. Clone the repo:
   ```bash
   git clone https://github.com/angalwarsupriya/employ-wise
   cd employwise
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the project:
   ```bash
   npm start
   ```
4. Build for production:
   ```bash
   npm run build
   ```

---

## **Features**
- Secure login using tokens.
- Manage users with pagination, search, and filter.
- Edit and delete users with real-time updates.
- Protected routes for authenticated access.
- Responsive design with Bootstrap integration.


## **Tech Stack**
- React, React Router, Context API
- Bootstrap, Custom CSS
- Axios for API requests
- Reqres API for data handling

---

## **API Endpoints**
- `POST /login` - User authentication
- `GET /users?page={page}` - Fetch users
- `PUT /users/{id}` - Edit user
- `DELETE /users/{id}` - Delete user

---

## **Assumptions**
- Uses Reqres API for testing purposes.
- Users have `id`, `first_name`, `last_name`, `email`, and `avatar` fields.

---

## **User Credentials**
To test the application, use the following login credentials:

- **Email:** `eve.holt@reqres.in`
- **Password:** `cityslicka`

**Note:** These credentials are mandatory for logging in to the application and testing its functionality.

---

## **LIVE DEMO** ##
-- ** https://employ-wise-alpha.vercel.app/ ** --