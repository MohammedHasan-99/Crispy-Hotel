let menueBtn = document.getElementById('menueBtn')
let menue = document.getElementById("menue")

menueBtn.setAttribute('onclick', 'displayMenue()')

function displayMenue(){
    if(menue.getAttribute('style') == 'display:block!important;')
        menue.setAttribute('style', 'display:nonegit!important;')
    else
        menue.setAttribute('style', 'display:block!important;')
}


