import React from "react";

const Profile = () => {

  return (
    <div>
      <h1>Username</h1>
      <section>
        <div class="card bank-point" style="width: 18rem;">
          <div class="card-header">
            Code Bank
          </div>
          <ul class="list-group list-group-flush point-system">
            <li class="list-group-item">An item</li>
            <li class="list-group-item">A second item</li>
            <li class="list-group-item">A third item</li>
          </ul>
        </div>
      </section>
      <section>
        <h2 class="post">Posted Problems</h2>
        <ul class="list-group post-history">
          <li class="list-group-item">An item</li>
          <li class="list-group-item">A second item</li>
          <li class="list-group-item">A third item</li>
          <li class="list-group-item">A fourth item</li>
          <li class="list-group-item">And a fifth one</li>
        </ul>
        <button type="button" class="btn btn-link post-btn">View more posted problems</button>
      </section>
      <section>
        <h2 class="solve">Solved Problems</h2>
        <ul class="list-group solved-history">
          <li class="list-group-item">An item</li>
          <li class="list-group-item">A second item</li>
          <li class="list-group-item">A third item</li>
          <li class="list-group-item">A fourth item</li>
          <li class="list-group-item">And a fifth one</li>
        </ul>
        <button type="button" class="btn btn-link solve-btn">View more solved problems</button>
      </section>
    </div>

  );
};

export default Profile;