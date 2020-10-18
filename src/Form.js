import React, { useState } from 'react';

const Form = ({ handleSubmit }) => {
  const initialState = {
    name: '',
    job: '',
  };
  const [form, setForm] = useState(initialState);
  const { name, job } = form;

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm({ ...form, ...{ [name]: value } });
  };

  const submitForm = (e) => {
    e.preventDefault();
    handleSubmit(form);
    setForm(initialState);
  };

  return (
    <form onSubmit={submitForm}>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        name="name"
        id="name"
        value={name}
        onChange={handleChange}
      />
      <label htmlFor="job">Job</label>
      <input
        type="text"
        name="job"
        id="job"
        value={job}
        onChange={handleChange}
      />
      <input type="submit" value="Submit" />
    </form>
  );
};

export default Form;
