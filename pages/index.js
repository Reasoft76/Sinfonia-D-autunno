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
       var myFunc = function(){
       document.body.style.background = "crimson"; 
       }
        <Header title="Welcome to my app!" />
        <p className="description">
          Work IN Progress
        </p>
      </main>

      <Footer />
    </div>
  )
}
