import StreamVideoProvider from "@/providers/StreamClientProvider";
import { Metadata } from "next";
import React, { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Vibe",
  description:
    "Vibeは、シンプルで使いやすいビデオ会議アプリです。高度な機能を備えながら、セキュリティとユーザビリティにも優れています。チームコラボレーション、オンラインミーティング、遠隔授業など、様々なシーンでご利用いただけます。",
  icons: {
    icon: "/icons/logo.svg",
  },
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main>
      <StreamVideoProvider>{children}</StreamVideoProvider>
    </main>
  );
};

export default RootLayout;
