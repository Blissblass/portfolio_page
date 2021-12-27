import '../../Assets/Stylesheets/works.css';
import works from './workData';
import WorkItem from '../WorkItem/WorkItem';

const Works = () => {

  return(
    <div className="works-container">
      {works.map(work => <WorkItem name={work.name} />)}
    </div>
  )
};

export default Works;