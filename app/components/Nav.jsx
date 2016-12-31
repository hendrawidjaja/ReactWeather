var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = React.createClass ({
    onSearch: function(e) {
        var location = this.refs.searchbar.value; // retrieve value from refs in search on navbar
        var encodedLocation = encodeURIComponent(location); // prevent %20 from address location
        e.preventDefault(); // prevent browser default action of refresh

        if (location.length > 0) {
            this.refs.searchbar.value = ''; // cleanup the refs value
            window.location.hash = '#/?location=' + encodedLocation; // put the searched location to addressbar
        }
    },
    render: function() {
        return(
            <div className="top-bar">
                <div className="top-bar-left">
                    <ul className="menu">
                        <li className="menu-text">
                            React Weather app
                        </li>
                        <li>
                            <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather </IndexLink>
                        </li>
                        <li>
                            <IndexLink to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About </IndexLink>
                        </li>
                        <li>
                            <IndexLink to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples </IndexLink>
                        </li>
                    </ul>
                </div>
                <div className="top-bar-right">
                    <form onSubmit={this.onSearch}>
                        <ul className="menu">
                            <li>
                                {/* add ref, so outer function can access the value */}
                                <input type="search" placeholder="Search Weather by city" ref="searchbar"/>
                            </li>
                            <li>
                                <input type="submit" className="button" placeholder="button" value="Get Weather"/>
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        )
    }
});

module.exports = Nav;
