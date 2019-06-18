import React from 'react';

import './Goat.scss';
import goats from '../../App/goats';

class Goat extends React.Component {
  render() {
    const { goat } = this.props;
    return (
      <div className = "Goat col-3">
  <div className="card">
  <img className="card-img-top" src={goat.imgUrl} alt=""/>
  <div className="card-body">
    <h5 className="card-title">{goat.name}</h5>
    <p className="card-text">{goat.favPose}</p>
  </div>
  </div>
  </div>
    );
  }
}

export default Goat;
