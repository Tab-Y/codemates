import React from "react"

const styles = {
    h2: {
        color: '#c4fff9',
    },
    list: {
        backgroundColor: '#c4fff9',
        color: '#051923',
    }
}

const CreateAnswer = () => {

    return (
        <div>
            <section>
                <h2 className="answer" style={styles.h2}>Answer</h2>
                <div className="row row-cols-1 row-cols-md-3 g-4 answer-card">
                    <div className="col">
                        <div className="card h-100">
                            <div className="card-body">
                                <p className="card-text">Problem description</p>
                            </div>
                            <div className="card-footer">
                                <small className="text-muted">Created by username: date & time</small>
                            </div>
                        </div>
                    </div>
                </div>
                <button type="button" className="btn btn-primary solve-btn">Marked as Solved</button>
                <button type="button" className="btn btn-primary reply-btn">Reply.. </button>
            </section>
            <section>
                <h2 className="other" style={styles.h2}>Other Answers</h2>
                <ul className="list-group other-list">
                    <li className="list-group-item" style={styles.list}>An item</li>
                    <li className="list-group-item" style={styles.list}>A second item</li>
                    <li className="list-group-item" style={styles.list}>A third item</li>
                    <li className="list-group-item" style={styles.list}>A fourth item</li>
                    <li className="list-group-item" style={styles.list}>And a fifth one</li>
                </ul>
                <button type="button" className="btn btn-primary create-btn">Create Answer</button>
            </section>
        </div>
    );
};

export default CreateAnswer;