import { useState } from "react";
import { fetchReq } from "redux/dictionary";
import { useDispatch } from "react-redux";

const Form = () => {
  const [input, setinput] = useState("");
  const dispatch = useDispatch();

  const handleInput = (event) => {
    setinput(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!input) return;
    dispatch(fetchReq(input));
    setinput("");
  };

  return (
    <form
      className="flex border w-full border-gray-300 p-2 rounded-lg gap-2"
      onSubmit={handleSubmit}
    >
      <svg
        className="stroke-slate-300"
        width="24"
        height="24"
        xmlns="http://www.w3.org/2000/svg"
        fill-rule="evenodd"
        clip-rule="evenodd"
      >
        <path d="M15.853 16.56c-1.683 1.517-3.911 2.44-6.353 2.44-5.243 0-9.5-4.257-9.5-9.5s4.257-9.5 9.5-9.5 9.5 4.257 9.5 9.5c0 2.442-.923 4.67-2.44 6.353l7.44 7.44-.707.707-7.44-7.44zm-6.353-15.56c4.691 0 8.5 3.809 8.5 8.5s-3.809 8.5-8.5 8.5-8.5-3.809-8.5-8.5 3.809-8.5 8.5-8.5z" />
      </svg>
      <input
        className="w-full focus:outline-none text-gray-800 font-mono"
        value={input}
        onChange={handleInput}
        placeholder="Search here"
      />
    </form>
  );
};

export default Form;
