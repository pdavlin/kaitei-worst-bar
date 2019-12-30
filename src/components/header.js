import PropTypes from "prop-types"
import React from "react"
import "./header.css"

const Header = ({ siteTitle }) => (
  <div className="wrapper">
    <div className="crazy-alert">
      <span className="bigger">{ siteTitle }</span>
      <br/>
      <span className="buzz">The Worst Bar in Benson</span>
    </div>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
