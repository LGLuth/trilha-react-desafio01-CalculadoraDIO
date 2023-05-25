import { ButtonContainer } from './styles';


const Button = ({label, onClick, variant="primary"}) => {
    return (
      <ButtonContainer variant={variant} onClick={onClick}>
        {label}
      </ButtonContainer>
    );
  }
  
  export default Button;