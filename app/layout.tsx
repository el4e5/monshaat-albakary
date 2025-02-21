import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import clsx from "clsx";

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Navbar } from "@/components/navbar";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="ar" dir="rtl">
      <head>
        <title>الرئيسية - منشأة البكاري</title>
        <meta name="description" content="اكتشف كل ما تحتاجه في قرية منشأة البكاري – أحدث الأخبار، المستشفيات، العيادات، الصنايعية، المدرسين، والمحلات. دليلك الشامل للحياة في منشأة البكاري." />
        <meta name="keywords" content="منشأة البكاري, قرية, أخبار, مستشفيات, عيادات, صنايعية, مدرسين, محلات" />
        <meta name="author" content="تطبيق منشأة البكاري" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="منشأة البكاري - أحدث الأخبار والخدمات" />
        <meta property="og:description" content="كل ما تحتاجه في قرية منشأة البكاري من أخبار وخدمات محلية." />
        {/* <meta property="og:image" content="" /> */}
        <meta property="og:url" content="https://monshaet-elbakary.vercel.app" />
      </head>
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className="relative flex flex-col h-screen">
            <Navbar />
            <main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">
              {children}
            </main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
