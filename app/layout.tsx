import "./reset.css";
import "./global.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
        <footer></footer>
      </body>
    </html>
  );
}
