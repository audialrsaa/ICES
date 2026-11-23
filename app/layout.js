
import "./globals.css";

export const metadata = {
  title: "IC2EST 2027 | Universitas LIA",
  description:
    "The 2nd International Conference on Education, Economics, Social Science, and Technology, organized by Universitas LIA.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
