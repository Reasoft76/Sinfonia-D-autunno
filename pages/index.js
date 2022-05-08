import Head from 'next/head'
import Header from '@components/Header'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Sinfonia D'autunno!</title>
        <h1>Sinfonia D'autunno!</h1>
        <link rel="icon" href="/notfavicon.ico" />
        <p>
          Cari esploratori e guide, siete tutti invitati alla nostra impresa di reparto: SINFONIA
          D’AUTUNNO, la più grande sfida musicale fra le band di tutti i reparti! l’evento si svolgerà
          domenica 11 giugno alla base scout "Il Giacinto"
          a Sterpete, Foligno.
          per poter partecipare dovete compilare il modulo di iscrizione (che trovate in basso), avete tempo fino al 17 maggio, alle ore 20;00.
          vi attendiamo numerosi in uniforme per far conoscere il proprio reparto e il vostro amore per lo scoutismo
          BUONA CACCIA
        </p>
        <a href="https://www.instagram.com/_concerto_sinfoniadautunno_/"><button>Instagram</button></a>
        <a href="https://www.facebook.com/profile.php?id=100080924825776"><button>Facebook</button></a>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSelalrEpc82UmPNQ6t_hPbXFHao0hHF9UoGniZ3hdJBVO36dA/viewform"><button>Modulo d' iscrizione</button></a>
       </Head>
    </div>
  )
}
