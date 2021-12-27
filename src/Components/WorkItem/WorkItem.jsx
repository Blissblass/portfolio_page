import '../../Assets/Stylesheets/work.css';

const WorkItem = (props) => {

  return(
    <div className="workItem">
      {props.name}
      {props.link}
    </div>
  )
}

export default WorkItem;