var React = require('react');

var WeatherMessage = (props) => {
    var {temp, location} = props;
    return (
        <div>
            <h3 className="text-center">It's now {temp}&#176;C in {location}.</h3>
        </div>
    )
}

module.exports = WeatherMessage;
