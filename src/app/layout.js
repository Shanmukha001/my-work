import { Header } from './Header'
import { Menu } from './Menu'
import './media.css'
import 'bootstrap/dist/css/bootstrap.css'

import { Footer } from './Footer'



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header/>
        <Menu/>
        { children }
        <Footer/>
      </body>
    </html>
  )
}
