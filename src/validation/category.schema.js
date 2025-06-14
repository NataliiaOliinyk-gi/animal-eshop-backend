import * as Yup from "yup";

export const categoryAddSchema = Yup.object({
    title: Yup
        .string()
        .min(3, "Title must be at least 3 characters long")
        .required("Title is required"),
    image: Yup.string()
}).noUnknown(true, ({ unknown }) => `Unknown field: ${unknown}`);

export const categoryUpdateSchema = Yup.object({
    title: Yup
        .string()
        .min(3, "Title must be at least 3 characters long"),
    image: Yup.string()
}).noUnknown(true, ({ unknown }) => `Unknown field: ${unknown}`);