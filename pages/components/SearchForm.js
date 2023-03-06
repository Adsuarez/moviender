//react
import { useRef } from "react";

//styles
import FormStyles from "../../styles/Form.module.css";

export default function SearchForm({ setKeyword }) {
  const inputSearchRef = useRef("");

  const handleSearch = (event) => {
    event.preventDefault();
    inputSearchRef.current.value = "";
  };

  const handleChange = (event) => {
    setKeyword(event.target.value);
  };

  return (
    <form onSubmit={handleSearch} className={FormStyles.form}>
      <input
        name="searchInput"
        type="text"
        placeholder="write a movie title"
        onChange={handleChange}
        ref={inputSearchRef}
      ></input>
      <button>
        <i className="fa-solid fa-magnifying-glass" />
      </button>
    </form>
  );
}
