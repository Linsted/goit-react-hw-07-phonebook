import { Formik, Field } from 'formik';
import { object, string } from 'yup';
import { FormStyled, Label, Button } from './FormStyled.styled';
import { useDispatch } from "react-redux";
import { addContact } from 'redux/operations';








const phoneBookSchema = object().shape({
    name: string().required(),
    phone: string().required(),
});





export const PhonebookForm = () => {
    // console.log(onSubmit)

    const dispatch = useDispatch();

    return (
        <Formik
            validationSchema={phoneBookSchema}
            initialValues={{
                name: '',
                phone: ''}}
            onSubmit={(values, { resetForm }) => {
                // console.log(values)
                dispatch(addContact({ ...values }));
                resetForm();
            }}>
            
            <FormStyled>
                <Label>Name
                    <Field name="name"/>
                </Label>
                <Label>
                    Number
                    <Field
                        type="phone"
                        name="phone"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"/>
                </Label>


            <Button type="submit">Add contact</Button>
            </FormStyled>
        </Formik>
    )
}



