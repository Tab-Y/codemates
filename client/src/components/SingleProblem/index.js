import React from "react"

const SingleProblem = () => {

    return (
        <div>
            <section>
                <h2 class="single">Single Problem Title/Question</h2>
                <div class="row row-cols-1 row-cols-md-3 g-4 single-box">
                    <div class="col">
                        <div class="card h-100">
                            <div class="card-body">
                                <p class="card-text">Problem description</p>
                            </div>
                            <div class="card-footer">
                                <small class="text-muted">Created by username: date & time</small>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <h2 class="answers">Answers</h2>
                <ul class="list-group answer-box">
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

export default SingleProblem;