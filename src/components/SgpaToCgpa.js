import { useState } from "react";
function SgpaToCgpa(){

    const [numSem, setNumSem] = useState(0);
    const [sem, setSem] = useState([]);
    const [hasSem,setHasSem]=useState(false)
  
    const handleNumSemChange = (e) => {
      const num = parseInt(e.target.value);
      setNumSem(num);
      if(num>0){
        setHasSem(true)
      }else{
        setHasSem(false)
      }

      setSem(Array.from({ length: num }, (_, i) => ({ semNo: i + 1, sgpa: 0 })));
    };

    const handleSgpaChange = (semNo, e) => {
        const sgpa = parseFloat(e.target.value);
        setSem(sem.map((sem) => (sem.semNo === semNo ? { ...sem, sgpa } : sem)));
      };
    
      const calculateCGPA = () => {
        const totalSGPA = sem.reduce((acc, sem) => acc + sem.sgpa, 0);
        return totalSGPA !== 0 ? totalSGPA / numSem : 0;
      };

    return(
        <>
             <div className='container mt-2 mb-5'>
        <h3>SGPA to CGPA converter</h3>
        <hr />
        <div class="input-group mb-3">
  <span class="input-group-text bg-uni"  >Total no. of semester</span>
  <input class="form-control" min="0" max="8" placeholder="no. of semester you passed" type="number" value={numSem} onChange={handleNumSemChange} />
</div>
        {
            hasSem&&
            <>
            <table className="table">
          <thead>
            <tr>
              <th>Semester</th>
              <th>SGPA</th>
            </tr>
          </thead>
          <tbody>
            {sem.map((sem) => (
              <tr key={sem.semNo}>
                <td>Semester {sem.semNo}</td>
                <td><input className='form-control form-control-sm ' step={0.1}   type="number"  value={sem.sgpa} onChange={(e) => handleSgpaChange(sem.semNo, e)}  /></td>
                
              </tr>
            ))}
          </tbody>
        </table>
       
        <button className='btn btn-primary w-100' data-bs-toggle="modal" data-bs-target="#exampleModal" >Calculate CGPA</button>
</>    }

<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Your CGPA:</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        {`SGPA: ${calculateCGPA().toFixed(2)}`}
      </div>
      <div class="modal-footer">

        <button type="button" data-bs-dismiss="modal" class="btn btn-primary">Ok</button>
      </div>
    </div>
  </div>
</div>


      </div>
        </>
    )
}

export default SgpaToCgpa