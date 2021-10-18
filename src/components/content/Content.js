import React, { Component } from 'react';
import Carousel from  'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './Content.css';

const responsive = {
	superLargeDesktop: {
		breakpoint: { max: 4000, min: 1400 },
		items: 3
	},
	desktop: {
		breakpoint: { max: 1400, min: 800 },
		items: 3
	},
	tablet: {
		breakpoint: { max: 800, min: 464 },
		items: 4
	},
	mobile: {
		breakpoint: { max: 464, min: 0 },
		items: 1
	}
};

class Content extends Component {
	constructor(props) {
		super();
		this.state = {
			folder1: '',
			folder2: '',
			folder3: '',
			folder4: '',
			folder5: '',
			folder6: '',
			folder7: '',
			folder8: '',
			folder9: '',
			folder10: ''
		}
	}

	componentDidMount() {
		this.getImage('folder1');
		this.getImage('folder2');
		this.getImage('folder3');
		this.getImage('folder4');
		this.getImage('folder5');
		this.getImage('folder6');
		this.getImage('folder7');
		this.getImage('folder8'); 
		this.getImage('folder9');
		this.getImage('folder10');
	}

	getImage = (name) => {
		fetch('http://awwebenu:3001/' + name)
		.then(response => {
			console.log(response);
			if (response.ok) {
				return response.blob()
			} else return null
		})
		.then(image => {
			if (image !== null) {
				var outside = URL.createObjectURL(image);
				switch (name) {
					case 'folder1': this.setState({ folder1: outside }); break;
					case 'folder2': this.setState({ folder2: outside }); break; 
					case 'folder3': this.setState({ folder3: outside }); break;
					case 'folder4': this.setState({ folder4: outside }); break;
					case 'folder5': this.setState({ folder5: outside }); break;
					case 'folder6': this.setState({ folder6: outside }); break;
					case 'folder7': this.setState({ folder7: outside }); break;
					case 'folder8': this.setState({ folder8: outside }); break;
					case 'folder9': this.setState({ folder9: outside }); break;
					case 'folder10': this.setState({ folder10: outside }); break;
					default: break;
				}
			}
		})
		.catch(err => {
			console.log(err);
		})
	}

    render() {
		const {folder1, folder2, folder3, folder4, folder5, folder6, folder7, folder8, folder9, folder10} = this.state;
		return (
			<Carousel 
				swipeable
				draggable = {false}
				showDots
				responsive = { responsive }
				ssr
				infinite
				autoPlay
				autoPlaySpeed = {6000}
				keyBoardControl
				transitionDuration = {500}
				containerClass = "carousel-container"
				removeArrowOnDeviceType = {["tablet", "mobile"]}
				dotListClass = "custom-dot-list-style"
				itemClass = "carousel-item-padding-40-px"
				renderDotsOutside = {false}
			>
				{folder1 !== '' ?
					<div className="item">
						<img className="img-fluid" alt="a" src={folder1} onClick={() => this.props.pdfClickHandler('folder1-1')}></img>
					</div>
					: null
				}
				{folder2 !== '' ?
					<div className="item">
						<img className="img-fluid" alt="a" src={folder2} onClick={() => this.props.pdfClickHandler('folder2-1')}></img>
					</div>
					: null
				}
				{folder3 !== '' ?
					<div className="item">
						<img className="img-fluid" alt="a" src={folder3} onClick={() => this.props.pdfClickHandler('folder3-1')}></img>
					</div>
					: null
				}
				{folder4 !== '' ?
					<div className="item">
						<img className="img-fluid" alt="a" src={folder4} onClick={() => this.props.pdfClickHandler('folder4-1')}></img>
					</div>
					: null
				}
				{folder5 !== '' ?
					<div className="item">
						<img className="img-fluid" alt="a" src={folder5} onClick={() => this.props.pdfClickHandler('folder5-1')}></img>
					</div>
					: null
				}
				{folder6 !== '' ?
					<div className="item">
						<img className="img-fluid" alt="a" src={folder6} onClick={() => this.props.pdfClickHandler('folder6-1')}></img>
					</div>
					: null
				}
				{folder7 !== '' ?
					<div className="item">
						<img className="img-fluid" alt="a" src={folder7} onClick={() => this.props.pdfClickHandler('folder7-1')}></img>
					</div>
					: null
				}
				{folder8 !== '' ?
					<div className="item">
						<img className="img-fluid" alt="a" src={folder8} onClick={() => this.props.pdfClickHandler('folder8-1')}></img>
					</div>
					: null
				}
				{folder9 !== '' ?
					<div className="item">
						<img className="img-fluid" alt="a" src={folder9} onClick={() => this.props.pdfClickHandler('folder9-1')}></img>
					</div>
					: null
				}
				{folder10 !== '' ?
					<div className="item">
						<img className="img-fluid" alt="a" src={folder10} onClick={() => this.props.pdfClickHandler('folder10-1')}></img>
					</div>
					: null
				}
			</Carousel>		
		);
	}
}

export default Content;
