import React, { Component, PropTypes } from "react";
import "font-awesome/css/font-awesome.css";


export default class FontAwesome extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const spin = this.props.spin ? "fa-spin" : "";
    const rotate = this.props.rotate ? `fa-rotate-${this.props.rotate}` : "";

    return (
      <i className={`fa fa-${this.props.icon} ${spin} ${rotate}`}> </i>
    );
  }
}

FontAwesome.PropTypes = {
  flip: PropTypes.string,
  icon: PropTypes.string,
  rotate: PropTypes.oneOf(PropTypes.string, PropTypes.number),
  size: PropTypes.string,
  spin: PropTypes.bool
};