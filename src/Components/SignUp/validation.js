import * as Yup from 'yup';

 const Schema = Yup.object({
    // Name:Yup.string().min(3).max(20).required("Name is Required"),
    email:Yup.string().email().required("Email is Required"),
    password:Yup.string()
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/, "Password must has at least 8 characters that include at least 1 lowercase character, 1 uppercase characters, 1 number, and 1 special character in (!@#$%^&*)")
    .required("Password is Required"),
    confirm_password:Yup.string().oneOf([Yup.ref('password'), null], "Confirm Password does not match")
});

export default Schema;
