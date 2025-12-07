# Free QR Code Generator

A simple, free, and user-friendly QR code generator built with Next.js and React. This application allows users to generate and download QR codes for any URL.

## Features

- **Generate QR Codes**: Enter a URL and instantly generate a QR code.
- **Upload Logo**: Upload a custom logo to be displayed in the center of the QR code.
- **Download QR Codes**: Download the generated QR code as a PNG file.
- **Responsive Design**: Optimized for both desktop and mobile devices.
- **No Sign-Up Required**: Use the app without any registration.

## Technologies Used

- **Next.js**: Framework for building React applications.
- **React**: JavaScript library for building user interfaces.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **React Icons**: Icon library for React components.
- **qrcode.react**: Library for generating QR codes.

## Installation

1. Clone the repository:
```bash
   git clone https://github.com/Pmacdon15/free-qrcode.git
   cd free-qrcode
```
2. Install dependencies:
```bash
npm i
```
3. Run the Dev server:
```bash 
npm run dev
```
4. Open your browser and navigate to:
```bash
http://localhost:3000
```

## Usage
1. Enter a URL in the input field.
2. Click the Generate QR Code button to generate a QR code.
3. Optionally, upload a logo to be displayed in the center of the QR code.
4. Click the Download QR Code button to download the QR code as a PNG file.

Project Structure
```bash
.
├── src/
│   ├── app/
│   │   ├── [layout.tsx](http://_vscodecontentref_/1)       # Root layout component
│   │   ├── [page.tsx](http://_vscodecontentref_/2)         # Home page component
│   └── public/              # Public assets (e.g., images)
├── .next/                   # Next.js build output
├── .vercel/                 # Vercel deployment configuration
├── [postcss.config.mjs](http://_vscodecontentref_/3)       # PostCSS configuration
├── [eslint.config.mjs](http://_vscodecontentref_/4)        # ESLint configuration
├── [tsconfig.json](http://_vscodecontentref_/5)            # TypeScript configuration
├── [package.json](http://_vscodecontentref_/6)             # Project dependencies and scripts
└── [README.md](http://_vscodecontentref_/7)                # Project documentation
```
## Scripts
- npm run dev: Start the development server.
- npm run build: Build the project for production.
- npm run start: Start the production server.
- npm run lint: Run ESLint to check for code quality issues.

## Deployment
This project is ready to be deployed on platforms like Vercel. Simply connect your repository to Vercel, and it will handle the deployment process.

## Contributing
Contributions are welcome! Feel free to open an issue or submit a pull request.

## License
This project is licensed under the MIT License.