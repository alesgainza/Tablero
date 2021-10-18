import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Pdf from './components/content/Pdf';
import Content from './components/content/Content';
import Comunicates from './components/comunicates/Comunicates';
import Footer from './components/footer/Footer';

class App extends Component {
	constructor() {
		super();
		this.state = {
			comunicados1: '',
			comunicados2: '',
			comunicados3: '',
			comunicados4: '',
			comunicados5: '',
			footerText: '',
			isPdfShown: false,
			url: ''
		}
	}

	componentDidMount() {
		Promise.all([
			fetch('http://awwebenu:3001/Comunicados1'),
			fetch('http://awwebenu:3001/Comunicados2'),
			fetch('http://awwebenu:3001/Comunicados3'),
			fetch('http://awwebenu:3001/Comunicados4'),])
			.then(([res1, res2, res3, res4]) => Promise.all([res1.text(), res2.text(), res3.text(), res4.text()]))
			.then(([result1, result2, result3, result4]) => {
				this.setState({
					comunicados1: result1,
					comunicados2: result2,
					comunicados3: result3,
					comunicados4: result4
				})
			});
		
		fetch('http://awwebenu:3001/Footer')
		.then(res => res.text())
		.then(result => {
			this.setState({
				footerText: result
			})
		});
		setInterval(this.refreshPage, 1800000);
	}

	refreshPage = () => {
		window.location.reload();
	}

	viewHandler = async (fileName) => {
		fetch('http://awwebenu:3001/' + fileName)
		.then(res => res.blob())
		.then(response => {
			console.log(response);
			const file = new Blob([response], {
				type: "application/pdf"
			});
			this.setState({
				url: URL.createObjectURL(file)
			});
		})
		.catch(error => {
			console.log(error);
		})
	}

	pdfClickHandler = (fileName) => {
		const isVisible = this.state.isPdfShown;
		this.setState({
			isPdfShown: !isVisible
		});
		this.viewHandler(fileName);
	}

	render() {
		const {comunicados1, comunicados2, comunicados3, comunicados4, footerText, isPdfShown, url} = this.state;
		return (
		<div className="App">
			<Navbar />
			{ isPdfShown === false
				? <div>
					<Content pdfClickHandler={this.pdfClickHandler} images />
					<Comunicates text1={comunicados1} text2={comunicados2} text3={comunicados3} text4={comunicados4} pdfClickHandler={this.pdfClickHandler} />
					<Footer text={footerText} />
				  </div>
				: <Pdf url={url} pdfClickHandler={this.pdfClickHandler}></Pdf>
			}
		</div>
		);
	}
}

export default App;
