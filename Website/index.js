const lockedButton = document.getElementsByClassName('flexfive button')

function passwordProtect() { 
    let input = prompt()
    if (input === 'yorkiepudpud') {return true}
    return false
}


lockedButton.addEventListener("click", colourChangeClick);