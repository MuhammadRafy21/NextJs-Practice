import "./globals.css";
import Partner from "../components/partner";
import Tab from "../components/tab";
import Navigation from "../components/Navigation";

export default function RootLayout ({children}){
  return(
    <html>
      <body>
        <Navigation />
        {children}
        <Tab />
        <Partner />
      </body>
    </html>
  )
}