# E-commerce Project

A modern e-commerce web application built with React and Vite, featuring product browsing, shopping cart management, checkout process, and order tracking functionality.

## Features

- 🛍️ Product browsing and search
- 🛒 Shopping cart management
- 💳 Checkout process
- 📦 Order tracking
- 🚚 Delivery options
- 💰 Payment processing
- 📱 Responsive design

## Tech Stack

- **Frontend:**
  - React 19
  - React Router 7
  - Axios for API calls
  - Day.js for date handling
  - CSS for styling

- **Development Tools:**
  - Vite 6
  - ESLint 9
  - Vitest for testing
  - React Testing Library

## Getting Started

### Prerequisites

- Node.js (LTS version recommended)
- npm or yarn

### Installation

1. Clone the repository

```bash
git clone [repository-url]
cd ecommerce-project
```

2. Install dependencies

```bash
npm install
```

### Development

To start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Building for Production

To create a production build:

```bash
npm run build
```

To preview the production build:

```bash
npm run preview
```

### Linting

To run the linter:

```bash
npm run lint
```

## Project Structure

- `/src` - Source code
  - `/assets` - Static assets
  - `/components` - Reusable components
  - `/pages` - Page components
    - `/checkout` - Checkout related components
    - `/home` - Home page components
    - `/orders` - Order management components
  - `/utils` - Utility functions

## Backend Integration

This project works in conjunction with a separate backend server (`ecommerce-backend`) that provides the following features:

- Product management
- Cart operations
- Order processing
- Delivery options
- Payment processing

## Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.
