import { useDispatch } from 'react-redux';
import { changeDirectory } from '../redux/directorySlice';


const DirectoryComp = () => {
	const dispatch = useDispatch();

	return (
		<section className="directory-comp">
			<ul>
				<li>
					<button onClick={ () => dispatch(changeDirectory({ name: "agneta",	numOfPhotos: 33	})) }>AGNETA</button>
				</li>
				<li>
					<button onClick={ () => dispatch(changeDirectory({ name: "barbro", numOfPhotos: 9 })) }>BARBRO</button>
				</li>
			</ul>
		</section>
	);
}

export default DirectoryComp;