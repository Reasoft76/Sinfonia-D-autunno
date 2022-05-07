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
        <Header title="Il nuovo concerto scout: Sinfonia D'autunno" />
        <p className="description">
         Sinfonia D'autunno è un concerto realizzato dal reparto foligno 3 in cui reciteremo famose canzoni scout ed alcune canzoni da noi realizzate
        </p>
      </main>
      <button id="instagram">instagram</button>
      <button>facebook</button>
      <button>modulo di iscrizione</button>
      <script type="text/javascript">
    document.getElementById("instagram").onclick = instagram() {
        location.href = "https://www.instagram.com/_concerto_sinfoniadautunno_/";
    };
      </script>
      <Footer />
    </div>
  )
}
