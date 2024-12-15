export default function Home() {
  return (
    <main>
      <div className="header">
        <Image
          src="/vercel.svg"
          alt="Vercel logo"
          width={100}
          height={24}
          priority
        />
        <div>
          <h1>Hi, I'm Ekner Alexandre</h1>
          <h2>Software Engineer</h2>
        </div>
      </div>
      <div className="expirence">
        <h3>Experience</h3>
        <p>texto</p>
      </div>
      <div className="experience-time">

      </div>
      <div className="infos">
        <h3>Languages</h3>
        <div className="Languages-info">
          <span>EN - Fluent</span>
          <span>PT-BR - Native Speaker</span>
        </div>
      </div>
    </main>      
  )
}
