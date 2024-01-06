
import * as yup from "yup";

const validations = yup.object({
    firstName: yup.string().required("Zorulunlu alan"),
    lastName: yup.string().required("Zorulunlu alan"),
    email: yup.string().email("Lütfen geçerli bir e-posta adresi giriniz").required("Zorulunlu alan"),
    password: yup.string().min(6, "En az 6 karakter olmalı").max(12, "En fazla 12 karakter olabilir").required("Zorulunlu alan"),
    repassword: yup.string().min(6, "En az 6 karakter olmalı").max(12, "En fazla 12 karakter olabilir").required("Zorulunlu alan").oneOf([yup.ref("password")])
});

export default validations;