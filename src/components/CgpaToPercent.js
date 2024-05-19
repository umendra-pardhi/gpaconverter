import React, { useState } from 'react';


function CGPAToPercent() {
    const [cgpa, setCGPA] = useState('');
    const [percentage, setPercentage] = useState('');

    const calculatePercentage = () => {
        if (cgpa === '') {
            alert('Please enter a CGPA value');
            return;
        }
        if(cgpa>10){
            alert('enter valid cgpa!')
            return;
        }
        if(cgpa<0){
            alert('enter valid cgpa!')
            return;
        }
        const calculatedPercentage = ((parseFloat(cgpa)-0.5 )* 10).toFixed(2);
        setPercentage(calculatedPercentage);
    };

    return (
        <div className="container">
            <div className="converter-container mt-5 p-4 border " style={{backgroundColor:"#fff"}}>
                <h2 className="mb-4">CGPA to % Converter</h2>
                <div className="mb-3">
                    <label htmlFor="cgpaInput" className="form-label">Enter your CGPA:</label>
                    <input type="number" step="0.01" min="0" max="10" className="form-control" id="cgpaInput" value={cgpa} onChange={(e) => setCGPA(e.target.value)}  />
                </div>
                <button className="btn btn-primary" onClick={calculatePercentage}>Calculate Percentage</button>
                {percentage && <div className="mt-3">Your percentage is: <b>{percentage}</b>%</div>}
            </div>
        </div>
    );
}

export default CGPAToPercent;
