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
      function sky(){ document.body.style.background = "skyblue"; }
      <main>
        <Header title="Welcome to my app!" />
        <p className="description">
          Work IN Progress
        </p>
      </main>

      <Footer />
    </div>
  )
}
