import { useRef, useState } from 'react';
import '.././App.css';
import axios from 'axios';

const PerfectNumberBetween = () => {
    const [result, setResult] = useState<string>();
    
    const minNumberRef = useRef<HTMLInputElement>(null);
    const maxNumberRef = useRef<HTMLInputElement>(null);
  
    const handleSearch = async () => {
      const minNumber = minNumberRef.current?.value;
      const maxNumber = maxNumberRef.current?.value;
  
      if (!minNumber || !maxNumber) 
        return alert('Min/Max number is required.');
  
      const min = parseInt(minNumber, 10);
      const max = parseInt(maxNumber, 10);
  
      if (isNaN(min)) 
        return alert('Invalid number.');
  
    try {
        const response = await axios.get('http://localhost:8080/api/between', {
        params: {
            minNumber: min,
            maxNumber: max,
        },
        headers: {
            'Content-Type': 'application/json'
        },
        });

        let data = response.data === 0 ? "Not found" : response.data
        setResult(data);
    } catch (error) {
        setResult('Error fetching perfect number.');
    }
    };
    return (
        <>
            <h1>Find a Perfect Number Between two Numbers</h1>
            <div className="card between-area">
                <input type='number' id="minNumber" ref={minNumberRef}/>
                <input type='number' id="maxNumber" ref={maxNumberRef}/>
                <p id="result">{result}</p>
                <button id="search" onClick={handleSearch}>Find</button>
            </div>
        </>
    );
};

export default PerfectNumberBetween;