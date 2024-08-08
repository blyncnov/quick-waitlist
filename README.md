# Quick Waitlist

Quick Waitlist is a simple boilerplate for creating a fast waitlist demo website in less than 2 minutes. Users can choose from different types of templates to suit their needs.

<div align="center" style="width: 100%">
    <a style="width: 100%" href="https://quick-waitlist-code.vercel.app/" target="_blank">
      <img src="https://github.com/user-attachments/assets/d287f001-e8fd-47ed-9dac-fca3252e403c" alt="Quick Waitlist Banner">
    </a>
  </div>

## Table of Contents

- [Tech Stack](#tech-stack)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Development Server](#running-the-development-server)
  - [Configuration](#configuration)
  - [Generating Prisma Client](#generating-prisma-client)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Tech Stack

- **Next.js** (server actions): For building the frontend and backend of the application.
- **Postgres** (database): For robust and scalable data storage.
- **Resend**: For managing email notifications.

## Features

- Quick setup and deployment.
- Server-side rendering with Next.js.
- Efficient database management with Postgres.
- Easy email notification integration with Resend.
- Multiple templates to choose from.

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed on your machine:

- Node.js (v14 or later)
- npm, yarn, pnpm, or bun

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/blyncnov/quick-waitlist.git
   cd quick-waitlist
   ```

2. **Install dependencies**:

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

### Running the Development Server

To start the development server, run one of the following commands:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Configuration

1. **Create a `.env` file in the root directory** and add the following environment variables:

   ```plaintext
   # Connect to Railway via connection pooling
   DATABASE_URL= <Postgres_Database_URL>

   # Resend API_KEY
   RESEND_API_KEY =  <RESEND_API_KEY>
   ```

### Generating Prisma Client

After configuring your environment variables, you need to generate the Prisma client:

```bash
npx prisma generate
```

## Contributing

Contributions are welcome! Please follow these guidelines:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a pull request.

Please open an issue or submit a pull request for any bugs or feature requests.

## License

This project is licensed under the MIT License.

## Contact

For any questions or inquiries, please contact [bholuwatife00@gmail.com](mailto:bholuwatife00@gmail.com). You can also visit my [portfolio website](https://jeremytechie.com/) or connect with me on [Twitter](https://x.com/jeremytechie).
