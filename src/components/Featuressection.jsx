import React from 'react';
import './styles/featuressection.css';

function Featuressection() {
  return (
    <div className="features-section container">
      <div className="row">
        <div className="col-md-3 col-sm-6 feature-item">
          <img src="./assets/images/features1.jpg" alt="Comfortable Fit" className="img-fluid" />
          <h5>Comfortable Fit</h5>
          <p>Soft and cozy materials for all-day play.</p>
        </div>
        <div className="col-md-3 col-sm-6 feature-item">
          <img src="./assets/images/features2.jpg" alt="Bright Colors" className="img-fluid" />
          <h5>Bright Colors</h5>
          <p>Vibrant hues that make kids shine.</p>
        </div>
        <div className="col-md-3 col-sm-6 feature-item">
          <img src="./assets/images/features3.jpg" alt="Fun Patterns" className="img-fluid" />
          <h5>Fun Patterns</h5>
          <p>Playful designs for every adventure.</p>
        </div>
        <div className="col-md-3 col-sm-6 feature-item">
          <img src="./assets/images/features4.jpg" alt="Easy Care" className="img-fluid" />
          <h5>Easy Care</h5>
          <p>Simple washing and lasting quality.</p>
        </div>
      </div>
    </div>
  );
}

export default Featuressection;
