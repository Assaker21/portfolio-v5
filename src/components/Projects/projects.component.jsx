import { useState } from "react";
import ProjectInfo from "../ProjectInfo/project-info.component";
import "./projects.component.scss";

export default function Projects() {
  const [open, setOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState(null);

  return (
    <div className="projects">
      <ProjectInfo open={open} setOpen={setOpen} project={currentProject} />
      <div className="projects-container">
        <Project
          project={{
            image: "images/Hoophouse.jpg",
            name: "Hoop house",
            shortDescription: "Ecommerce website",
            description:
              "I designed and developed Hoop House, an ecommerce store specialized in selling basketball shoes. It required a server, an admin page and the store page, all interconnected seamlessly. It also required various payment methods: by card, by whish and cash on delivery.",
            links: [
              {
                description: "hoophouse.store",
                url: "https://hoophouse.store",
              },
            ],
            images: [
              "images/Hoophouse-image2.gif",
              "images/Hoophouse-image1.png",
            ],
          }}
          onClick={(project) => {
            setOpen(true);
            setCurrentProject(project);
          }}
        />
        <Project
          project={{
            image: "images/Journey.jpg",
            name: "JOURNEY",
            shortDescription:
              "SPACE TOURISM OFFICE - NASA SPACE APPS 2023 FINALISTS",
            description:
              "This website was made for the NASA SPACE APPS 2023. My team and I reached the finals. It features a 3d recreation of some planets in the solar system and outside of it with touristic sites highlighted. It also features a chat bot that responds as if its a touristic guide.",
            links: [
              {
                description: "Try it here",
                url: "https://journey-b5m9.onrender.com/",
              },
              {
                description: "Code",
                url: "https://github.com/the-refrigerator/Tourism-Office-Website",
              },
            ],
          }}
          onClick={(project) => {
            setOpen(true);
            setCurrentProject(project);
          }}
        />
        <Project
          project={{
            image: "images/kgrip.jpg",
            name: "kgrip",
            shortDescription: "Grip your keyboard",
            description:
              "This game was created for a game jam, thus in 24hours. The main concept was to grip your keyboard while playing it. It features falling blocks with random letters on them. You need to hold the keyboard button to grip the block. However, there will be more than one block to hold at the same time!",
            links: [
              {
                description: "Try it here",
                url: "https://assaker.itch.io/kgrip",
              },
            ],
          }}
          onClick={(project) => {
            setOpen(true);
            setCurrentProject(project);
          }}
        />
      </div>
      <div className="projects-container">
        <Project
          project={{
            image: "images/WAW.jpg",
            name: "WAW",
            shortDescription: "ONLINE MULTIPLAYER GAME",
            description:
              "Online multiplayer game featuring tournaments and subtournaments. The game also needed a server that managed transactions, connections, accounts and as an anti-cheat solution. This was my first large scale project. Available on IOS and Android",
            links: [
              { description: "App store", url: "https://appstore.com/url" },
              { description: "Play Store", url: "" },
            ],
          }}
          onClick={(project) => {
            setOpen(true);
            setCurrentProject(project);
          }}
        />
        <Project
          project={{
            image: "images/AuditWebApp.jpg",
            name: "AUDITING APP",
            shortDescription: "SYSTEM FOR AN AUDITING COMPANY",
            description:
              "Website created for an audit company. This website currently manages the workflow of the whole company. Featuring permissions, emails, accounts, audits, reports, and suggestions; along with many more features. The company manages the auditing of the most prestigious lebanese restaurants.",
          }}
          onClick={(project) => {
            setOpen(true);
            setCurrentProject(project);
          }}
        />
        <Project
          project={{
            image: "images/bisided.png",
            name: "bisided",
            shortDescription: "Top down combat",
            description:
              "This game was also made for a game jam. Therefore in 24hours. It features a 2d top down gunner that shoots blocks. The gunner also transforms regularly into a deadly close combat weapon. Adapt fast!",
            links: [
              {
                description: "Try it here",
                url: "https://assaker.itch.io/bisided",
              },
            ],
          }}
          onClick={(project) => {
            setOpen(true);
            setCurrentProject(project);
          }}
        />
      </div>
      <div className="projects-container">
        <Project
          project={{
            image: "images/Chas.jpg",
            name: "CHAS",
            shortDescription: "GAME DEVELOPER WEBSITE",
            description:
              "A fellow game developer wanted a website for people to contact him. Created the most seamless and lightweight website. It features a fun game to play in the home page, and a highly sophisticated form to send inquiries. It also features other pages such as faq.",
            links: [
              {
                description: "Chas website",
                url: "https://assaker21.github.io",
              },
            ],
          }}
          onClick={(project) => {
            setOpen(true);
            setCurrentProject(project);
          }}
        />
        <Project
          project={{
            image: "images/Snake2002.jpg",
            name: "SNAKE2002",
            shortDescription: "REMAKE OF SNAKE GAME",
            description:
              "One of my first browser games. Wanted to test the waters, ended up creating a simple game engine. Snake2002 is a recreation of good old snake but with abilities. ",
            links: [
              {
                description: "Play it here",
                url: "https://snake2002.onrender.com",
              },
            ],
          }}
          onClick={(project) => {
            setOpen(true);
            setCurrentProject(project);
          }}
        />
        <Project
          project={{
            image: "images/bomb and run.jpg",
            name: "Bomb & run",
            shortDescription: "Chess inspired bombing game",
            description:
              "One of my first games. Whenever you move, a bomb with a short fuse is placed at your previous location. Solve puzzles and escape breathtaking situations. Used to be available in the Play Store",
          }}
          onClick={(project) => {
            setOpen(true);
            setCurrentProject(project);
          }}
        />
      </div>
    </div>
  );
}

function Project({ project, onClick }) {
  return (
    <div
      className="projects-project"
      onClick={() => {
        onClick(project);
      }}
    >
      <img className="projects-project-image" src={project.image} />
      <h3 className="projects-project-name">{project.name.toUpperCase()}</h3>
      <span className="projects-project-short-description">
        {project.shortDescription.toUpperCase()}
      </span>
    </div>
  );
}
