import { Container, Content, Row , TitleCalc} from './styles';
import Input from './components/Input';
import Button from './components/Button';
import { useState } from 'react';


const App = () => {
    const [currentNumber, setCurrentNumber] = useState('0');
    const [firstNumber, setFirstNumber] = useState('0');
    const [operation, setOperation] = useState('');
    const [result, setResult] = useState('0');
    const handleOnClear = () => {
      setCurrentNumber('0');
      setFirstNumber('0');
      setOperation('')
      setResult('0')
    };

    const handleAddNumber = (num) => {
    setCurrentNumber(prev => `${prev === '0' ? '' : prev}${num}`) }
const handleSumNumbers = () => {
        if(firstNumber === '0'){
            setFirstNumber(String(currentNumber));
            setCurrentNumber('')
            setOperation('+');
        } else {
            const sum = Number(firstNumber) + Number(currentNumber);
            setCurrentNumber(String(sum));
            setResult(String(sum));
            setOperation('');
            setFirstNumber('0');

            
        }
    }
    const handleSubNumbers = () => {
      if(firstNumber === '0'){
        setFirstNumber(String(currentNumber));
        setCurrentNumber('')
        setOperation('-');
      } else {
        const  sub = Number(firstNumber) - Number(currentNumber);
        setCurrentNumber(String(sub));
        setResult(String(sub));
        setOperation('')
        setFirstNumber('0');
      }
    }
    const handleDivNumbers = () => {
      if(firstNumber === '0'){
        setFirstNumber(String(currentNumber));
        setCurrentNumber('')
        setOperation('/');
      } else {
        const div = Number(firstNumber) / Number (currentNumber);
        setCurrentNumber(String(div));
        setResult(String(''));
        setFirstNumber('0')
      }
    }

    const handleMultNumbers = () => {
      if(firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('')
      setOperation('*');
    } else {
      const multi = Number(firstNumber) * Number(currentNumber);
      setCurrentNumber(String(multi));
      setResult(String(multi))
      setOperation('')
      setFirstNumber('0')
    }
  }

  const handleDelNumbers = () => {
    setCurrentNumber(currentNumber.substring(0, currentNumber.length-1));
    setOperation('del')
    if (currentNumber === '') {
      setOperation('')
      setCurrentNumber('0')
      
    }
  }
 const handlePercentNumbers = () => {
  if (firstNumber === '0'){
    setFirstNumber(String(currentNumber));
    setCurrentNumber('')
    setOperation('%')
  } else {
    let percent;
    switch(operation) {
      case "+":
            percent = Number(firstNumber)+((Number(firstNumber) *Number(currentNumber))/100);
        break;
        case "-":
            percent = Number(firstNumber)-((Number(firstNumber)*Number(currentNumber))/100);
        break;
        case "/":
            percent = Number(firstNumber)/(Number(currentNumber)/100);
        break;
        case "*":
            percent = Number(firstNumber)*(Number(currentNumber)/100);
        break;
        default:
            break;
 }
            setCurrentNumber(String(percent));
            setResult(String(percent));
            setOperation('')
            setFirstNumber('0')
    }
  }

  const handeEquals = () => {
    if (firstNumber !== '0'&& operation !== '' && currentNumber !=='0'){
      switch (operation){
        case "+":
            handleSumNumbers();
            break;
        case "-":
            handleSubNumbers();
            break;

        case "/":
            handleDivNumbers();
            break;
        case "*":
            handleMultNumbers();
            break;
        case "del":
            handleDelNumbers();
            break;
        case "%":
            handlePercentNumbers();
            break;
            default:
                break;
    }

    }
  }
  const HandlePosNegNumbers = () => {
    if(firstNumber === '0') {
    setFirstNumber(String(currentNumber));
    setCurrentNumber('')
    setOperation('+/-');
  } else {
    const multi = Number(firstNumber) * -1;
    setCurrentNumber(String(multi));
    setResult(String(multi))
    setOperation('+/-')
    setFirstNumber('0')
  }
}
 

  return (<>
     <TitleCalc>Primeira Calculadora</TitleCalc>


    <Container>
      <Content>
        <Input value = {currentNumber}/>
        <Row>
        <Button variant="secondary" label="%" onClick={handlePercentNumbers}/>
        <Button variant="secondary" label="C" onClick={handleOnClear}/>
        <Button variant="secondary" label="DEL" onClick={handleDelNumbers}/>
        <Button variant="secondary" label="÷" onClick={handleDivNumbers}/>
        </Row>
        <Row>
        <Button label="7" onClick={() => handleAddNumber('7')}/>
        <Button label="8" onClick={() => handleAddNumber('8')}/>
        <Button label="9" onClick={() => handleAddNumber('9')}/>
        <Button variant="secondary" label="x" onClick={handleMultNumbers}/>
        </Row>
        <Row>
        <Button label="4" onClick={() => handleAddNumber('4')}/>
        <Button label="5" onClick={() => handleAddNumber('5')}/>
        <Button label="6" onClick={() => handleAddNumber('6')}/>
        <Button variant="secondary" label="-" onClick={handleSubNumbers}/>
        </Row>
        <Row>
        <Button label="1" onClick={() => handleAddNumber('1')}/>
        <Button label="2" onClick={() => handleAddNumber('2')}/>
        <Button label="3" onClick={() => handleAddNumber('3')}/>
        <Button variant="secondary" label="+" onClick={handleSumNumbers}/>
        </Row>
        <Row>
        <Button variant="secondary" label="+/-" onClick={HandlePosNegNumbers}/>
        <Button label="0" onClick={() => handleAddNumber('0')}/>
        <Button variant="secondary" label="." onClick={() => handleAddNumber('.')}/>
        <Button variant="secondary" label="=" onClick={handeEquals}/>
        </Row>
        
        
      </Content>
      
    </Container>
  </>);
}

export default App;
