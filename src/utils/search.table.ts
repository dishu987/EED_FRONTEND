export const handleSearch = (
    e: React.ChangeEvent<HTMLInputElement>,
    tableRows: any,
    setSearchValue: any,
    setNotFound: any
) => {
    const val = e.target.value.trim().replace(/ +/g, " ").toLowerCase();
    let i = 0;
    tableRows.forEach((row: any) => {
        const text = row.textContent?.replace(/\s+/g, " ").toLowerCase() || "";
        row.style.display = text.includes(val) ? "" : "none";
        if (row.style.display === "none") {
            ++i;
        }
    });
    if (tableRows.length === i) {
        setNotFound(true);
    } else {
        setNotFound(false);
    }
    setSearchValue(val);
};