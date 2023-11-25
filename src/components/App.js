import video from "../data/video.js";
import Video from "./Video.js"
import Details from "./Details.js"
import Comments from "./Comments.js"

function App() {
  console.log("Here's your data:", video);
  console.log(video.comments);

  return (
    <div className="App">
      <Video
        link={video.embedUrl}
        title={video.title}
      /> 
      <Details
        views={video.views}
        createdAt={video.createdAt}
        upvotes={video.upvotes}
        downvotes={video.downvotes}
      />
      <Comments
        comments={video.comments}
      />
    </div>
  )
}

export default App;
