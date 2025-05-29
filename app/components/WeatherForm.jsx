const React = require('react');

const WeatherForm = React.createClass({
  onFormSubmit: function(e) {
    e.preventDefault();
    var location = this.refs.location.value;
    if (location.length > 0) {
      this.refs.location.value = '';
      this.props.onSearch(location);
    }
  },

  render: function() {
    return(
      <form onSubmit={this.onFormSubmit}>
        <input type="search" placeholder="Search Weather by city" ref="location"/>
        <button className="button expanded hollow">Get Weather</button>
      </form>
    );
  }
});

module.exports = WeatherForm;