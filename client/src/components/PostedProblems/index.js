import React from "react";

const styles = {
    h2: {
        color: '#c4fff9',
        marginLeft: '8cm',
        marginTop: '8cm',
        fontFamily: 'Comfortaa',
    },
    list: {
        backgroundColor: '#c4fff9',
        color: '#051923',
    }
}

const PostedProblems = () => {

    return (

        <div>

            <h2 style={styles.h2}>Posted Problems</h2>

            <button type="button" className="btn btn-primary post-back-btn">Back to Profile</button>

            <section className="solved-list">

                <ul className="list-group">
                    <li className="list-group-item" style={styles.list}>An item</li>
                    <li className="list-group-item" style={styles.list}>A second item</li>
                    <li className="list-group-item" style={styles.list}>A third item</li>
                    <li className="list-group-item" style={styles.list}>A fourth item</li>
                    <li className="list-group-item" style={styles.list}>And a fifth one</li>
                </ul>

            </section>
            
        </div>
    );
};

export default PostedProblems;