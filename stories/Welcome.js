import React from 'react';
import FontAwesome from "../FontAwesome.jsx";


export default class Welcome extends React.Component {

  showApp(e) {
    e.preventDefault();
    if (this.props.showApp) this.props.showApp();
  }

  render() {
    return (
     <FontAwesome icon="trash" spin={false} rotate="horizontal" />
    );
  }
}
