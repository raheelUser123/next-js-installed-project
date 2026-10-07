"use client";

import { useEffect, useState } from "react";
import { ArrowDownRight, ArrowUpRight, Menu, X } from "lucide-react";

const projects = [
  { no: "01", title: "Aster Finance", type: "Strategy · Product · Web", cls: "visual v1" },
  { no: "02", title: "Nova House", type: "Brand · Commerce · Creative", cls: "visual v2" },
  { no: "03", title: "Monument", type: "Identity · Digital · Motion", cls: "visual v3" }
];

const services = [
  ["01", "Strategy", "Positioning, digital strategy and clear systems that turn ambitious ideas into focused products."],
  ["02", "Design", "Brand identity, UI/UX and art direction built to make your business impossible to ignore."],
  ["03", "Development", "Fast, responsive websites and applications engineered for performance and growth."],
  ["04", "Growth", "SEO, analytics and conversion systems that keep improving after launch."]
];

export default function Home() {
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => e.isIntersecting && e.target.classList.add("in"));
    }, { threshold: .12 });
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <main>
      <header className="nav">
        <a className="brand" href="#top">UR<span>DT</span></a>
        <nav className="desktop">
          <a href="#work">Work</a><a href="#services">Services</a><a href="#about">About</a>
        </nav>
        <a className="talk desktop" href="#contact">Start a project <ArrowUpRight size={16}/></a>
        <button className="menuBtn" onClick={()=>setMenu(!menu)} aria-label="Menu">{menu ? <X/> : <Menu/>}</button>
      </header>

      {menu && <div className="mobileMenu">
        <a onClick={()=>setMenu(false)} href="#work">Work</a>
        <a onClick={()=>setMenu(false)} href="#services">Services</a>
        <a onClick={()=>setMenu(false)} href="#about">About</a>
        <a onClick={()=>setMenu(false)} href="#contact">Contact</a>
      </div>}

      <section id="top" className="hero">
        <div className="orb orb1"/><div className="orb orb2"/>
        <div className="eyebrow">Independent digital agency · 2026</div>
        <h1>We create<br/><em>digital impact.</em></h1>
        <div className="heroBottom">
          <p>We build distinct brands and high-performance digital experiences for companies ready to move forward.</p>
          <a href="#work" className="circle"><ArrowDownRight/></a>
        </div>
      </section>

      <div className="marquee"><div>STRATEGY ✦ DESIGN ✦ DEVELOPMENT ✦ DIGITAL GROWTH ✦ STRATEGY ✦ DESIGN ✦ DEVELOPMENT ✦ DIGITAL GROWTH ✦</div></div>

      <section id="work" className="work section">
        <div className="sectionHead reveal">
          <span>Selected work</span><h2>Built for attention.<br/>Designed for results.</h2>
        </div>
        <div className="projects">
          {projects.map((p,i)=><article className="project reveal" key={p.title}>
            <div className={p.cls}>
              <div className="shape s1"/><div className="shape s2"/>
              <span className="mockLogo">{i===0?"A/":i===1?"NOVA":"MNT."}</span>
            </div>
            <div className="projectMeta"><span>{p.no}</span><h3>{p.title}</h3><p>{p.type}</p><ArrowUpRight/></div>
          </article>)}
        </div>
      </section>

      <section id="services" className="services section">
        <div className="sectionHead reveal">
          <span>What we do</span><h2>One team.<br/>Full digital capability.</h2>
        </div>
        <div className="serviceList">
          {services.map(s=><div className="service reveal" key={s[0]}>
            <span>{s[0]}</span><h3>{s[1]}</h3><p>{s[2]}</p><ArrowUpRight/>
          </div>)}
        </div>
      </section>

      <section id="about" className="about section reveal">
        <div className="aboutLabel">About UR Digital Tech</div>
        <p className="statement">We combine <em>sharp strategy</em>, expressive design and robust technology to create digital work that feels as good as it performs.</p>
        <div className="stats">
          <div><b>7+</b><span>Years building digital</span></div>
          <div><b>80+</b><span>Projects delivered</span></div>
          <div><b>12</b><span>Markets reached</span></div>
        </div>
      </section>

      <section id="contact" className="contact">
        <div className="noise"/>
        <span className="reveal">Have something in mind?</span>
        <h2 className="reveal">Let’s make<br/><em>it happen.</em></h2>
        <a className="contactBtn reveal" href="mailto:hello@urdigitaltech.com">hello@urdigitaltech.com <ArrowUpRight/></a>
      </section>

      <footer>
        <a className="brand" href="#top">UR<span>DT</span></a>
        <p>© 2026 UR Digital Tech. All rights reserved.</p>
        <div><a href="#">LinkedIn</a><a href="#">Instagram</a></div>
      </footer>
    </main>
  );
}