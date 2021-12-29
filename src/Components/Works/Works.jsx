import '../../Assets/Stylesheets/works.css';
import works from './workData';
import WorkItem from '../WorkItem/WorkItem';

const Works = () => {

  return(
    <div>
      <div className="works-container">
        <h1 className="works-header">My works</h1> 
        <div className="works">
          {works.map(work => <WorkItem name={work.name} link={work.link} demoLink={work.demoLink} 
            description={work.description} imgLink={work.imgLink} />)}
        </div>
      </div>
    </div>
  )
};

export default Works;