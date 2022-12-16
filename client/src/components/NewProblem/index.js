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
    maxWidth: '18rem',
  },
  text: {
    color: '#051923',
  },
}

const NewProblem = () => {

  return (
    <div>
      <h2 style={styles.h2}>Create New Problem</h2>
      <div class="card border-success mb-3 create-card" style={styles.body}>
        <div class="card-header bg-transparent border-success" style={styles.text}>Problem Title/Question</div>
        <div class="card-body text-success">
          <h5 class="card-title" style={styles.text}>Question:</h5>
          <p class="card-text" style={styles.text}>The question description</p>
        </div>
        <div class="card-footer bg-transparent border-success" style={styles.text}>Bank Point reward: Must be at least 5 pts</div>
      </div>
      <button type="button" class="btn btn-primary crt-problem">Create Problem</button>
    </div>
  );
};

export default NewProblem;