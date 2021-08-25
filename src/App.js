import DirectoryComp from "./components/DirectoryComp";
import GalleryComp from "./components/GalleryComp";
import PhotoComp from "./components/PhotoComp";
import React from "react";

function App() {

  return (
    <div className="App">
			<DirectoryComp />
			<PhotoComp />
			<GalleryComp />
    </div>
  );
}

export default App;
