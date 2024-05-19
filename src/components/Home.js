import "../assets/style/Home.css";
import batulogo from "../assets/img/BATU_logo.png";
import cgpatoper from "../assets/img/cgpatoper.png";
import cgpacalculator from "../assets/img/cgpacalculator.png";
import gradetosgpa from "../assets/img/gradetosgpa.png";
import sgpatocgpa from "../assets/img/sgpaocgpa.png";
import { Link } from "react-router-dom";
function Home() {
  return (
    <div className="container-fluid p-0">
      <div class="container-fluid p-0">
        <div class="intro-block">
          <img src={batulogo} alt="University Logo" class="logo" />
          <h1>Welcome to GPA Converter!</h1>
          <p>
            Effortlessly convert your DBATU grades!<br></br> Get accurate CGPA to %, Grades to SGPA and SGPA to CGPA conversions with our user-friendly
            online tool.
          </p>
        </div>
      </div>

      <div className="container-fluid pt-5 pb-5">
        <div className="row justify-content-center gap-1 gap-lg-3 flex-column flex-lg-row flex-md-row">
            <Link to='/cgpa-to-percent' className="col anim">
              <div class="card">
              <img src={cgpatoper} width={"100%"}  alt="" />
                <div class="card-body">
                  {/* <h5 class="card-title">Card title</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                  <Link to="/cgpa-to-percent" class="btn btn-sm w-100  btn-primary">Calculate</Link>
                </div>
              </div>
            </Link>
           

            <Link to='/grade-to-sgpa' className="col anim">
            <div class="card">
            <img src={gradetosgpa} width={"100%"}  alt="" />
              <div class="card-body">
                {/* <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                <Link to="/grade-to-sgpa" class="btn btn-sm w-100  btn-primary">Calculate</Link>
              </div>
            </div>
            </Link>

            <Link to='/cgpa-calculator' className="col anim">
            <div class="card">
            <img src={cgpacalculator} width={"100%"}  alt="" />
              <div class="card-body">
                {/* <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                <Link to="/cgpa-calculator" class="btn btn-sm w-100 btn-primary">Calculate</Link>
              </div>
            </div>
            </Link>

        </div>
       
      </div>
    </div>
  );
}

export default Home;
