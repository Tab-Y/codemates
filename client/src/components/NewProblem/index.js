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

    <div>

      <h2 style={styles.h2}>Create New Problem</h2>

      <div className="card border-success mb-3 create-card" style={styles.body}>

        <div className="card-header bg-transparent border-success" style={styles.text}>Problem Title/Question</div>

        <div className="card-body text-success">
          <h5 className="card-title" style={styles.text}>Question:</h5>
          <p className="card-text" style={styles.text}>The question description</p>
        </div>

        <div className="card-footer bg-transparent border-success" style={styles.text}>Bank Point reward: Must be at least 5 pts</div>

      </div>

      <button type="button" className="btn btn-primary crt-problem">Create Problem</button>
      
    </div>
  );
};

export default NewProblem;