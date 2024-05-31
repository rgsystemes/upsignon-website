import "../reset.css";
import "../global.css";
import { getTranslationStaticParams } from "../../translations/translations";
import { NavBar } from "./navBar";
import { Footer } from "./footer";

export async function generateStaticParams() {
  return getTranslationStaticParams();
}

export default function RootLayout({ children, params }: { children: React.ReactNode; params: { lang: string } }) {
  return (
    <html lang={params.lang}>
      <body>
        <NavBar lang={params.lang} />
        <main>{children}</main>
        <Footer lang={params.lang} />
      </body>
    </html>
  );
}
