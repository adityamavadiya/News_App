// import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Navbar extends Component {
  // static propTypes = {}

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
  <Link className="navbar-brand" to="/">News</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
</button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      {/* <li className="nav-item active"><a className="navbar-brand" href="/business">Business</a></li>
      <li className="nav-item active"><a className="navbar-brand" href="/entertainment">Entertainment</a></li>
      <li className="nav-item active"><a className="navbar-brand" href="/general">General</a></li>
      <li className="nav-item active"><a className="navbar-brand" href="/health">Health</a></li>
      <li className="nav-item active"><a className="navbar-brand" href="/science">Science</a></li>
      <li className="nav-item active"><a className="navbar-brand" href="/sports">Sports</a></li>
      <li className="nav-item active"><a className="navbar-brand" href="/technology">Technology</a></li> */}
      <li className="nav-item active"><Link className="navbar-brand" to="/business">Business</Link></li>
      <li className="nav-item active"><Link className="navbar-brand" to="/entertainment">Entertainment</Link></li>
      <li className="nav-item active"><Link className="navbar-brand" to="/general">General</Link></li>
      <li className="nav-item active"><Link className="navbar-brand" to="/health">Health</Link></li>
      <li className="nav-item active"><Link className="navbar-brand" to="/science">Science</Link></li>
      <li className="nav-item active"><Link className="navbar-brand" to="/sports">Sports</Link></li>
      <li className="nav-item active"><Link className="navbar-brand" to="/technology">Technology</Link></li>
    </ul>
  </div>
</nav>

      </div>
    )
  }
}
export default Navbar