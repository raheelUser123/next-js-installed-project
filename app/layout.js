import "./globals.css";

export const metadata = {
  title: "UR Digital Tech — Digital experiences built to move",
  description: "Strategy, design and development for ambitious digital brands."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}