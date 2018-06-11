import React, { Fragment } from 'react';

const SurveyField = ({ input, label }) => {
  return (
    <Fragment>
      <label>{label}</label>
      <input {...input} />
    </Fragment>
  );
};

export default SurveyField;
