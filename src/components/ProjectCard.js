import { FaGithub } from "react-icons/fa";
import { Col } from "react-bootstrap";

import { Link } from "react-router-dom";

export const ProjectCard = ({
  title,
  description,
  imgUrl,
  techStack,
  githubLink,
  detailsLink,
}) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx bg-dark text-white p-3 rounded">
        <img
          src={imgUrl}
          alt={title}
          className="img-fluid rounded"
          style={{ maxHeight: "160px", objectFit: "cover", width: "100%" }}
        />
        <div className="pt-3">
          <h5 className="fw-bold">{title}</h5>
          <p>{description}</p>
          {techStack && (
            <div className="d-flex flex-wrap gap-2 mb-2">
              {techStack.map((tech, idx) => (
                <span key={idx} className="badge bg-secondary">
                  {tech}
                </span>
              ))}
            </div>
          )}
          <div
            style={{
              position: "relative",
              zIndex: 1000,
              pointerEvents: "auto",
            }}
          >
            <a
              href={githubLink}
              className="btn btn-outline-light btn-sm"
              target="_blank"
              rel="noopener noreferrer"
              style={{ pointerEvents: "auto", zIndex: 1000 }}
            >
              <FaGithub /> GitHub
            </a>
            {"    "}

            {detailsLink && (
              <Link
                to={detailsLink}
                className="btn btn-outline-light btn-sm"
                style={{ marginLeft: "auto", zIndex: 500 }}
              >
                View Details
              </Link>
            )}
          </div>
        </div>
      </div>
    </Col>
  );
};
