import React from 'react';

function AppView(props) {
    return <div id="app-view" className="container">
        <Header {...props} />
        <Main {...props} />
        <Footer {...props} />
    </div>
}

function Header(props) {
    return (
        <header id="header">
            <h1>Title</h1>
        </header>
    );
}

function Main(props) {
    // if (props.todos.size === 0) {
    //     return null;
    // }

    return (
        <div className="main">
            <p>
                This is my sample React-Flux app.
            </p>
            <div className="row">
                <div className="col center">
                    Content goes here
                </div>
                <div className="col center">
                    Content goes here
                </div>
            </div>
        </div>
    );
}

function Footer(props) {
    // if (props.todos.size === 0) {
    //     return null;
    // }

    return (
        <footer id="footer">
            By Leon
        </footer>
    )
}

export default AppView;