import { useEffect, useRef, useState } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { gsap } from "gsap";
import "./App.scss";
import { AiFillCheckCircle } from "react-icons/ai";
import { RxHamburgerMenu } from "react-icons/rx";
import { CgClose } from "react-icons/cg";

function App() {
  const imgRef = useRef();
  const mapRef = useRef();
  const navRef = useRef();
  const formRef = useRef();
  const rootRef = useRef();
  const linksRef = useRef();
  const testsRef = useRef();
  const titleRef = useRef();
  const routesRef = useRef();
  const topicsRef = useRef();
  const contactRef = useRef();
  const heroImgRef = useRef();
  const sidebarRef = useRef();
  const sidebarAnim = useRef();
  const subTitleRef = useRef();

  const [sidebar, setSidebar] = useState(false);

  const handleSidebar = () => {
    setSidebar((prevValue) => !prevValue);
  };

  useEffect(() => {
    sidebarAnim.current = gsap.timeline({ paused: true });
    sidebarAnim.current
      .set(sidebarRef.current, { opacity: 1 })
      .to(routesRef.current.children, {
        y: 0,
        delay: 0.5,
        opacity: 1,
        stagger: 0.065,
        ease: "expo",
        duration: 0.8,
      });
  }, []);

  useEffect(() => {
    sidebar ? sidebarAnim.current.play() : sidebarAnim.current.reverse();

    return () => {};
  }, [sidebar]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const links = linksRef.current.children;
    const nav = navRef.current;

    const tl = gsap.timeline({});
    const tl2 = gsap.timeline({
      scrollTrigger: { trigger: topicsRef.current, start: "top 70%" },
    });
    const tl3 = gsap.timeline({
      scrollTrigger: { trigger: testsRef.current, start: "top 70%" },
    });
    const tl4 = gsap.timeline({
      scrollTrigger: {
        trigger: contactRef.current,
        start: "top 70%",
      },
    });

    tl.to(nav, { opacity: 1, y: 0, ease: "expo", duration: 1, delay: 0.2 })
      .to(subTitleRef.current, { opacity: 1, y: 0, delay: -0.25 })
      .to(titleRef.current, { opacity: 1, y: 0, delay: -0.3 })
      .to(links, { opacity: 1, y: 0, stagger: 0.2, delay: -0.3 })
      .to(heroImgRef.current, { opacity: 1, y: 0, delay: -0.3 });
    tl2
      .to(topicsRef.current.children, { opacity: 1, y: 0, stagger: 0.2 })
      .to(imgRef.current, { opacity: 1, y: 0 });
    tl3.to(testsRef.current.children, { opacity: 1, y: 1, stagger: 0.2 });
    tl4
      .to(contactRef.current.children, { opacity: 1, y: 1 })
      .to(formRef.current.children, { opacity: 1, y: 1, stagger: 0.05 })
      .to(mapRef.current, { opacity: 1, y: 1 });

    return () => {
      tl.kill();
      tl2.kill();
      tl3.kill();
      tl4.kill();
    };
  }, []);

  return (
    <main className="root" ref={rootRef}>
      <nav className="navbar" ref={navRef}>
        <div className="wrapper">
          <div className="logo">
            <h2 className="title">
              Task<span>App</span>
            </h2>
          </div>

          <div className="left">
            <h2 className="route">Home</h2>
            <h2 className="route">Features</h2>
            <h2 className="route">Pricing</h2>
          </div>

          <div className="right">
            <h2 className="link">Contact</h2>
            <button className="goPremium">Go Premium</button>
          </div>

          <div className="mobileMenu">
            {sidebar ? (
              <CgClose className="icon" onClick={handleSidebar} />
            ) : (
              <RxHamburgerMenu className="icon" onClick={handleSidebar} />
            )}
          </div>
        </div>

        <nav
          ref={sidebarRef}
          className={sidebar ? "sidebar openSidebar" : "sidebar"}
        >
          <div className="sidebarRoutes" ref={routesRef}>
            <h2 className="sidebarRoute">Home</h2>
            <h2 className="sidebarRoute">Features</h2>
            <h2 className="sidebarRoute">Pricing</h2>
            <h2 className="sidebarRoute">Contact</h2>
            <button className="sidebarGoPremium">Go Premium</button>
          </div>
        </nav>
      </nav>

      <section className="hero">
        <div className="wrapper">
          <div className="text">
            <p className="subTitle" ref={subTitleRef}>
              It's Nitty &amp; Gritty!
            </p>
            <h1 className="title" ref={titleRef}>
              A Task App That Doesn't Stink
            </h1>

            <div className="links" ref={linksRef}>
              <a href="#" className="heroButton">
                Try for free
              </a>
              <a href="#" className="watchVideo">
                <img className="cameraIcon" src="watch.svg" alt="video" />
                Watch a video
              </a>
            </div>
          </div>

          <img
            src="illustration.svg"
            className="heroImg"
            ref={heroImgRef}
            alt="Illustration"
          />
        </div>
      </section>

      <section className="features">
        <div className="container">
          <ul className="topics" ref={topicsRef}>
            <li className="topic">
              <AiFillCheckCircle className="checkIcon" />
              Unlimited Tasks
            </li>
            <li className="topic">
              <AiFillCheckCircle className="checkIcon" /> SMS Task Reminders
            </li>
            <li className="topic">
              <AiFillCheckCircle className="checkIcon" /> Props Upon Task
              Completions
            </li>
            <li className="topic">
              <AiFillCheckCircle className="checkIcon" /> Social Media
              Announcements
            </li>
            <li className="topic">
              <AiFillCheckCircle className="checkIcon" /> Real Time
              Collaboration
            </li>
            <li className="topic">
              <AiFillCheckCircle className="checkIcon" /> Folders and Files Easy
              to Handle
            </li>
            <li className="topic">
              <AiFillCheckCircle className="checkIcon" /> New Offline Mode
            </li>
            <li className="topic">
              <AiFillCheckCircle className="checkIcon" /> Other Awesome Features
            </li>
          </ul>
        </div>
        <img ref={imgRef} className="featureImg" src="phone.jpg" alt="Phone" />
      </section>

      <section className="testimonials">
        <div className="wrapper" ref={testsRef}>
          <div className="test">
            <img className="personImg" src="person1.jpeg" alt="Person" />
            <blockquote className="comment">
              " WOW! Just used TaskApp for the first time, and I am Impressed!
              Super smooth sign in and 'tent creation', easy selection of
              assets, and confirmations while knowing what your trading partner
              is up to."
            </blockquote>
            <cite className="name">- Justin Stones</cite>
          </div>
          <div className="test">
            <img className="personImg" src="person2.webp" alt="Person" />
            <blockquote className="comment">
              " TaskApp is an incredible app that our entire office uses! It can
              be used for note taking during an important meeting, collaboration
              or even just quick access to responses for our customers."
            </blockquote>
            <cite className="name">- Robert Walker</cite>
          </div>
          <div className="test">
            <img className="personImg" src="person3.jpeg" alt="Person" />
            <blockquote className="comment">
              " TaskApp is the best app to take simple notes in. Live tiles make
              it a far more pleasing visual experience, while also allowing a
              user to quickly see precisely what they've written down without
              opening each note."
            </blockquote>
            <cite className="name">- Alisha Kooth</cite>
          </div>
        </div>
      </section>

      <section className="contact">
        <div className="wrapper">
          <div className="left" ref={contactRef}>
            <h2>Contact</h2>

            <form className="form" ref={formRef}>
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" />

              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" />

              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" cols="30" rows="10" />

              <button type="submit" className="submitButton">
                Send Message
              </button>
            </form>
          </div>

          <div className="right">
            <iframe
              ref={mapRef}
              className="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26430.393553120906!2d-118.43209796322542!3d34.10028430183922!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bc35fbd217ef%3A0xcf1ef9352700d95c!2sBeverly%20Hills%2C%20CA%2090210!5e0!3m2!1sen!2sus!4v1611702818717!5m2!1sen!2sus"
              frameBorder="0"
            ></iframe>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
