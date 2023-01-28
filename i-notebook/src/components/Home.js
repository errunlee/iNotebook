import Notes from "./Notes";

export default function Home() {
  return (
    <div>
      <>
      <div class="shadow p-3 mb-3 bg-body rounded">
    <h3> crud your Notes on the Cloud </h3>
  </div>
      <div className="container my-1 ">
       <p className="lead" style={{'font-size':'1.5rem','font-weight':'bold'}}>Add a note</p>
      <form>
  <div className="mb-3">
    <label className="form-label">Title</label>
    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>    
  </div>
  <div className="mb-3">
    <label  className="form-label">Description</label>
    <input type="text" className="form-control" id="exampleInputPassword1"/>
  </div>
  <button type="submit" className="btn btn-primary">Save Note</button>
</form>

<div className="position-relative">
<Notes/>
</div>

</div>
      </>
    </div>
  )
}
