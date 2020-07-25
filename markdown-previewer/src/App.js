import React from "react";
import marked from "marked";
import "./App.css";
class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			markdown: ""
		};
	}

	updateMarkdown = (markdown) => {
		this.setState({ markdown });
	};

	render() {
		const inputStyle = {
			width: "400px",
			height: "50vh",
			marginLeft: "auto",
			marginRight: "auto",
			padding: "10px"
		};

		var outputStyle = {
			width: "400px",
			height: "50vh",
			backgroundColor: "#DCDCDC",

			padding: "10px"
		};
		return (
			<div className="App">
				<header className="App-header">
					<h3>MarkDown Previewer</h3>
					<textarea
						style={inputStyle}
						value={this.state.markdown}
						onChange={(e) => {
							this.updateMarkdown(e.target.value);
						}}
					></textarea>

					<h3>Markdown output Previewer</h3>
					<div
						style={outputStyle}
						dangerouslySetInnerHTML={{ __html: marked(this.state.markdown) }}
					></div>
				</header>
			</div>
		);
	}
}
export default App;
