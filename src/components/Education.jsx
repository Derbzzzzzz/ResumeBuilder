import "../styles/General.css"

function Education() {

  return (
    <>
      <div className="container">
        <h2 className="form-title">Education</h2>
        <form>
            <div className="form-group">
                <h4><label htmlFor="college">College</label></h4>
                <input type="text" className="form-control" id="college" placeholder="College Name" autoComplete="off" required/>
            </div>
            <div className="form-group">
                <h4><label htmlFor="degreeType">Degree Type</label></h4>
                <select id="degreeType" className="form-control">
                    <option label="-- Select An Option --" style={{display: 'none'}}></option>
                    <option>{'Bachelor of Science (BS)'}</option>
                    <option>{'Bachelor of Arts (BA)'}</option>
                    <option>{'Master (MS)'}</option>
                </select>
            </div>
            <div className="form-group">
                <h4><label htmlFor="degreeField">Degree Field</label></h4>
                <input type="text" className="form-control" id="degreeField" placeholder="Degree Field" autoComplete="off" required/>
            </div>
            <div class="row">
                <div class="form-group col-md-6">
                    <h4><label for="startDate">Start Date</label></h4>
                    <input type="date" class="form-control" id="startDate" required/>
                </div>
                <div class="form-group col-md-6">
                    <h4><label for="endDate">End Date</label></h4>
                    <input type="date" class="form-control" id="endDate" required/>
                </div>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    </>
  )
}

export default Education