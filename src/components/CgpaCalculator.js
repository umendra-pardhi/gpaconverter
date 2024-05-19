import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import gradehelp1 from '../assets/img/gradehelp1.png'
import gradehelp2 from '../assets/img/gradehelp2.jpg'
import gradehelp3 from '../assets/img/gradehelp3.PNG'

const CGPACalculator = () => {
    const [numSem, setNumSem] = useState(0);
    const [semData, setSemData] = useState([]);
    const [cgpa1,setCgpa1]=useState(0)
  
    const handleNumSemChange = (e) => {
      const numSem = parseInt(e.target.value);
      setNumSem(numSem);
      setSemData(Array.from({ length: numSem }, (_, i) => ({
        semNo: i + 1,
        gp: '',
        credit: '',
        cgpa: 0,
        sgpa:0
      })));
    };
  
    const handleGradeChange = (semNo, e) => {
      const updatedSemData = semData.map(sem => sem.semNo === semNo ? { ...sem, gp: parseFloat(e.target.value) } : sem);
      setSemData(updatedSemData);
    };
  
    const handleCreditChange = (semNo, e) => {
      const updatedSemData = semData.map(sem => sem.semNo === semNo ? { ...sem, credit: parseFloat(e.target.value) } : sem);
      setSemData(updatedSemData);
    };
  
    const calculateCGPA = () => {
        let totalGradePoints = 0;
  let totalCredits = 0;
      const updatedSemDataWithCGPA = semData.map(sem => {
        if (!sem.gp || !sem.credit) {
          alert(`Please fill all fields for Semester ${sem.semNo}`);
          return sem;
        }
        
        const cgpa1 =semData.reduce((total, sem) => total + sem.gp, 0) / semData.reduce((total, sem) => total + sem.credit, 0);
       setCgpa1(cgpa1)
        totalGradePoints += sem.gp;
    totalCredits += sem.credit;

    const cgpa = totalGradePoints / totalCredits;
    const sgpa =sem.gp / sem.credit;
        return { ...sem, cgpa,sgpa };
      });
      setSemData(updatedSemDataWithCGPA);
    };

  return (
    <div className='container mt-2 mb-5'>
      <h3>CGPA calculator</h3>
      <hr />
      <div className="input-group mb-3">
        <span className="input-group-text bg-uni">Total no. of semesters</span>
        <input
          className="form-control"
          min="0"
          max="8"
          placeholder="No. of semesters you passed"
          type="number"
          value={numSem}
          onChange={handleNumSemChange}
        />
      </div>
      {numSem > 0 && (
        <>
          <table className="table">
            <thead>
              <tr>
                <th>Semester</th>
                <th>Grade Points <Link data-bs-toggle="modal" data-bs-target="#helpModal" >Need help?</Link></th>
                <th>Total Credit</th>
                <th>SGPA</th>
                <th>CGPA</th>
               
              </tr>
            </thead>
            <tbody>
              {semData.map(sem => (
                <tr key={sem.semNo}>
                  <td>Semester {sem.semNo}</td>
                  <td>
                    <input
                      className="form-control form-control-sm"
                      step={0.1}
                      type="number"
                      value={sem.gp}
                      onChange={(e) => handleGradeChange(sem.semNo, e)}
                    />
                  </td>
                  <td>
                    <input
                      className="form-control form-control-sm"
                      step={0.1}
                      type="number"
                      value={sem.credit}
                      onChange={(e) => handleCreditChange(sem.semNo, e)}
                    />
                  </td>
                  <td>
                    <input
                      className="form-control form-control-sm"
                      type="number"
                      value={sem.sgpa.toFixed(2)}
                      readOnly
                    />
                  </td>

                  <td>
                    <input
                      className="form-control form-control-sm"
                      type="number"
                      value={sem.cgpa.toFixed(2)}
                      readOnly
                    />
                  </td>
                  
                </tr>
              ))}
            </tbody>
          </table>
          <button className='btn btn-primary w-100' onClick={calculateCGPA} data-bs-toggle="modal" data-bs-target="#exampleModal">Calculate CGPA</button>
        </>
      )}


      <>


      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Your CGPA: {cgpa1.toFixed(2)}</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
    
       <table className="table">
            <thead>
              <tr>
                <th>Semester</th>
                <th>SGPA</th>
                <th>CGPA</th>
               
              </tr>
            </thead>
            <tbody>
              {semData.map(sem => (
                <tr key={sem.semNo}>
                  <td>Semester {sem.semNo}</td>
                  <td>{sem.sgpa.toFixed(2)}</td>
                  <td>{sem.cgpa.toFixed(2)}</td>
                </tr>

              ))}
              </tbody>
              </table>

      </div>
      <div class="modal-footer">

        <button type="button" data-bs-dismiss="modal" class="btn btn-primary">Ok</button>
      </div>
    </div>
  </div>
</div>


      <div class="modal  modal-dialog-scrollable fade" id="helpModal" tabindex="-1" aria-labelledby="helpModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="helpModalLabel">Need help finding or calculating grade points?</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
         
<b>If you have a marksheet with numerical marks: </b>
To find your grade points, refer to your marksheet. Look for the sections that indicate the grade points and total credits. The red marks on the images below show you where to find this information. Once you locate it, you can use it to calculate your CGPA.
<br/><br/>

<b>If you have grades (EX, AA, AB, BB, etc.) without numerical marks: </b>
You can calculate your grade points by using the Grade to SGPA converter. This tool will calculate your SGPA as well as your grade points and total credits.<br/>

<div className="text-center p-2">
<Link to='/grade-to-sgpa' className='btn btn-sm btn-primary' data-bs-dismiss="modal" onClick={()=>{window.location.href = "/grade-to-sgpa"}}>calculate Grade Points</Link>
</div>             
                <img width={"100%"} src={gradehelp1} alt="" /><br/><br/>
                <img width={"100%"} src={gradehelp2} alt="" /><br/><br/>
                <img width={"100%"} src={gradehelp3} alt="" />
      </div>
      <div class="modal-footer">

        <button type="button" data-bs-dismiss="modal" class="btn btn-primary">Ok</button>
      </div>
    </div>
  </div>
</div>
      </>
      
    </div>

  );
};

export default CGPACalculator;
