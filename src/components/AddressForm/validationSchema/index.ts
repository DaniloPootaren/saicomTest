import * as Yup from "yup";

export const validationSchema = Yup.object({
  line1: Yup.string()
    .required("Line is mandatory"),
  line2: Yup.string()
    .required("Line is mandatory"),
  suburb: Yup.string().required("Required"),
  city: Yup.string().required("Required"),
  province: Yup.string().required("Required"),
  postalCode: Yup.string().min(3,"Enter at least 3 characters.").max(7,"Maximum characters exceeded (7).").required("Required"),
  country: Yup.string().required("Required"),
});
