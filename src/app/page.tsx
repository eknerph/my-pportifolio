import Image from "next/image";

export default function Home() {
  return (
    <main className="styles.main">
        <Image
        src="/vercel.svg"
        alt="Vercel logo"
        className={StyleSheet.vercelLogo}
        width={100}
        height={24}
        priority
        />
    </main>      
  )
}
