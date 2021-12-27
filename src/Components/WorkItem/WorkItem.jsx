import '../../Assets/Stylesheets/work.css';

const WorkItem = (props) => {

  return(
    <div className="work-item">
      <a href={props.demoLink} target="_blank" rel="noreferrer" className="work-thumbnail">
        <img src="https://camo.githubusercontent.com/3aec73d29817ee8f9a825310bfb4067ff88014c2a48b7d2e00d92768275d8608/68747470733a2f2f692e696d6775722e636f6d2f7a496a675776772e706e67" 
        className="work-thumbnail" alt="Thumbnail" />
      </a>
      <div className="work-description">
        <h3>{props.name}</h3>
        {props.link}
      </div>
      <div className="work-buttons">
        <input type="button" className="work-button-1" value="Demo" />
        <input type="button" className="work-button-2" value="Code" />
      </div>
    </div>
  )
}

export default WorkItem;