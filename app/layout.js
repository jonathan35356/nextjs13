import NavBar from "@/components/NavBar";

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <title>Index page</title>
      </head>

      <body>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
