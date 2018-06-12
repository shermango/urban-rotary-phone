import React, { Component, Fragment } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import { validateEmails } from '../../utils';
import SurveyField from './SurveyField';
import formFields from './formFields';

class SurveyForm extends Component {
  renderFields = () => {
    return formFields.map(({ label, name }) => {
      return (
        <Field
          key={name}
          component={SurveyField}
          type="text"
          label={label}
          name={name}
        />
      );
    });
  };

  render() {
    return (
      <Fragment>
        <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
          {this.renderFields()}
          <Link to="/surveys" className="red btn-flat left white-text">
            Cancel
          </Link>
          <button type="submit" className="teal btn-flat right white-text">
            Next
            <i className="material-icons right">arrow_forward</i>
          </button>
        </form>
      </Fragment>
    );
  }
}

function validate(values) {
  let errors = {};

  errors.recipients = validateEmails(values.recipients || '');

  formFields.forEach(({ name }) => {
    if (!values[name]) {
      errors[name] = 'A value is required for this field!';
    }
  });

  return errors;
}

export default reduxForm({
  validate,
  form: 'surveyForm',
  destroyOnUnmount: false
})(SurveyForm);
