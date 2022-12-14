import React from "react"

const CreateAnswer = () => {

    return (
        <div>
            <section>
                <h2 class="answer">Answer</h2>
            </section>
            <div class="card-group">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">This is the answer</h5>
                        <p class="card-text">Answer description</p>
                        <p class="card-text"><small class="text-muted">Created by username: date & time</small></p>
                    </div>
                </div>
            </div>
            <button type="button" class="btn btn-primary create-btn">Create Answer</button>
            <section>
                <h2 class="other">Other Answers</h2>
                <ul class="list-group">
                    <li class="list-group-item">An item</li>
                    <li class="list-group-item">A second item</li>
                    <li class="list-group-item">A third item</li>
                    <li class="list-group-item">A fourth item</li>
                    <li class="list-group-item">And a fifth one</li>
                </ul>
            </section>
        </div>
    );
};

export default CreateAnswer;