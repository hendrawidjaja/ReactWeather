const React = require('react');
const {Link} = require('react-router');

const Examples = (props) => {
  return(
    <div>
      <h1 className="text-center page-title">Examples</h1>
      <p>Here are a few examples location to try out:</p>
      <ol>
        <li>
            <Link to="/?location=Berlin">Berlin, Germany</Link>
        </li>
        <li>
            <Link to="/?location=Tokyo">Tokyo, Japan</Link>
        </li>
      </ol>
    </div>
  )
}

module.exports = Examples;