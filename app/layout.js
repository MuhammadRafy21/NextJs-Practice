import "./globals.css";
import Tab from "../components/tab";
import Navigation from "../components/Navigation";

export default function RootLayout ({children}){
  return(
    <html>
      <body>
        <Navigation />
        {children}
        <Tab />
      </body>
    </html>
  )
}