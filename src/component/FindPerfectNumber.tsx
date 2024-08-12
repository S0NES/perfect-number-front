import { useRef, useState } from 'react';
import '.././App.css';
import axios from 'axios';

const FindPerfectNumber = () => {
    const [result, setResult] = useState<string>();
    
    const numberRef = useRef<HTMLInputElement>(null);
  
    const handleSearch = async () => {
      const numberInput = numberRef.current?.value;
  
      if (!numberInput) 
        return alert('Number is required.');
      
  
      const num = parseInt(numberInput, 10);
  
      if (isNaN(num)) 
        return alert('Invalid number.');
  
    try {
        const response = await axios.get('http://localhost:8080/api/verify', {
          params: {
            number: num,
          },
          headers: {
            'Content-Type': 'application/json'
          },
        });
        
        setResult(response.data ? 'Perfect 👌' : 'Not perfect');
      } catch (error) {
        setResult('Error fetching perfect number.');
      }
    };
    return (
      <>
        <h1>Verify Perfect Number</h1>
        <div className="card find-area">
          <input type='number' id="numberInput" ref={numberRef}/>
          <p id="result">{result}</p>
          <button id="search" onClick={handleSearch}>Verify</button>
        </div>
      </>
    );
};

export default FindPerfectNumber;