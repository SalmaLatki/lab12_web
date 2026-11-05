const projects = [
  {
    title: 'Personal Portfolio',
    text: 'Responsive portfolio built with HTML, CSS and JavaScript.',
    img: '/project1.svg',
    alt: 'Illustration of a portfolio website layout',
  },
  {
    title: 'To-Do App',
    text: 'Add, complete and delete tasks with DOM manipulation.',
    img: '/project2.svg',
    alt: 'Illustration of a checklist to-do app',
  },
  {
    title: 'Weather Dashboard',
    text: 'Fetches live weather data from a public API.',
    img: '/project3.svg',
    alt: 'Illustration of a weather dashboard with a sun and cloud',
  },
]

const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Git & GitHub']

export default function App() {
  return (
    <>
      <header className="site-header">
        <a href="#home" className="logo">Salma</a>
        <p>Success fully deployed</p>
        <nav aria-label="Main navigation">
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <section id="home" className="hero">
          <img src="/avatar.svg" alt="Cartoon avatar of the site owner" className="avatar" />
          <h1>Hi, I'm Salma</h1>
          <p>Aspiring web developer building clean, responsive websites.</p>
          <a className="btn" href="#projects">See my work</a>
        </section>

        <section id="about">
          <h2>About &amp; Skills</h2>
          <p>
            I'm learning full-stack web development. I enjoy turning ideas into
            simple, accessible websites and I'm currently learning React.
          </p>
          <ul className="skills">
            {skills.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </section>

        <section id="projects">
          <h2>Projects</h2>
          <div className="grid">
            {projects.map((p) => (
              <article className="card" key={p.title}>
                <img src={p.img} alt={p.alt} />
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="contact">
          <h2>Contact</h2>
          <p>Want to work together? Reach out:</p>
          <p>
            <a href="mailto:you@example.com">you@example.com</a> ·{' '}
            <a href="https://github.com/SalmaLatki/lab12_web" target="_blank" rel="noreferrer">GitHub</a>
          </p>
          <p>Success fully deployed</p>
        </section>
        
      </main>

      <footer className="site-footer">
        <p>© {new Date().getFullYear()} salma. Deployed with Vercel/Netlify.</p>
      </footer>
    </>
  )
}
