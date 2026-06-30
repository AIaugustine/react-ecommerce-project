function SearchBar() {
  return (
    <div className="input-group">
      <input
        className="form-control"
        type="search"
        placeholder="Search for products"
      />

      <button className="btn search-btn">
        <i className="bi bi-search"></i>
      </button>
    </div>
  );
}

export default SearchBar;
