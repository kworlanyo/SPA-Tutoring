/* eslint-disable react/prop-types */
import "./Input.css";

// Input Component receives the props from the App Component
function Input({ data, onChange }) {
  return (
    <>
      <label>
        Title
        <input
          type="text"
          name="title"
          value={data.title}
          onChange={onChange}
        />
      </label>
      <label>
        Email
        <input
          type="email"
          name="email"
          value={data.email}
          onChange={onChange}
        />
      </label>
      <label>
        <textarea
          name="text"
          cols="30"
          rows="10"
          value={data.text}
          onChange={onChange}
          placeholder="Write your message here"
        />
      </label>
    </>
  );
}

export default Input;
