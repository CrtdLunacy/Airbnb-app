import Banner from '../components/Banner'
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
        <Banner />
        <main className='max-w-7xl mx-auto px-8 sm:px-16 '>
        {children}
        </main>
      </body>
    </html>
  )
}
