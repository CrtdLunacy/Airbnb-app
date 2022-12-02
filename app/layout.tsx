import Banner from '../components/Banner'
import Footer from '../components/Footer'
import Header from '../components/Header'
import '../styles/globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head>
        <title>AirBnb-Next-Demo</title>
      </head>
      <body>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
