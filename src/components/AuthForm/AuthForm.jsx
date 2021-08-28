import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import LabelInput from "../_share/LabelInput/LabelInput";
import Button from "../_share/Button/Button";

const initialValues = {
  email: "",
  password: "",
};

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Not email").required("Requred"),
  password: Yup.string().min(6, "Min 6 symbol").required("Requred"),
});

const AuthForm = ({ authType, handleSubmit }) => {
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      console.log(values);
      handleSubmit(values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <LabelInput
        title="Email"
        name="email"
        value={formik.values.email}
        placeholder="Input email..."
        cbOnChange={formik.handleChange}
      />
      {formik.touched.email && formik.errors.email && (
        <p>{formik.errors.email}</p>
      )}
      <LabelInput
        title="Password"
        name="password"
        value={formik.values.password}
        placeholder="Input password..."
        cbOnChange={formik.handleChange}
      />
      {formik.touched.password && formik.errors.password && (
        <p>{formik.errors.email}</p>
      )}
      <Button title={authType === "login" ? "LogIn" : "SignUp"} type="submit" />
      <Link to={authType === "login" ? "/auth/register" : "/auth/login"}>
        {authType === "register" ? "LogIn" : "SignUp"}
      </Link>
    </form>
  );
};

export default AuthForm;
