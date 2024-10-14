import Image from "next/image";
import localFont from "next/font/local";
import Head from "next/head";
import SearchBox from "@/components/SearchBox";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Search(){
  return (
    <>
    <Head>
      <title>WeatherWise</title>
    </Head>
    <main className="mt-5 mx-5">
      <h1 className="text-xl font-medium mb-4">WeatherWise</h1>
      <form>
        <h2 className="text-lg mb-4">Search for local weather</h2>
        <div className="mb-4">
        <SearchBox />
        </div>
      </form>
    </main>
    </>
  )
}
