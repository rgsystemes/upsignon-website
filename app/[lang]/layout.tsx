import "../reset.css";
import "../global.css";
import { getTranslationStaticParams } from "../../translations/translations";
import { NavBar } from "./navBar";
import { Footer } from "./footer";
import { Montserrat } from "next/font/google";

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
      <body>
        <NavBar lang={params.lang} />
        <main>{children}</main>
        <Footer lang={params.lang} />
      </body>
    </html>
  );
}
