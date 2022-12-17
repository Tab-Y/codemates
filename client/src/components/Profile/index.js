import React from "react";

const styles = {
  text: {
    color: '#c4fff9'
  },
  body: {
    backgroundColor: '#c4fff9',
    color: '#051923',
  },
  history: {
    width: '70rem',
    marginLeft: '15cm',
    marginTop: '1cm'
  }
}

const Profile = () => {

  return (
    <div>
      <h1 className="username" style={styles.text}>Username</h1>
      <section>
        <div className="card bank-point">
          <div className="card-header">
            Code Bank
          </div>
          <ul className="list-group list-group-flush point-system">
            <li className="list-group-item" style={styles.body}>An item</li>
            <li className="list-group-item" style={styles.body}>A second item</li>
            <li className="list-group-item" style={styles.body}>A third item</li>
          </ul>
        </div>
      </section>
      <section>
        <h2 className="post" style={styles.text}>Posted Problems</h2>
        <ul className="list-group" style={styles.history}>
          <li className="list-group-item" style={styles.body}>An item</li>
          <li className="list-group-item" style={styles.body}>A second item</li>
          <li className="list-group-item" style={styles.body}>A third item</li>
          <li className="list-group-item" style={styles.body}>A fourth item</li>
          <li className="list-group-item" style={styles.body}>And a fifth one</li>
        </ul>
        <button type="button" className="btn btn-link post-link">View more posted problems</button>
      </section>
      <section>
        <h2 className="solve">Solved Problems</h2>
        <ul className="list-group" style={styles.history}>
          <li className="list-group-item" style={styles.body}>An item</li>
          <li className="list-group-item" style={styles.body}>A second item</li>
          <li className="list-group-item" style={styles.body}>A third item</li>
          <li className="list-group-item" style={styles.body}>A fourth item</li>
          <li className="list-group-item" style={styles.body}>And a fifth one</li>
        </ul>
        <button type="button" className="btn btn-link solve-link">View more solved problems</button>
      </section>
    </div>

  );
};

export default Profile;