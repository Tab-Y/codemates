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

const NewAnswer = () => {

    return (
        <div>
            <section className="new-answer">
                <h2 className="new" style={styles.h2}>Create New Answer</h2>
                <div className="card create-box" style={styles.card}>
                    <div className="card-body">
                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    </div>
                </div>
                <a href="#" className="btn btn-primary post-btn">Post Answer</a>
            </section>

            <section className="current-problem">
                <h2 className="current" style={styles.h2}>Current Problem</h2>
                <div className="card border-success mb-3 current-box" style={styles.card}>
                    <div className="card-header bg-transparent border-success">Problem Title/Question</div>
                    <div className="card-body text-success">
                        <h5 className="card-title" style={styles.card}>Question:</h5>
                        <p className="card-text" style={styles.card}>The question description</p>
                    </div>
                    <div className="card-footer bg-transparent border-success">Bank Point reward: Must be at least 5 pts.</div>
                </div>
            </section>
        </div>
    );
};

export default NewAnswer;