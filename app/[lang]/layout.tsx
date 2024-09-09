import "../reset.css";
import "../global.css";
import { getTranslationStaticParams } from "../../translations/translations";
import { NavBar } from "./components/navBar/navBar";
import { Footer } from "./components/footer/footer";
import { Montserrat } from "next/font/google";
import favicon from "../../public/favicon.ico";
import favicon16 from "../../public/favicon-16x16.png";
import favicon32 from "../../public/favicon-32x32.png";
import favicon192 from "../../public/favicon-192x192.png";
import appleTouchIcon from "../../public/apple-touch-icon.png";
import safariPinnedTab from "../../public/safari-pinned-tab.svg";
import { Analytics } from "@vercel/analytics/react";

// If loading a variable font, you don't need to specify the font weight
const fontClass = Montserrat({
  subsets: ["latin"],
  display: "swap",
});

export async function generateStaticParams() {
  return getTranslationStaticParams();
}

export default function RootLayout({ children, params }: { children: React.ReactNode; params: { lang: string } }) {
  return (
    <html lang={params.lang} className={fontClass.className}>
      <head>
        <link rel="shortcut icon" href={favicon.src} />
        <link rel="icon" type="image/png" sizes="16x16" href={favicon16.src} />
        <link rel="icon" type="image/png" sizes="32x32" href={favicon32.src} />
        <link rel="icon" type="image/png" sizes="192x192" href={favicon192.src} />
        <link rel="apple-touch-icon" sizes="180x180" href={appleTouchIcon.src} />
        <link rel="mask-icon" href={safariPinnedTab.src} color="#00aba8" />
        <meta name="google-site-verification" content="yNxeZNw0jlQy8ywG1nUXNCi1zgL61n9KqWv3kb4zmEE" />
      </head>
      {/* set an id for Modal accessibility */}
      <body id="body">
        <NavBar lang={params.lang} />
        <main>{children}</main>
        <Footer lang={params.lang} />
        <Analytics />
      </body>
    </html>
  );
}
