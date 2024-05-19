import * as Yup from 'yup'

const AddPrVal = Yup.object().shape({
    imgSrc:Yup.string().required(),
    title:Yup.string().required(),
    price:Yup.number().required()
})

export default AddPrVal