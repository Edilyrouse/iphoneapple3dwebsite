import { BrowserRouter as Router } from "react-router-dom";

import Nav from "./components/Nav";
import Jumbotron from "./components/Jumbotron";
import SoundSection from "./components/SoundSection";
import DisplaySection from "./components/DisplaySection";
import WebgiViewer from "./components/WebgiViewer";
import Loader from "./components/Loader";
import { useRef } from "react";


function App() {
  const webgitViewerRef = useRef();
  const contentRef = useRef();

  const handlePreview = () => {
    webgitViewerRef.current.triggerPreview();
  }


  return (
    <Router>
      <div className="App">
        <Loader />
        <div
          ref={contentRef}
          id="content"
        >
        <Nav />
        <Jumbotron />
        <SoundSection />
        <DisplaySection  triggerPreview={handlePreview}/>
        </div>
        <WebgiViewer contentRef={contentRef} ref={webgitViewerRef}/>
      </div>
    </Router>
  );
}

export default App;
