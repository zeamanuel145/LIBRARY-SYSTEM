# Library Management System

A comprehensive library management system to efficiently manage books, members, and library operations.

## Features

- **Book Management**: Add, update, delete, and search books
- **Member Management**: Register new members and manage member information
- **Borrowing System**: Issue and return books with due date tracking
- **Search Functionality**: Search books by title, author, ISBN, or category
- **Reports**: Generate reports on borrowed books, overdue items, and member activity
- **User Authentication**: Secure login system for librarians and administrators

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- Database (MySQL/PostgreSQL/MongoDB)
- Web browser

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/library-management-system.git
cd library-management-system
```

2. Install dependencies
```bash
npm install
```

3. Configure database connection
```bash
cp .env.example .env
# Edit .env file with your database credentials
```

4. Run database migrations
```bash
npm run migrate
```

5. Start the application
```bash
npm start
```

## Usage

1. Access the application at `http://localhost:3000`
2. Login with default admin credentials
3. Start managing your library inventory

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.