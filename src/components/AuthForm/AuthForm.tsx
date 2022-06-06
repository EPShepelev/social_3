import React from 'react';
import {
  Formik,
  Form,
  Field,
} from 'formik';
import { login } from '../../redux/actionCreators'
import { useAppDispatch } from '../../hooks/redux';
import { userAuthValues } from '../../interfaces/IAuth'



export const AuthForm: React.FC<{}> = () => {
  const dispatch = useAppDispatch()
  const initialValues: userAuthValues = { email: '', password: '', rememberMe: false };
  return (
    <div>
      <h1>Please, login...</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          dispatch(login(values.email, values.password, values.rememberMe))
          actions.setSubmitting(false);
        }}
      >
        <Form>
          <Field id="email" name="email" placeholder="e-mail" />
          <Field id="password" name="password" placeholder="password" />
          <Field type="checkbox" name="rememberMe" />
          Remember me
          <button type="submit">OK</button>
        </Form>
      </Formik>
    </div>
  );
};