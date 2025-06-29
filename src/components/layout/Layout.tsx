import Head from "next/head";
import Header from "../header/Header";
import Footer from "../footer/Footer";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Head>
                <title>PokeNext</title>
                <meta name="description" content="PokeNext is a Pokédex app built with Next.js" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />
            <main className="main-container">{children}</main>
            <Footer />
        </>
    )
}