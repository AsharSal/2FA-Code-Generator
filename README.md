# 2FA Code Generator

A real-time Two-Factor Authentication (2FA) code generator built with React and Express. This application generates time-based one-time passwords (TOTP) from a provided Base32 secret key.

## Features

- Real-time TOTP code generation
- Countdown timer for code expiration
- Clean and responsive UI
- Cross-platform compatibility

## Technology Stack

- Frontend: React.js
- Backend: Node.js with Express
- TOTP Implementation: Speakeasy
- API Communication: Axios

## Setup and Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd twoFA
```

2. Install dependencies for both client and server:
```bash
# Install client dependencies
cd client
npm install

# Install server dependencies
cd ../server
npm install
```

3. Start the applications:

Start the server:
```bash
cd server
npm start
```

Start the client in a new terminal:
```bash
cd client
npm start
```

The client will run on http://localhost:3000 and the server on http://localhost:4000.

## Usage

1. Input your Base32 secret key in the text field
2. The application will automatically generate a 6-digit TOTP code
3. A countdown timer shows when the current code will expire
4. Codes automatically refresh every 30 seconds

## API Endpoints

`POST /totp-generate`
- Accepts a Base32 secret in the request body
- Returns the current TOTP token and remaining time

## Contributing

Feel free to open issues and submit pull requests.

## License

ISC