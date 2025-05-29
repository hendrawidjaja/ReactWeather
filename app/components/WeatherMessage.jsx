const React = require('react');

const WeatherMessage = (props) => {
  const {temp, location} = props;
  return (
    <h3 className="text-center">It's now {temp}&#176;C in {location}.</h3>
  )
}

module.exports = WeatherMessage;