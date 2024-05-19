import { Mail } from "lucide-react";
import "./navbar.component.scss";

export default function Navbar() {
  return (
    <>
      <div style={{ height: "85px" }} />
      <div className="navbar">
        <div className="navbar-divs">
          <h1 className="navbar-item">Charbel Assaker</h1>
          <h1 className="navbar-item smaller">Software Engineer</h1>
        </div>
        <div className="navbar-item">
          <a href="mailto:charbelassakerplus@gmail.com">
            <Mail strokeWidth={1.4} className="navbar-item-button" />
          </a>
        </div>
      </div>
    </>
  );
}
