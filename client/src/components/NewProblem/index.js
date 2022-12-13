import React from "react"

const NewProblem = () => {

  return (
    <div>
      <h2>Create New Problem</h2>
      <div class="card border-success mb-3" style="max-width: 18rem;">
        <div class="card-header bg-transparent border-success">Problem Title/Question</div>
        <div class="card-body text-success">
          <h5 class="card-title">Question:</h5>
          <p class="card-text">The question description</p>
        </div>
        <div class="card-footer bg-transparent border-success">Bank Point reward: Must be at least 5 pts</div>
      </div>
      <button type="button" class="btn btn-primary">Create Problem</button>
    </div>
  );
};

export default NewProblem;