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

function toggleSlider(slider)
{
    let displayValue = (document.getElementById(slider).style.display === "none") 
        ? "block" : "none";
    document.getElementById(slider).style.display = displayValue;
    document.getElementById(slider + "SliderClose").style.display = displayValue;
}