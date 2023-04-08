import styled from '@emotion/styled'
import { Form } from 'formik'

export const FormStyled = styled(Form)`
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    border-radius: 5px;
    padding: 4px;
    margin-bottom: 15px;
    width: 300px;
`

export const Label = styled.label`
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 200px;
`

export const Button = styled.button`
    width: 100px;
    margin-top: 15px;
    padding: 5px;

  background-color: #FFFFFF;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: .25rem;
  box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;
  box-sizing: border-box;
  cursor: pointer;
    :hover {
    border-color: rgba(0, 0, 0, 0.15);
    box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
    color: rgba(0, 0, 0, 0.65);}
 



`