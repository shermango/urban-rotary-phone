import React from 'react';

const SurveyFormReview = ({ onCancel }) => {
  return (
    <div>
      <h5>Please confirm your entries</h5>
      <button
        className="yellow darken-3 btn-flat btn-small white-text"
        onClick={onCancel}
      >
        Back
        <i className="material-icons right">arrow_backward</i>
      </button>
    </div>
  );
};

export default SurveyFormReview;
