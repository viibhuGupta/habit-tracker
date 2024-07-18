import localFont from "next/font/local";

const gtRG = localFont({
  src: [{ path: "../public/assets/fonts/gtRG.woff2" }],
  variable: "--font-gtRG",
});

const gtTrial = localFont({
  src: [{ path: "../public/assets/fonts/gtTrial.woff2" }],
  variable: "--font-gtTrial",
});

export { gtRG  , gtTrial}; // Exporting gtRG as a named export