import DirectoryComp from "./components/DirectoryComp";
import GalleryComp from "./components/GalleryComp";
import PhotoComp from "./components/PhotoComp";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {

  return (
		<Router>
    <div className="App">
			<h1>Sjömans Fotobok</h1>
			<DirectoryComp />
			<Switch>
				<Route path="/gallery">
					<GalleryComp />
				</Route>
				<Route path="/photo">
					<PhotoComp />
				</Route>
			</Switch>
			<footer></footer>
    </div>
		</Router>
  );
}

export default App;
