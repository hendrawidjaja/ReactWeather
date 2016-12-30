var React = require('react');

// var WeatherMessage = React.createClass({
//     render: function() {
//         var {location, temp} = this.props;
//
//         return(
//             <div>
//                 <h3>It's now {temp}&#176;C in {location}.</h3>
//             </div>
//         );
//     }
// });

var WeatherMessage = (props) => {
    var {temp, location} = props;
    return (
        <div>
            <h3>It's now {temp}&#176;C in {location}.</h3>
        </div>
    )
}

module.exports = WeatherMessage;
