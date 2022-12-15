import React from "react"

const styles = {
    h2: {
        color: '#c4fff9',
        marginLeft: '8cm',
        marginTop: '8cm',
    },
    list: {
        backgroundColor: '#c4fff9',
        color: '#051923',
    }
}

const SavedProblems = () => {

    return (
        <div>
            <h2 style={styles.h2}>Saved Problems</h2>
            <ul class="list-group problem-list">
                <li class="list-group-item" style={styles.list}>An item</li>
                <li class="list-group-item" style={styles.list}>A second item</li>
                <li class="list-group-item" style={styles.list}>A third item</li>
                <li class="list-group-item" style={styles.list}>A fourth item</li>
                <li class="list-group-item" style={styles.list}>And a fifth one</li>
            </ul>
        </div>
    );
};

export default SavedProblems;