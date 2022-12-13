import React from "react"

const NewAnswer = () => {

    return (
        <div>
            <section class="new-answer">
                <h2>Create New Answer</h2>
                <div class="card" style="width: 18rem;">
                    <div class="card-body">
                        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    </div>
                    <a href="#" class="btn btn-primary">Post Answer</a>
                </div>
            </section>

            <section class="current-problem">
                <h2>Current Problem</h2>
                <div class="card border-success mb-3" style="max-width: 18rem;">
                    <div class="card-header bg-transparent border-success">Problem Title/Question</div>
                    <div class="card-body text-success">
                        <h5 class="card-title">Question:</h5>
                        <p class="card-text">The question description</p>
                    </div>
                    <div class="card-footer bg-transparent border-success">Bank Point reward: Must be at least 5 pts.</div>
                </div>
            </section>
        </div>
    );
};

export default NewAnswer;