import React from "react";
import ReactDOM from "react-dom";
import "../sass/main.scss";

const App = () => {
    return (
        <div className="App">
            <h1>Hello there</h1>
        </div>
    )
};

ReactDOM.render(<App />, document.querySelector("#root"));