
import { useSelector, useDispatch } from "react-redux";
import { changePhoto } from '../redux/photoSlice';

const GalleryComp = () => {
	const dispatch = useDispatch();
	const directoryObject = useSelector((state) => state.directory.object);
	let photoListJSX = [];

	function showPhoto(number) {
		dispatch(changePhoto(number));
	}

		for (let i = 1; i < directoryObject.numOfPhotos; i++) {
			photoListJSX.push(<li key={i} onClick={ () => showPhoto(i)} ><img src={ "./photos/" + directoryObject.name + "/" + i + ".jpg" } alt="" /></li>)
		}

	return (
		<section className="gallery-comp">
		 <ul>
			 {photoListJSX}
		 </ul>
		</section>
	);
}

export default GalleryComp;