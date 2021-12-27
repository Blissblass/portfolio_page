import '../../Assets/Stylesheets/works.css';
import works from './workData';
import WorkItem from '../WorkItem/WorkItem';

const Works = () => {

  return(
    <div className="works-container">
      {works.map(work => <WorkItem name={work.name} link={work.link} demoLink={work.demoLink} />)}
    </div>
  )
};

export default Works;