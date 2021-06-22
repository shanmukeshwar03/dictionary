import { useState } from 'react';
import { fetchReq } from 'redux/dictionary';
import { useDispatch } from 'react-redux';
import Result from 'components/Result';

const Form = () => {
  const [input, setinput] = useState('');
  const dispatch = useDispatch();

  const handleInput = (event) => {
    setinput(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!input) return;
    dispatch(fetchReq(input));
    setinput('');
  };

  return (
    <div className="form__container">
      <form onSubmit={handleSubmit}>
        <input value={input} onChange={handleInput} placeholder="search here" />
        <button type="submit">
          <img src="/search.svg" />
        </button>
      </form>
      <Result />
    </div>
  );
};

export default Form;
