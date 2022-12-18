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

                <h2 className="single" style={styles.h2}>Single Problem Title/Question</h2>

                <div className="row row-cols-1 row-cols-md-3 g-4 single-box">

                    <div className="col">

                        <div className="card h-100">

                            <div className="card-body" style={styles.card}>
                                <p className="card-text">Problem description</p>
                            </div>

                            <div className="card-footer">
                                <small className="text-muted" style={styles.card}>Created by username: date & time</small>
                            </div>

                        </div>

                    </div>

                </div>

            </section>

            <section>

                <h2 className="answers" style={styles.h2}>Answers</h2>

                <ul className="list-group answer-box">
                    <li className="list-group-item" style={styles.card}>An item</li>
                    <li className="list-group-item" style={styles.card}>A second item</li>
                    <li className="list-group-item" style={styles.card}>A third item</li>
                    <li className="list-group-item" style={styles.card}>A fourth item</li>
                    <li className="list-group-item" style={styles.card}>And a fifth one</li>
                </ul>

            </section>

        </div>
    );
};

export default SingleProblem;