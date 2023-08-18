import NavBar from "@/components/NavBar";
import { Roboto } from "next/font/google";

export const metadata = {
  title: "Mi Tienda con Nextjs - Homepage",
  description: "Esta es la pagina principal de mi tienda",
};

const roboto = Roboto({
  weight: ["300", "400", "500", "700", "900"],
  style: ["italic", "normal"],
  subsets: ["latin"],
});
export default function RootLayout({ children }) {
  return (
    <html>
      <body className={roboto.className}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
