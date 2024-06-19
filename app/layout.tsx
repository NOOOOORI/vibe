import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { jaJP } from "@clerk/localizations";
import "@stream-io/video-react-sdk/dist/css/styles.css";
import "react-datepicker/dist/react-datepicker.css";

import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vibe",
  description:
    "Vibeは、シンプルで使いやすいビデオ会議アプリです。高度な機能を備えながら、セキュリティとユーザビリティにも優れています。チームコラボレーション、オンラインミーティング、遠隔授業など、様々なシーンでご利用いただけます。",
  icons: {
    icon: "/icons/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <ClerkProvider
        appearance={{
          layout: {
            // logoImageUrl: "/icons/yoom-logo.svg",
            socialButtonsVariant: "iconButton",
          },
          variables: {
            colorText: "#fff",
            colorPrimary: "#0e78f9",
            colorBackground: "#1c1f2e",
            colorInputBackground: "#252a41",
            colorInputText: "#fff",
          },
        }}
        localization={jaJP}
      >
        <body className={`${inter.className} bg-dark-2`}>
          {children}
          <Toaster />
        </body>
      </ClerkProvider>
    </html>
  );
}
