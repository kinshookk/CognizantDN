import React from 'react';

export default function CourseDetails(props) {
  return (
    <div className="section">
      <h2>Course Details</h2>
      <ul>
        {props.courses.map((course) => (
          <div key={course.id}>
            <h3>{course.title}</h3>
            <p>{course.date}</p>
          </div>
        ))}
      </ul>
    </div>
  );
}
