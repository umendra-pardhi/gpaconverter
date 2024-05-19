import { Link } from "react-router-dom";

function About(){
    return(
        <div className="container mb-5">
        <div className="mt-5 p-4 border bg-light">
            <h3 className="mb-1">About</h3>
            <hr />
            <div className="mb-3">
                <p>
                Our <b>GPA converter</b> for Dr. Babasaheb Ambedkar Technological University (DBATU) simplifies the conversion process, providing accurate and convenient conversions between CGPA and percentage, as well as between grades and SGPA. Developed by <b><a href='https://umendrapardhi.web.app' style={{textDecoration:'none'}} target="_blank" >Umendra Pardhi</a></b>, a 3rd-year computer engineering student at <b>Government College of Engineering, Yavatmal</b>, our tool is designed to meet the specific needs of DBATU students. Whether you're a student looking to understand your academic performance or an educator needing to assess student progress, our tool offers a user-friendly experience. By eliminating the complexities of manual conversions, our GPA converter allows you to focus on what matters most – your education.</p>

                <p>For inquiries, support, or feedback regarding our GPA converter tool, please contact us at <Link to='mailto:umendratpardhi@gmail.com'>umendratpardhi@gmail.com</Link> We value your input and are here to assist you with any questions you may have.</p>
               
            </div>
           
        </div>
    </div>
    )
}

export default About;