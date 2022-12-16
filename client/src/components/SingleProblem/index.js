import React from "react"

const styles = {
    h2: {
        color: '#c4fff9',
    },
    card: {
        backgroundColor: '#c4fff9',
        color: '#051923',
    }
}

const SingleProblem = () => {

    return (
        <div>
            <section>
                <h2 class="single" style={styles.h2}>Single Problem Title/Question</h2>
                <div class="row row-cols-1 row-cols-md-3 g-4 single-box">
                    <div class="col">
                        <div class="card h-100">
                            <div class="card-body" style={styles.card}>
                                <p class="card-text">Problem description</p>
                            </div>
                            <div class="card-footer">
                                <small class="text-muted" style={styles.card}>Created by username: date & time</small>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <h2 class="answers" style={styles.h2}>Answers</h2>
                <ul class="list-group answer-box">
                    <li class="list-group-item" style={styles.card}>An item</li>
                    <li class="list-group-item" style={styles.card}>A second item</li>
                    <li class="list-group-item" style={styles.card}>A third item</li>
                    <li class="list-group-item" style={styles.card}>A fourth item</li>
                    <li class="list-group-item" style={styles.card}>And a fifth one</li>
                </ul>
            </section>
        </div>
    );
};

export default SingleProblem;