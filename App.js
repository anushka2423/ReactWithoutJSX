/**
 * <div>
 *      <div id="child">
 *          <h1>I am inner child</h1>
 *      </div>
 * </div>
 */

// const heading = React.createElement(
//     "h1",
//     { id: "heading"}, 
//     "Hello World from React!"
// ); //{}-we can give attributes here to a class

// console.log(heading);

const div = React.createElement(
    "div",
    {id: "parent"},
    React.createElement("div", {id: "child"}, React.createElement("h1", {id: "heading"}, "I am inner child"))
)

console.log(div);

const root = ReactDOM.createRoot(document.getElementById("root"));
    
root.render(div);