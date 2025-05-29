const React = require('react');

const About = (props) => {
  return (
    <div>
      <h1 className="text-center page-title">About</h1>
      <p>Small react project. I have built this for developer course.</p>
      <p>Here are some of the tools you need to have a loook:</p>
      <ul>
        <li>
            <a href="htpps://www.facebook.github.io/react">The React Framework</a>
        </li>
        <li>
            <a href="htpps://www.openweathermap.org">Open Weather Map</a>
        </li>
      </ul>
    </div>
    )
};

module.exports = About;