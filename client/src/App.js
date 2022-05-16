import Notification from "./components/Notification";
import Option from "./components/Option";
import VideoPlayer from "./components/VideoPlayer";

function App() {
  return (
    <div className="App app">
      <VideoPlayer></VideoPlayer>
      <Option>
        <Notification></Notification>
      </Option>
    </div>
  );
}

export default App;
