import React, { Component } from "react";
import { Formik } from "formik";
import TextField from "./textfield";
import { formData } from "./formData";
import { createYupSchema } from "./yupSchemaCreator";
import * as yup from "yup";

const onSubmit = values => {
    console.log('Form data', values);
    //alert(JSON.stringify(values))

    fetch('http://localhost:5000/signup', {
        method: 'POST',
        body : JSON.stringify(values),
        headers : {'Content-Type': 'application/json', 'Accept':'application/json'}
    })
}

class Form extends Component {
  renderFormElements = props =>
    formData.map((item, index) => {
      const fieldMap = {
        text: TextField
      };
      const Component = fieldMap[item.type];
      let error = props.errors.hasOwnProperty(item.id) && props.errors[item.id];
      if (item.type) {
        return (
          <Component
            key={index}
            label={item.label}
            name={item.id}
            placeholder={item.placeholder}
            value={props.values[item.id]}
            onChange={props.handleChange}
            error={error}
          />
        );
      }
      return "";
    });

  render() {
    const initialValues = {};
    formData.forEach(item => {
      initialValues[item.id] = item.value || "";
    });

    const yepSchema = formData.reduce(createYupSchema, {});
    console.log(yepSchema);
    const validateSchema = yup.object().shape(yepSchema);

    return (
      <div className="form">
        <h1>Form</h1>
        <Formik
          initialValues={initialValues}
          validationSchema={validateSchema}
          onSubmit={onSubmit}
        >
          {props => (
            <form onSubmit={props.handleSubmit}>
              {this.renderFormElements(props)}
              <button type="submit">Submit</button>
            </form>
          )}
        </Formik>
      </div>
    );
  }
}

export default Form;
