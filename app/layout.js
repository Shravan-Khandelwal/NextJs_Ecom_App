import "./globals.css";
import AppContextProvider from "./../Store/AppContext";

export const metadata = {
  title: "Home Page",
  description: "Welcome To Home Page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <AppContextProvider>
        <body className="rounded-none ">{children}</body>
      </AppContextProvider>
    </html>
  );
}
