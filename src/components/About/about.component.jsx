import Link from "../Link/link.component";
import "./about.component.scss";

export default function About() {
  return (
    <section className="about">
      <div className="about-item">
        <div className="about-title">ABOUT</div>
        <span className="about-description">
          Charbel designs systems. He thrives in complex, ambiguous problem
          spaces focused around websites, apps and embedded systems. He studied
          Electrical & Computer Engineering at the Lebanese University -
          Roumieh, an experience he holds fondly and will cherish for the rest
          of his life. If you have an interesting idea, please get in touch.
        </span>
      </div>

      <div className="about-item">
        <div className="about-title">PROJECTS</div>
        <span className="about-description">
          Charbel's career is marked by a diverse array of projects. From
          crafting captivating offline, online, and multiplayer games to
          developing websites adept at managing both internal operations and
          external interactions for companies. Additionally, he has contributed
          to the realm of robotics by engineering embedded systems that enhance
          control mechanisms.
        </span>
      </div>

      <div className="about-item">
        <div className="about-title">LINKS</div>
        <span className="about-description">
          <Link
            description={"Mail"}
            url={"mailto:charbelassakerplus@gmail.com"}
          />
          <Link description={"Github"} url={"https://github.com/assaker21"} />
          <Link description={"Itch.io"} url={"https://assaker.itch.io/"} />
        </span>
      </div>
    </section>
  );
}
