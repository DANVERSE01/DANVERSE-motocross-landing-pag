import localFont from "next/font/local"

export const monaSans = localFont({
  src: [
    {
      path: "../public/fonts/MonaSans-Variable.woff2",
      weight: "200 900",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-roboto",
})

export const libreBaskerville = localFont({
  src: [
    {
      path: "../public/fonts/Brier-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-libre-baskerville",
})

export const alexBrush = localFont({
  src: [
    {
      path: "../public/fonts/Brier-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-alex-brush",
})

export const oswald = localFont({
  src: [
    {
      path: "../public/fonts/MonaSans-Variable.woff2",
      weight: "300 900",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-oswald",
})
