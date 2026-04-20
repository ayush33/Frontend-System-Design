import React from "react";
import { getData } from "../Services/userData";
import useDebounce from "../hooks/useDebounce";

export default function AutoComplete() {

    const [search, setSearch] = React.useState('')
    const [suggestion, setSuggestion] = React.useState([])
    const [showDropdown, setShowDropdown] = React.useState(false);
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState(null);

    const [page, setPage] = React.useState(1)
    const[hasMore, setHasMore] = React.useState(false)
    const[loadingMore, setLoadingMore] = React.useState(false)


    async function onSearch(value) {
        if (!value) {
            setSuggestion([]);
            setShowDropdown(false);
            setHasMore(false);
            return;

        }
        try {
            setLoading(true);
            setError(null);
            const searchData = await getData(value);
            setSuggestion([...searchData]);
            setShowDropdown(true);
        } catch (err) {
            setError("Something went wrong. Try again.");
            setSuggestion([]);
        } finally {
            setLoading(false);
        }
    }

    const onSearchDebounce = useDebounce(onSearch)

    function handleSelect(item) {
        setSearch(item);
        setSuggestion([]);
        setShowDropdown(false);
    }

    function handleChange(e) {
        let value = e.target.value
        setSearch(value)
        onSearchDebounce(value)
    }
    function handleBlur() {
        setTimeout(() => setShowDropdown(false), 150);
    }
    
    return (
        <div style={{ position: "relative", width: "300px" }}>
            <input
                id="search-input"
                name="search"
                value={search}
                onChange={handleChange}
                onBlur={handleBlur}
                onFocus={() => suggestion.length > 0 && setShowDropdown(true)}
                autoComplete="off"
                placeholder="Search books..."
                style={{ width: "100%", padding: "8px" }}
            />
            {showDropdown && !loading && suggestion.length > 0 && (
                <ul style={{
                    position: "absolute",
                    top: "100%",
                    left: 0,
                    right: 0,
                    margin: 0,
                    padding: 0,
                    listStyle: "none",
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                    backgroundColor: "#fff",
                    zIndex: 1000,
                    maxHeight: "200px",
                    overflowY: "auto",
                }}>
                    {suggestion.map((item) => (
                        <li
                            key={item}
                            onMouseDown={() => handleSelect(item)}
                            style={{ padding: "8px 12px", cursor: "pointer" }}
                            onMouseEnter={e => e.target.style.backgroundColor = "#f0f0f0"}
                            onMouseLeave={e => e.target.style.backgroundColor = "#fff"}
                        >
                            {item}
                        </li>
                    ))}
                </ul>
            )}

        </div>
    )
}