import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changePhoto } from "../redux/photoSlice";
import { Link } from "react-router-dom";

const PhotoComp = () => {
	const dispatch = useDispatch();
	const directoryObject = useSelector((state) => state.directory.object);
	const photo = useSelector((state) => state.photo.source);

	const [photoNumber, setPhotoNumber] = useState();

	useEffect(() => {
		if (photo) {
			setPhotoNumber(photo);
		} else {
			setPhotoNumber(1);
		}
	}, [photo]);

	function navigate(value) {
		let tempNumber = photoNumber + value;

		if (tempNumber < 1) {
			tempNumber = directoryObject.numOfPhotos;
		}
		if (tempNumber > directoryObject.numOfPhotos) {
			tempNumber = 1;
		}
		setPhotoNumber(tempNumber);
	}

	return (
		<section className="photo-comp">
			<img src={ "./photos/" + directoryObject.name + "/" + photoNumber + ".jpg" } alt={ directoryObject.name } />
			<nav>
				<button className="nav-left" onClick={ () => navigate(-1) }></button>
			  <Link to="/gallery">
					<button className="to-gallery" onClick={ () => dispatch(changePhoto(1)) }>TILLBAKA</button>
				</Link>	
				<button className="nav-right" onClick={ () => navigate(1) }></button>
			</nav>
		</section>
	);
}

export default PhotoComp;