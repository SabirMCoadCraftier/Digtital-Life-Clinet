import "./globals.css";
import Providers from "@/components/providers/Providers";

export const metadata = {
  title: {
    default: "Digital Life Lessons",
    template: "%s | Digital Life Lessons",
  },
  description:
    "Learn from real-life experiences and share digital life lessons with our community.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
