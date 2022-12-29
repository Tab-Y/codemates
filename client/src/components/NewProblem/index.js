import React from "react"

const styles= {
  h2: {
      color: '#c4fff9',
      marginLeft: '20cm',
      marginTop: '5cm',
  },
  body: {
    background: '#c4fff9',
    borderColor: '#07beb8',
    fontFamily: 'Comfortaa',
  },
  text: {
    color: '#051923',
  },
}

const NewProblem = () => {

  return (

    <div className="newProblem">

      <h2 className="newProblemHeader">Create New Problem</h2>

      <div className="card border-success mb-3 create-card" style={styles.body}>

        <div className="card-header bg-transparent border-success" style={styles.text}>Problem Title/Question</div>

        <div className="card-body text-success">
          <h5 className="card-title" style={styles.text}>Question:</h5>
          <p className="card-text" style={styles.text}><input style={{border: "none", backgroundColor: "#c4fff9", width:"22rem", height: "16rem"}} name="answerDescription" type="answerDescription" placeholder="The question description"></input></p>
        </div>

        <div className="card-footer bg-transparent border-success" style={styles.text}>Bank Point reward: <input style={{backgroundColor: "rgb(196, 255, 249)", border: "none"}} name="karmaPoints" type="karmaPoints" placeholder="Must be at least 5 pts"></input></div>

      </div>

      <button type="button" className="btn btn-primary crt-problem">Create Problem</button>
      
    </div>
  );
};

export default NewProblem;