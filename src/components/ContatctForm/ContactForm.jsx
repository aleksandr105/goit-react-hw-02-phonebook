import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';

let initialValues = {
  name: '',
  number: '',
};

let schema = yup.object().shape({
  name: yup.string().min(2).max(25).required(),
  number: yup.string().min(6).max(15).required(),
});

export const ContactForm = ({ handleSubmit }) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={schema}
    >
      <Form name="phonebook" autoComplete="off">
        <label htmlFor="">
          Name
          <Field type="text" name="name" />
          <ErrorMessage name="name" component="p" />
        </label>
        <label htmlFor="">
          Number
          <Field type="tel" name="number" />
          <ErrorMessage name="number" component="p" />
        </label>
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};
