var React = require('react');
var ReactDOM = require('react-dom');


//Person is the React component
var Person = function() {
    //define some variables that our app needs
    var name = 'Derek Zoolander';
    var imageUrl = 'http://uifaces.com/assets/static/images/zoolander.jpg';
    var job = 'Male model';
    //return the html to be displayed
    return (
        <div className="person">
        /*curly braces are used to tell React to sub in some JavaScript
        here name grabs the name var and inserts it*/
            <div className="person-name">{name}</div>
            /** className for CSS classes */
            <img className="person-img" src={imageUrl} />
            <div className="person-job">
                {job}
            </div>
        </div>
    );
};

document.addEventListener('DOMContentLoaded', function() {
    /** first the render is called.  The first argument you pass in the root component 
     * "Person" that you want to render.
     * 
     * The second argument is where you want it to render.  In this case it is the html
     * element with 'app' as the class.
     */
    ReactDOM.render(<Person />, document.getElementById('app'));
});