import { useState } from "react";

// Usado para fazer a passagem de página
import { useNavigate } from "react-router-dom";

const SearchForm = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate("/search?q=" + query);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Pesquisar"
        onChange={(e) => setQuery(e.target.value)}
      />
      <input type="submit" value="Buscar" />
    </form>
  );
};

export default SearchForm;
