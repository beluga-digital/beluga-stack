import "@fontsource-variable/inter";
import "@fontsource/geist-mono/400.css";
import "@fontsource/geist-mono/700.css";
import "@fontsource/krona-one";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "beluga stack no.1",
  description: "",
};

const RootLayout = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => {
  return (
    <html className="scroll-smooth w-full" lang="en">
      <body
        className="
        bg-white
        dark:bg-slate-950 
        antialiased
        min-w-full
        min-h-full
      "
      >
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
