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
                <div class="row row-cols-1 row-cols-md-3 g-4 answer-card">
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
                <button type="button" class="btn btn-primary solve-btn">Marked as Solved</button>
                <button type="button" class="btn btn-primary reply-btn">Reply.. </button>
            </section>
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