import React from "react";

const PostedProblems = () => {

    return (
        <div>
            <h2>Posted Problems</h2>
            <button type="button" class="btn btn-primary">Back to Profile</button>
            <section class="solved-list">
                <ul class="list-group">
                    <li class="list-group-item">An item</li>
                    <li class="list-group-item">A second item</li>
                    <li class="list-group-item">A third item</li>
                    <li class="list-group-item">A fourth item</li>
                    <li class="list-group-item">And a fifth one</li>
                </ul>
            </section>
        </div>
    );
};

export default PostedProblems;