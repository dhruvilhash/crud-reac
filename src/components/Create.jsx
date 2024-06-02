import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"


const Create = () => {

    const [name,setName]=useState("")
    const [email,SetEmail]=useState("")
    const history =useNavigate()

    const header ={"Access-Control-Allow-Origin":"*"}
    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log("hsb");
        axios.post('https://665af13b003609eda45f544b.mockapi.io/crud-react',{
                name:name,
                email:email,
              header ,
        });
        history("/read")
    }

  return( 
  <>
  <h2>Create</h2>
  <form className="width-30px">
  <div className="mb-3">
  <label  className="form-label">Name</label>
  <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Example input placeholder" 
    onChange={(e)=>setName(e.target.value)}/>
</div>
<div className="mb-3">
  <label  className="form-label">Email</label>
  <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Another input placeholder" 
  onChange={(e)=>SetEmail(e.target.value)}/>
</div>
<br />

<button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
  </form>
  </>
  )
}

export default Create
