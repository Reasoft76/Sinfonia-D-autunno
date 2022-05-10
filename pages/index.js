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
          per poter partecipare dovete compilare il modulo di iscrizione (che trovate in basso), avete tempo fino al 21 maggio, alle ore 20;00.
          vi attendiamo numerosi in uniforme per far conoscere il proprio reparto e il vostro amore per lo scoutismo
          BUONA CACCIA
        </p>
        <a href="https://www.instagram.com/_concerto_sinfoniadautunno_/"><button>Instagram</button></a>
        <a href="https://www.facebook.com/profile.php?id=100080924825776"><button>Facebook</button></a>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSelalrEpc82UmPNQ6t_hPbXFHao0hHF9UoGniZ3hdJBVO36dA/viewform"><button>Modulo d' iscrizione</button></a>
        <h2>Regolamento</h2>
        <p>1 Numero massimo band a reparto 3</p>
        <p>2 Numero massimo componenti band 5</p>
        <p>3 Numero massimo voci 5</p>
        <p>4 Numero massimo di persone sul palco 10</p>
        <p>5 Numero massimo persone estranee al reparto 2 ( La metà del gruppo può essere del clan, in caso di disparità la maggioranza deve essere del reparto)</p>
        <p>6 Si potranno portare solo canzoni scout, inedite ( senza parolacce) oppure già esistenti riguardanti lo scautismo</p>
        <p>7 Il prezzo del biglietto sarà di 5 euro, se si fa parte di una band il prezzo del biglietto e di 2,50</p>
        <p>8 L’iscrizione dovrà essere inviata entro il 21 maggio con tutte le informazioni del modulo ( tutte le domande che trovate nel modulo sono obbligatorie)</p>
        <p>9 Il giorno del concerto ogni persona avrà un fogliettino dove scriverà il nome della sua band preferita che poi sarà messo in un grande scatolone per poi eleggere il vincitore; Ogni persona potrà votare solo una volta.</p>
        <p>10 Per partecipare al concerto è obbligatoria l’uniforme ( solo i componenti della band)</p>
        </p>
       </Head>
    </div>
  )
}
