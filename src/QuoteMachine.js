import React, { Component, Fragment} from 'react';

class QuoteMachine extends React.Component {
    constructor() {
        super();
        this.state = {
            quote: '',
            author: '',
            hasQuote: false
        };
        this.END_POINT = 'https://type.fit/api/quotes';
    }

    getRandomQuote = event => {
        fetch(this.END_POINT)
            .then(response => response.json())
            .then(data => {
                let randomNum = Math.floor(Math.random() * data.length);
                console.log(data[randomNum]);
                let randomQuote = data[randomNum];
                this.setState({
                    quote: randomQuote['text'],
                    author: randomQuote['author'],
                    hasQuote: true
                })

            })
    }

    render() {
        const { hasQuote } = this.state;
        return (
            <div id="wrapper">
                <div className="container">
                  <h1>Best Quotes</h1>
                    <div className="quote-text">
                        {hasQuote === true ? null : 'Check your Quote of the Day!'}
                        <i className="fa fa-quote-left"> </i>
                        {this.state.quote}
                  </div>
                    <div className="quote-author">{this.state.author}</div>
                    <div className="buttons">
                    <button onClick={this.getRandomQuote} className="button">New Quote</button>
                    <a href={`https://twitter.com/intent/tweet?text= ${this.state.quote} ${this.state.author}`} className="button" target="_blank" id='tweet-quote'>
                        Tweet<i className="fab fa-twitter twitter-icon" />
                        </a>
                    </div>
                    </div>
                   
                    
            </div>
            )
    }

}

export default QuoteMachine;