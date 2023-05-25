
import { InputContainer } from './styles';

const Input = ({value, result}) => {
    return (
      <InputContainer>
        <input value = {value}/>
        <label>{result}</label>  
      </InputContainer>
    );
  }
  
  export default Input;