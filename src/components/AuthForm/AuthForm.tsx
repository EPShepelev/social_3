import React from 'react';
import {
  Formik,
  Form,
  Field,
} from 'formik';

interface userAuthValues {
  email: string;
  password: string;
}

export const AuthForm: React.FC<{}> = () => {
  const initialValues: userAuthValues = { email: '', password: '' };
  return (
    <div>
      <h1>Please, login...</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          console.log({ values, actions });
          console.log(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }}
      >
        <Form>
          <Field id="email" name="email" placeholder="e-mail" />
          <Field id="password" name="password" placeholder="password" />
          <button type="submit">OK</button>
        </Form>
      </Formik>
    </div>
  );
};