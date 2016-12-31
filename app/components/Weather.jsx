var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var OpenWeatherMap = require('OpenWeatherMap');
var ErrorModal = require('ErrorModal');

var Weather = React.createClass({
    getInitialState: function() {
        return {
            isLoading: false
        };
    },
    handleSearch: function(location) {
        var this_ = this;
        this.setState({
            // reset all value
            isLoading: true,
            errorMessage: undefined,
            location: undefined,
            temp: undefined
        });
        OpenWeatherMap.getTemp(location).then(function(temp) {
            this_.setState({
                location: location,
                temp: temp,
                isLoading: false,
            });
        }, function(e) {
            this_.setState({
                isLoading: false,
                errorMessage: e.message,
            });
        });
    },
    componentDidMount: function() {
        var location = this.props.location.query.location;
        if (location && location.length > 0) {
            this.handleSearch(location);

            // remove the hash on addressbar
            window.location.hash = '';
        }
    },
    // this will detect any changes on props
    componentWillReceiveProps: function(newProps) {
        var location = newProps.location.query.location;
        if (location && location.length > 0) {
            this.handleSearch(location);

            // remove the hash on addressbar
            window.location.hash = '';
        }
    },
    render: function() {
        var {isLoading, temp, location, errorMessage} = this.state;

        function renderMessage() {
            if (isLoading) {
                return <h3 className="text-center">Fetching weather...</h3>;
            } else if (temp && location) {
                return <WeatherMessage temp={temp} location={location}/>;
            }
        }

        function renderError() {
            if (typeof errorMessage === 'string') {
                return(
                    <ErrorModal message={errorMessage}/>
                )
            }
        }

        return(
            <div>
                <h1 className="text-center page-title">Get Weather</h1>
                <WeatherForm onSearch={this.handleSearch}/>
                {renderMessage()}
                {renderError()}
            </div>
        );
    }
});

module.exports = Weather;
