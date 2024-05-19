import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import credithelpimg from '../assets/img/credithelp.png'
import '../assets/style/gtos.css'
const grades = {
  "EX": 10.0,
  "AA": 9.0,
  "AB": 8.5,
  "BB": 8.0,
  "BC": 7.5,
  "CC": 7.0,
  "CD": 6.5,
  "DD": 6.0,
  "DE": 5.5,
  "EE": 5.0,
  "FF": 0.0
};

function GradeToSgpa(){

    const [numSubjects, setNumSubjects] = useState(0);
    const [subjects, setSubjects] = useState([]);
    const [hasSub,setHasSub]=useState(false)
  
    const handleNumSubjectsChange = (e) => {
      const num = parseInt(e.target.value);
      setNumSubjects(num);
      if(num>0){
        setHasSub(true)
      }else{
        setHasSub(false)
      }

      setSubjects(Array.from({ length: num }, (_, i) => ({ subNo: i + 1, credit: 0, grade: 'EX' })));
    };
  
    const handleCreditChange = (subNo, e) => {
      const credit = parseInt(e.target.value);
      setSubjects(subjects.map((subject) => (subject.subNo === subNo ? { ...subject, credit } : subject)));
    };
  
    const handleGradeChange = (subNo, e) => {
      const grade = e.target.value;
      setSubjects(subjects.map((subject) => (subject.subNo === subNo ? { ...subject, grade } : subject)));
    };
  
    const calculateSGPA = () => {
      const totalCredit = subjects.reduce((acc, subject) => acc + subject.credit, 0);
      const totalGradeCredit = subjects.reduce((acc, subject) => acc + (subject.credit * grades[subject.grade]), 0);
      return totalCredit !== 0 ? totalGradeCredit / totalCredit : 0;
    };

    // const calculateSGPA = () => {
    //     // Check if any subject has an "FF" grade
    //     const hasFailGrade = subjects.some((subject) => subject.grade === "FF");
      
    //     // If any subject has an "FF" grade, return "Fail"
    //     if (hasFailGrade) {
    //       return "Fail";
    //     }
      
    //     // Calculate SGPA as before if there are no "FF" grades
    //     const totalCredit = subjects.reduce((acc, subject) => acc + subject.credit, 0);
    //     const totalGradeCredit = subjects.reduce((acc, subject) => acc + (subject.credit * grades[subject.grade]), 0);
    //     return totalCredit !== 0 ? totalGradeCredit / totalCredit : 0;
    //   };
      

    return(
        <div className='container mt-2 mb-5'>
        <h3>GRADE to SGPA converter</h3>
        <hr />
        <div class="input-group mb-3">
  <span class="input-group-text bg-uni"  >Total no. of subjects</span>
  <input class="form-control" min="0" max="20" placeholder="e.g. 7 (except audit subjects)" type="number" value={numSubjects} onChange={handleNumSubjectsChange} />
</div>
        {
            hasSub&&
            <>
            <table className="table">
          <thead>
            <tr>
              <th>Subject No</th>
              <th>Credit Allotted <Link data-bs-toggle="modal" data-bs-target="#helpModal" >Need help?</Link> </th>
              <th>Grade</th>
            </tr>
          </thead>
          <tbody>
            {subjects.map((subject) => (
              <tr key={subject.subNo}>
                <td>Subject {subject.subNo}</td>
                <td><input className='form-control form-control-sm ' type="number" value={subject.credit} onChange={(e) => handleCreditChange(subject.subNo, e)}  /></td>
                <td>
                  <select className='form-select form-select-sm ' value={subject.grade} onChange={(e) => handleGradeChange(subject.subNo, e)}>
                    {Object.keys(grades).map((grade) => (
                      <option key={grade} value={grade}>{grade}</option>
                    ))}
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
       
        <button className='btn btn-primary w-100' data-bs-toggle="modal" data-bs-target="#exampleModal" >Calculate SGPA</button>
</>    }



<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Your SGPA:</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        {`SGPA: ${calculateSGPA().toFixed(2)}`}
        <br/>
        {`Grade Points: ${subjects.reduce((acc, subject) => acc + (subject.credit * grades[subject.grade]), 0)}`}
        <br/>
        {`Total Credits: ${subjects.reduce((acc, subject) => acc + subject.credit, 0)}`}
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
        <h1 class="modal-title fs-5" id="helpModalLabel">Need help finding the credit allotted to a subject?</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
              You can easily check the credits in your syllabus. Here's an example to guide you:

Understanding the credit allocation for each subject is crucial. By referring to your syllabus, you can easily find the specific credit allotted to a subject. For instance, if your syllabus states that a particular subject is worth 4 credits, it means that the subject carries a certain weightage in your academic curriculum. This information is essential for calculating your SGPA and CGPA accurately. If you're unsure about how to locate this information in your syllabus, we're here to help!

                
                <img width={"100%"} src={credithelpimg} alt="" />
      </div>
      <div class="modal-footer">

        <button type="button" data-bs-dismiss="modal" class="btn btn-primary">Ok</button>
      </div>
    </div>
  </div>
</div>
      </div>
    )
}

export default GradeToSgpa;