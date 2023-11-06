window.onload = function()
{
    let icon = document.getElementsByClassName("tema")[0];

    let page_theme = "dark";

    if(localStorage.getItem("page_theme") != null)
    {
        page_theme = localStorage.getItem("page_theme");
    }
        
    if(page_theme == "light")
    {
        icon.src = "sotet.png";
        page_theme = "dark";
        tema_page_theme();
    }
    else if(page_theme == "dark")
    {
        icon.src = "vilagos.png";
        page_theme = "light";
        tema_sotet();
    }    

    let weekdays = [
        hetfo = [{Ora: "12", Esemeny: "asd"}],
        kedd = [{Ora: "10", Esemeny: "fwef"}],
        szerda = [{Ora: "23", Esemeny: "asdasd"}],
        csutortok = [{Ora: "24", Esemeny: "fdsfwer"}],
        pentek = [{Ora: "23", Esemeny: "asdger"}]        
    ]

    let weekend = [
        szombat = [{Ora: "43", Esemeny: "hgerge"}],
        vasarnap = [{Ora: "23", Esemeny: "saderfg"}]
    ]

    let ki_week = '<div class="hetk">';

    display_week(weekdays);
    ki_week += '</div>'

    ki_week += '<div class="hetv">'
    display_week(weekend);
    ki_week += '</div>'

    document.getElementsByClassName("napok")[0].innerHTML += ki_week;

    function display_week(week)
    {
        for (const key in week) {
            if (Object.hasOwnProperty.call(week, key)) {
                const element = week[key];
                    
                ki_week += display_day(element);
            }
        }
    }
    

    function display_day(day)
    {
        let ki_day = '<div>';
        console.log(day);
        for (const key in day) {
            if (Object.hasOwnProperty.call(day, key)) {
                const element = day[key];
                
                ki_day += format_event(element);
            }
        }

        ki_day += '</div>';
    }

    function format_event(event)
    {
        let ki_event = `<div class="esemeny">
            <div class="ora">${event.Ora}</div><div class="nev">${event.Esemeny}</div>
            </div>`;
    }

    icon.onclick = function()
    {
        if(page_theme == "light")
        {
            icon.src = "sotet.png";
            page_theme = "dark";
            tema_page_theme();
        }
        else if(page_theme == "dark")
        {
            icon.src = "vilagos.png";
            page_theme = "light";
            tema_sotet();
        }         
    }

    function tema_sotet()
    {
        document.documentElement.style.setProperty("--main-bg-color", "rgba(64, 64, 64, 0.6)");
        document.documentElement.style.setProperty("--sec-bg-color", "rgba(64, 64, 64, 0.9)");

        document.body.style.color = "white";

        document.body.style.backgroundImage = "url('sotet_hkep.jpg')";

        localStorage.setItem("page_theme", "dark");
    }

    function tema_page_theme()
    {
        document.documentElement.style.setProperty("--main-bg-color", "rgba(255, 255, 255, 0.6)");
        document.documentElement.style.setProperty("--sec-bg-color", "rgba(255, 255, 255, 0.9)");

        document.body.style.color = "black";

        document.body.style.backgroundImage = "url('vilagos_hkep.jpg')";
        
        localStorage.setItem("page_theme", "light");
    }
}