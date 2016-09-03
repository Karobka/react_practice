var React = require('react');
var ReactDOM = require('react-dom');


//Person is the React component
var Person = React.createClass({
    /** set the initial state of the highlight to false for each person created */
    getInitialState: function() {
        return {
            highlight: false
        };
    },
    /** on clicking set the state for the clicked component */
    onClick: function() {
        this.setState({
            highlight: !this.state.highlight
        });
    },
    render: function() {
        var classes = 'person ' + (this.state.highlight ? 'highlight' : '');
        return (
            /** eventlisteners must be in the render method like this onClick listener */
            <div className={classes} onClick={this.onClick}>
                <div className="person-name">{this.props.name}</div>
                <img className="person-img" src={this.props.imageUrl} />
                <div className="person-job">
                    {this.props.job}
                </div>
            </div>
        );
    }
});

var PersonList = function() {
    return (
        <div className="person-list">
            <Person name="Derek Zoolander"
                    imageUrl="http://uifaces.com/assets/static/images/zoolander.jpg"
                    job="Male model" />
            <Person name="Donald Knuth"
                    imageUrl="http://www-cs-faculty.stanford.edu/~uno/don.gif"
                    job="Clever chap" />
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
    ReactDOM.render(<PersonList />, document.getElementById('app'));
});