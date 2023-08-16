function toggleSearchbar()
{
    let displayValue = (document.getElementById("searchbar").style.display === "none") 
        ? "block" : "none";
    document.getElementById("searchbar").style.display = displayValue;
}

function closeSearchbar()
{
    document.getElementById("searchbar").style.display = "none";
}