import React from 'react';

export default function BlogDetails(props) {
  return (
    <div className="section">
      <h2>Blog Details</h2>
      <ul>
        {props.blogs.map((blog) => (
          <div key={blog.id}>
            <h3>{blog.title}</h3>
            <p><strong>{blog.author}</strong></p>
            <p>{blog.content}</p>
          </div>
        ))}
      </ul>
    </div>
  );
}
