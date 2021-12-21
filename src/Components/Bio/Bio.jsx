
const Bio = () => {

  return(
    <div className="bio-container">
      {[...Array(50)].map((x, i) => <p>Bio {i}! :D</p>)}
    </div>
  )
};

export default Bio;