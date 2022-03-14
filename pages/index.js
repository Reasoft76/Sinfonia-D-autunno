import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Sinfonia D'autunno!</title>
        <link rel="icon" href="/notfavicon.ico" />
      </Head>
      <main>
        <Header title="Sinfonia D'autunno" />
        <p className="description">
          Work IN Progress
        </p>
      </main>

      <Footer />
    </div>
  )
}
