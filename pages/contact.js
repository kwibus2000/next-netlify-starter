import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Contact() {
  return (
    <div className='container'>
      <Head>
        <title>Next.js Starter--- WOW!</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <Header title='Wow you made it!' />
        <p className='description'>Contact me!</p>
      </main>

      <Footer />
    </div>
  )
}
