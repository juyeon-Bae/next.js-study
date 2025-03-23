import type { Metadata } from "next";
import Navigation from "@/components/navigation";

export const metadata: Metadata = {
  title: {
    template: "%s | Next Movies",
    default: "Next Movies" //meta data없을때 ex) not-found pate(기본값)
  },
  description: "The best movies on the best fromework",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
