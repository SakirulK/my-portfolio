import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Sakirul Karim Portfolio",
  description: "Personal portfolio of Sakirul Karim",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-blue-100">
        {/* NavBar */}
        <nav className="w-full flex items-center justify-between px-6 py-4 bg-blue-100">
          {/* Left: Name */}
          <Link href="/" className="text-2xl font-bold text-blue-600 hover:opacity-80 transition">
            Sakirul Karim
          </Link>

          {/* Right: Nav Links + Social Icons */}
          <div className="flex items-center space-x-6 text-gray-700 font-medium">
            <Link href="/resume" className="hover:text-blue-600">Resume</Link>
            <Link href="/projects" className="hover:text-blue-600">Projects</Link>
            <Link href="/contact" className="hover:text-blue-600">Contact</Link>

            {/* GitHub */}
            <a
              href="https://github.com/SakirulK"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5 h-5" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.207 11.387.6.11.793-.26.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.388-1.333-1.758-1.333-1.758-1.089-.745.082-.729.082-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.835 2.807 1.305 3.492.997.108-.775.418-1.305.762-1.604-2.665-.3-5.467-1.334-5.467-5.93 0-1.31.467-2.381 1.236-3.22-.124-.303-.536-1.523.116-3.176 0 0 1.008-.322 3.3 1.23a11.52 11.52 0 013.003-.404c1.02.005 2.047.137 3.003.404 2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.241 2.873.118 3.176.77.839 1.235 1.91 1.235 3.22 0 4.61-2.807 5.625-5.479 5.92.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.8.576C20.565 21.796 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/sakirul-karim-491406250/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5 h-5" viewBox="0 0 24 24">
              <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.17 8.09H4.8V24H.17V8.09zM7.92 8.09h4.4v2.17h.06c.61-1.16 2.1-2.38 4.32-2.38 4.63 0 5.48 3.05 5.48 7.02V24h-4.62v-7.64c0-1.82-.03-4.16-2.53-4.16-2.53 0-2.92 1.98-2.92 4.02V24H7.92V8.09z" />
              </svg>
            </a>

            {/* Email */}
            <a
              href="mailto:karimsakirul@gmail.com"
              className="hover:text-blue-600"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M12 13.065L0 4h24L12 13.065zM0 20V6.804l12 8.259 12-8.259V20H0z" />
              </svg>
            </a>
          </div>
        </nav>

        {/* Page Content */}
        {children}
      </body>
    </html>
  );
}
