import React, { Component } from "react";

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			quotes: [],
			text: "",
			author: ""
		};
	}
	handleClick = () => {
		this.getRandomQuote();
	};

	componentDidMount() {
		fetch(
			"https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json",
			{
				headers: {
					Accept: "application/json"
				}
			}
		)
			.then((response) => response.json())
			.then((responseData) => {
				this.setState({
					quotes: responseData.quotes,
					isLoaded: true,
					author: responseData.quotes[0].author,
					text: responseData.quotes[0].quote
				});
			})
			.catch((err) => console.log("ERROR", err));
	}

	getRandomQuote = () => {
		const { quotes } = this.state;
		let randomNumber = Math.floor(Math.random() * this.state.quotes.length + 1);
		console.log(this.state.quotes[randomNumber].quote);
		this.setState({
			text: quotes[randomNumber].quote,
			author: quotes[randomNumber].author
		});
	};
	shareOnTwitter = () => {
		const url = "twitter.com";
		let text = `${this.state.text} - ${this.state.author}`;

		window.open(
			"http://twitter.com/share?url=" +
				encodeURIComponent(url) +
				"&text=" +
				encodeURIComponent(text),
			"",
			"left=0,top=0,width=550,height=450,personalbar=0,toolbar=0,scrollbars=0,resizable=0"
		);
	};
	render() {
		return (
			<div id="quoteBox">
				<h1>Random Quote Machine</h1>
				<p id="text">{this.state.text}</p>-
				<span id="author">{this.state.author}</span>
				<br />
				<input
					id="new-quote"
					type="button"
					value="click for new quote"
					onClick={this.handleClick}
				/>
				<a
					href="www.twitter.com"
					onClick={this.shareOnTwitter}
					style={{
						backgroundColor: " #1da1f2",
						borderRadius: "5px",
						color: "white",
						padding: ".5em",
						textDecoration: "none"
					}}
				>
					Tweet
				</a>
			</div>
		);
	}
}

export default App;
