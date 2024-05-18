import "./link.component.scss";
import { ChevronRight } from "lucide-react";

export default function Link({ description, url, className }) {
  return (
    <a className={`link ${className}`} href={url} target="_blank">
      {description.toUpperCase()}

      <ChevronRight strokeWidth={3} className="link-arrow" />
    </a>
  );
}
