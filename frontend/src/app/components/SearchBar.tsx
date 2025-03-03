"use client";

const SearchBar = ({ onSearch }: { onSearch: (query: string) => void }) => {
    return (
        <input
            type="text"
            onChange={(e) => onSearch(e.target.value)}
            placeholder="Search crypto..."
            className="search-bar"
        />
    );
};

export default SearchBar;
