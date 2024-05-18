import { useEffect } from "react";
import Link from "../../components/Link/link.component";
import "./project-info.component.scss";

export default function ProjectInfo({ open, setOpen, project }) {
  useEffect(() => {
    if (open) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [open]);

  return (
    <div
      className={`project-info-container${open ? "" : " hidden"}`}
      onClick={(e) => {
        e.stopPropagation();
        setOpen(false);
      }}
    >
      <div className="project-info">
        <div className="project-info-content">
          <img className="project-info-image" src={project?.image} />
          <h2 className="project-info-title">{project?.name}</h2>
          <span className="project-info-description">
            {project?.description}
          </span>
          {project?.links?.length > 0 && (
            <h2 className="project-info-title">Links</h2>
          )}
          {project?.links?.map((link) => (
            <Link className="project-info-link" {...link}></Link>
          ))}
          {project?.images?.map((img) => (
            <img className="project-info-image" src={img} />
          ))}
        </div>
      </div>
    </div>
  );
}
