import "../styles/ExpMenu.css"

function formSubmit(e, props){
    e.preventDefault();
  
    let state = props.state
  
    let stateClone = JSON.parse(JSON.stringify(state));

    let newData = stateClone.data
  
    if(newData.firstName == null){
      stateClone.page = 0
    } else if(newData.college == null){
      stateClone.page = 1
    } else{
      stateClone.page = 3
    }
  
    props.stateChanger(stateClone)
  
}

function back(event, props){
  
    let state = props.state
  
    let stateClone = JSON.parse(JSON.stringify(state));
  
    stateClone.page = 1
  
    props.stateChanger(stateClone)
}

function createEditExpCards(props){

    let experiences = props.state.data.experiences

    const expItems = experiences.map((exp, index) => 
            <div key={index} className="card">
                <h5 key={index + "card-header"} className="card-header">{exp.expType}</h5>
                <div key={index + "card-body"} className="card-body">
                    <h5 key={index + "card-title"} className="card-title">{exp.position + ": " + exp.org}</h5>
                    <a key={index + "card-btn"} href="#" className="btn btn-light">Edit</a>
                </div>
            </div>
    )

    return expItems
}



function ExpMenu(props) {

  return (
    <>
        <div className="container">
            <div className="card-container">
                {createEditExpCards(props)}
            </div>
            <button type="submit" onClick={(e) => formSubmit(e, props)} className="btn btn-primary">Submit Application</button>
            <button
              onClick={(event) => back(event, props)}
              className="back btn btn-secondary"
            >
              Back
          </button>
        </div>
    </>
  )
}

export default ExpMenu