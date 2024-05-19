import * as Yup from 'yup';
 const AddProductSchema = Yup.object().shape({
    imgSc:Yup.string().required('image is required'),
    title:Yup.string().required("please enter title"),
    price:Yup.string().required("please enter price")
})

export default AddProductSchema