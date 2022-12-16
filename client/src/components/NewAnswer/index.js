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
            <section class="new-answer">
                <h2 class="new" style={styles.h2}>Create New Answer</h2>
                <div class="card create-box" style={styles.card}>
                    <div class="card-body">
                        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    </div>
                </div>
                <a href="#" class="btn btn-primary post-btn">Post Answer</a>
            </section>

            <section class="current-problem">
                <h2 class="current" style={styles.h2}>Current Problem</h2>
                <div class="card border-success mb-3 current-box" style={styles.card}>
                    <div class="card-header bg-transparent border-success">Problem Title/Question</div>
                    <div class="card-body text-success">
                        <h5 class="card-title" style={styles.card}>Question:</h5>
                        <p class="card-text" style={styles.card}>The question description</p>
                    </div>
                    <div class="card-footer bg-transparent border-success">Bank Point reward: Must be at least 5 pts.</div>
                </div>
            </section>
        </div>
    );
};

export default NewAnswer;