import React from 'react';
import './Track.css';

class Track extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    {/*this.renderAction = this.renderAction.bind(this);*/}
  }
  renderAction() {
    if (this.props.isRemoval) {
      return (
        <a className="Track-action">-</a>
      );
    } else {
      return (
        <a className="Track-action">+</a>
      );
    }
  }
  render() {
    return (
      <div className="Track">
        <div className="Track-information">
          <h3>{/*track name will go here */}</h3>
    <p>{/* track artist will go here */} | {/* track album will go here */}</p>
        </div>
        <a className="Track-action">{this.renderAction()}</a>
      </div>
    )
  }
}
 
export default Track;