import "../../Assets/Stylesheets/work.css";

const WorkItem = (props) => {
  return (
    <div className="work-item">
      <a
        href={props.demoLink}
        target="_blank"
        rel="noreferrer"
        className="work-thumbnail"
      >
        <img src={props.imgLink} className="work-thumbnail" alt="Thumbnail" />
      </a>
      <div className="work-description">
        <h3>{props.name}</h3>
        {props.description}
      </div>
      <div className="work-buttons">
        <a
          href={props.link}
          target="_blank"
          rel="noreferrer"
          className="work-button-2"
        >
          Code
        </a>
        <a
          href={props.demoLink}
          target="_blank"
          rel="noreferrer"
          className={`work-button-1${props.demoLink ? "" : " button-disabled"}`}
        >
          Demo
        </a>
      </div>
    </div>
  );
};

export default WorkItem;
