import { useDispatch } from 'react-redux';
import { changeDirectory } from '../redux/directorySlice';
import { Link } from "react-router-dom";

const DirectoryComp = () => {
	const dispatch = useDispatch();

	return (
		<nav className="directory-comp">
			<ul>
				<li>
					<Link to="/gallery">
						<button onClick={ () => dispatch(changeDirectory({ name: "agneta",	numOfPhotos: 33	})) }>AGNETA</button>
					</Link>
				</li>
				<li>
					<Link to="/gallery">
						<button onClick={ () => dispatch(changeDirectory({ name: "barbro", numOfPhotos: 9 })) }>BARBRO</button>
					</Link>
				</li>
				<li>
					<Link to="/gallery">
						<button onClick={ () => dispatch(changeDirectory({ name: "agneta",	numOfPhotos: 33	})) }>AGNETA</button>
					</Link>
				</li>
				<li>
					<Link to="/gallery">
						<button onClick={ () => dispatch(changeDirectory({ name: "barbro", numOfPhotos: 9 })) }>BARBRO</button>
					</Link>
				</li>
				<li>
					<Link to="/gallery">
						<button onClick={ () => dispatch(changeDirectory({ name: "agneta",	numOfPhotos: 33	})) }>AGNETA</button>
					</Link>
				</li>
				<li>
					<Link to="/gallery">
						<button onClick={ () => dispatch(changeDirectory({ name: "barbro", numOfPhotos: 9 })) }>BARBRO</button>
					</Link>
				</li>
				<li>
					<Link to="/gallery">
						<button onClick={ () => dispatch(changeDirectory({ name: "agneta",	numOfPhotos: 33	})) }>AGNETA</button>
					</Link>
				</li>
				<li>
					<Link to="/gallery">
						<button onClick={ () => dispatch(changeDirectory({ name: "barbro", numOfPhotos: 9 })) }>BARBRO</button>
					</Link>
				</li>
				<li>
					<Link to="/gallery">
						<button onClick={ () => dispatch(changeDirectory({ name: "agneta",	numOfPhotos: 33	})) }>AGNETA</button>
					</Link>
				</li>
				<li>
					<Link to="/gallery">
						<button onClick={ () => dispatch(changeDirectory({ name: "barbro", numOfPhotos: 9 })) }>BARBRO</button>
					</Link>
				</li>
			</ul>
		</nav>
	);
}

export default DirectoryComp;