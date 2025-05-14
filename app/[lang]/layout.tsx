import "../reset.css";
import "../global.css";
import { getTranslationStaticParams } from "../../translations/translations";
import { NavBar } from "./components/navBar/navBar";
import { Footer } from "./components/footer/footer";
import { Poppins } from "next/font/google";
import favicon from "../../public/favicon.ico";
import favicon32 from "../../public/favicon-32x32.png";
import favicon256 from "../../public/favicon-256x256.png";
import { Analytics } from "@vercel/analytics/react";
import { AnchorScrollWithFixedHeaderBody } from "./components/anchorScrollWithFixedHeaderBody/anchorScrollWithFixedHeaderBody";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { GoogleAnalytics } from "@next/third-parties/google";
import { HubspotProvider } from "next-hubspot";

// If loading a variable font, you don't need to specify the font weight
const fontClass = Poppins({
  subsets: ["latin"],
  display: "auto",
  weight: "400",
});

export async function generateStaticParams() {
  return getTranslationStaticParams();
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  return (
    <html lang={lang} className={fontClass.className}>
      <head>
        <link rel="shortcut icon" href={favicon.src} />
        <link rel="icon" type="image/png" sizes="32x32" href={favicon32.src} />
        <link
          rel="icon"
          type="image/png"
          sizes="256x256"
          href={favicon256.src}
        />
        <meta
          name="google-site-verification"
          content="yNxeZNw0jlQy8ywG1nUXNCi1zgL61n9KqWv3kb4zmEE"
        />
      </head>

      <AnchorScrollWithFixedHeaderBody fixedComponent={<NavBar lang={lang} />}>
        <ToastContainer />
        <HubspotProvider>
          <main>{children}</main>
        </HubspotProvider>
        <Footer lang={lang} />
        <Analytics />
      </AnchorScrollWithFixedHeaderBody>
      <GoogleAnalytics gaId="G-2CQXP4PHH2" />
    </html>
  );
}
