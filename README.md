

The **Movie Booking App** is a backend service built using **Node.js** and **Express.js**, enabling users to book movie tickets online. It includes secure authentication, a payment gateway via **Razorpay**, input validation with **Zod**, and seamless database management with **MongoDB & Mongoose**.

## 🌟 Features

### 🎟️ User & Authentication

- Secure **JWT-based authentication** for login & registration.
- Password hashing and validation.
- Role-based access control (Admin/User).

### 🎬 Movie Management

- Fetch and manage movie listings.
- Retrieve available **showtimes** and **seating arrangements**.
- Search/filter movies based on categories, languages, or ratings.

### 🪑 Seat Selection & Booking

- Dynamic seat selection based on **real-time availability**.
- Store and track user bookings in **MongoDB**.
- **Booking history** for users.

### 💳 Payment Integration

- **Razorpay** integration for secure transactions.
- Payment validation and status tracking.
- Order and transaction history in the database.

### 🛡️ Data Validation & Security

- **Zod** for **robust input validation** to ensure correct data formats.
- **CORS** enabled for safe cross-origin requests.
- Secure environment variables handling with **dotenv-cli**.

---

## 🛠️ Tech Stack

| Stack                      | Technology Used                              |
| -------------------------- | -------------------------------------------- |
| **Backend**                | Node.js, Express.js                          |
| **Database**               | MongoDB (Mongoose ORM)                       |
| **Authentication**         | JSON Web Tokens (JWT)                        |
| **Payment Gateway**        | Razorpay                                     |
| **Validation**             | Zod                                          |
| **Environment Management** | dotenv-cli                                   |
| **Development Utilities**  | Nodemon                                      |

---

## 📌 Installation & Setup

### 🔽 1. Clone the Repository

```bash
git clone https://github.com/Me3T/movie-booking.git
cd movie-booking
```
