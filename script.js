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

function toggleSlider(slider, id)
{
    let displayValue = (document.getElementById(slider).style.display === "none") 
        ? "block" : "none";
    document.getElementById(slider).style.display = displayValue;
    document.getElementById(slider + "SliderClose").style.display = displayValue;
    if (id !== '')
    {
        if (id == 0)
        {
            for (var i = 0; i < 18; i++)
            {
                document.getElementById("slide" + (i + 1)).classList.remove("active");
            }
        }
        else
        {
            document.getElementById("slide" + id).classList.add("active");
        }
    }
}

function showMore()
{
    document.getElementById("gallery").style.height = "auto";
    document.getElementById("gallery").classList.add("galleryFull");
    document.getElementById("showMore").style.display = "none";
}