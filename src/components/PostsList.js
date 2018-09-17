import React from "react";

import posts from "../posts";
import {AuthConsumer} from "../authContext";
import Can from "./Can";

const PostsList = () => (
  <AuthConsumer>
    {({user}) => (
      <div>
        <h2>Posts List</h2>
        <table className="table">
          <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Title</th>
            <th scope="col">Actions</th>
          </tr>
          </thead>
          <tbody>
          {posts.map((post, index) => (
            <tr key={post.id}>
              <th scope="row">{index + 1}</th>
              <td>{post.title}</td>
              <td>
                <Can
                  role={user.role}
                  perform="posts:edit"
                  data={{
                    userId: user.id,
                    postOwnerId: post.ownerId
                  }}
                  yes={() => (
                    <button className="btn btn-sm btn-default">
                      Edit Post
                    </button>
                  )}
                />
                <Can
                  role={user.role}
                  perform="posts:delete"
                  yes={() => (
                    <button className="btn btn-sm btn-danger">
                      Delete Post
                    </button>
                  )}
                />
              </td>
            </tr>
          ))}
          </tbody>
        </table>
      </div>
    )}
  </AuthConsumer>
);

export default PostsList;
