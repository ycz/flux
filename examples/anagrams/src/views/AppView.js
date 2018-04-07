import React from 'react';

function AppView(props) {
    return <div id="app-view" className="container">
        <Header {...props} />
        <Main {...props} />
    </div>
}

function Header(props) {
    return (
        <header id="header">
            <h1>Anagrams</h1>
        </header>
    );
}

function Main(props) {
    // if (props.todos.size === 0) {
    //     return null;
    // }

    return (
        <div className="main">
            <div className="row">
                <div className="col-sm-9">
                    <LetterPool {...props} />
                    <WordInput {...props} />
                </div>
                <div className="col-sm-3">
                    <WordStash {...props} />
                </div>
            </div>
        </div>
    );
}

function LetterPool(props) {
    return (
        <div id="letter-pool">
            {props.letterPool.map((letter, index) => LetterTile(letter, index))}
        </div>
    );
}

function LetterTile(letter, index) {
    return (
        <span key={index} className="letter-tile">{letter}</span>
    )
}

class WordInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.submit = this.submit.bind(this);
    }

    submit(event) {
        if (this.state.value) {
            this.props.onSubmitWord(this.state.value);
            this.setState({ value: '' });
        } else {
            this.props.onPullTile();
        }
        event.preventDefault();
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    render() {
        return (
            <form id="word-input-form" onSubmit={this.submit}>
                <div className="form-row">
                    <input type="text" className="form-control col-md-10" 
                    value={this.state.value} onChange={this.handleChange}/>
                    <button type="submit" className="btn col-md-2">Submit</button>
                </div>
            </form>
        );
    }
}

function WordStash(props) {
    let wordStash = props.wordStash;
    return <div id="word-stash">
        <h4 id="word-stash-title">Stash</h4>
        {wordStash.reverse().map((word, index) => StashEntry(word, index))}
    </div>
}

function StashEntry(word, index) {
    return <div className="word-stash-entry" key={index}>{word}</div>
}

export default AppView;