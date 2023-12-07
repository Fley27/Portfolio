import { raleway, poppins, quicksand } from "./fonts";
import "../styles/global.css";


export const metadata = {
  title: 'Fenley Ménélas',
  description: 'Marketing and Web Development',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${raleway.variable} ${poppins.variable} ${quicksand.variable}` }>
      <body>{children}</body>
    </html>
  )
}


