import React from "react";
import { Field, reduxForm } from "redux-form";

class StreamForm extends React.Component {
  renderError({ touched, error }) {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  }

  renderList = ({ input, label, meta }) => {
    return (
      <div className="field">
        <label>{label}</label>
        <input {...input} />
        <div>{this.renderError(meta)}</div>
      </div>
    );
  };

  onSubmit = (formValues)=> {
    this.props.onSubmit(formValues);
  }

  render() {
    return (
      <form
        className="ui form error"
        onSubmit={this.props.handleSubmit(this.onSubmit)}
      >
        <Field name="title" component={this.renderList} label="Enter Title" />
        <Field
          name="description"
          component={this.renderList}
          label="Enter Description"
        />
        <button className="ui button primary">Submit</button>
      </form>
    );
  }
}

const validate = (formProps) => {
  const error = {};
  if (!formProps.title) error.title = "Please enter title";
  if (!formProps.description) error.description = "Please enter description";
  return error;
};

export default reduxForm({ form: "streamForm", validate })(StreamForm);

