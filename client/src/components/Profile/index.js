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
      <h1 class="username" style={styles.text}>Username</h1>
      <section>
        <div class="card bank-point">
          <div class="card-header">
            Code Bank
          </div>
          <ul class="list-group list-group-flush point-system">
            <li class="list-group-item" style={styles.body}>An item</li>
            <li class="list-group-item" style={styles.body}>A second item</li>
            <li class="list-group-item" style={styles.body}>A third item</li>
          </ul>
        </div>
      </section>
      <section>
        <h2 class="post" style={styles.text}>Posted Problems</h2>
        <ul class="list-group" style={styles.history}>
          <li class="list-group-item" style={styles.body}>An item</li>
          <li class="list-group-item" style={styles.body}>A second item</li>
          <li class="list-group-item" style={styles.body}>A third item</li>
          <li class="list-group-item" style={styles.body}>A fourth item</li>
          <li class="list-group-item" style={styles.body}>And a fifth one</li>
        </ul>
        <button type="button" class="btn btn-link post-link">View more posted problems</button>
      </section>
      <section>
        <h2 class="solve">Solved Problems</h2>
        <ul class="list-group" style={styles.history}>
          <li class="list-group-item" style={styles.body}>An item</li>
          <li class="list-group-item" style={styles.body}>A second item</li>
          <li class="list-group-item" style={styles.body}>A third item</li>
          <li class="list-group-item" style={styles.body}>A fourth item</li>
          <li class="list-group-item" style={styles.body}>And a fifth one</li>
        </ul>
        <button type="button" class="btn btn-link solve-link">View more solved problems</button>
      </section>
    </div>

  );
};

export default Profile;