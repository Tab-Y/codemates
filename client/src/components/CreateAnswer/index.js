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
                <h2 class="answer" style={styles.h2}>Answer</h2>
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
            <button type="button" class="btn btn-primary solve-btn">Marked as Solved</button>
            <button type="button" class="btn btn-primary reply-btn">Reply.. </button>
            <section>
                <h2 class="other" style={styles.h2}>Other Answers</h2>
                <ul class="list-group other-list">
                    <li class="list-group-item" style={styles.list}>An item</li>
                    <li class="list-group-item" style={styles.list}>A second item</li>
                    <li class="list-group-item" style={styles.list}>A third item</li>
                    <li class="list-group-item" style={styles.list}>A fourth item</li>
                    <li class="list-group-item" style={styles.list}>And a fifth one</li>
                </ul>
                <button type="button" class="btn btn-primary create-btn">Create Answer</button>
            </section>
        </div>
    );
};

export default CreateAnswer;