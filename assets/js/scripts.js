let checkboxes = [
    "bitcoin",
    "ethereum",
    "analysis",
    "learn",
    "news",
    "official",
    "tools"
]

let allItems = []
for (let j = 0; j < checkboxes.length; j++) {
    let checkbox = checkboxes[j]
    allItems[checkbox] = document.getElementsByClassName(checkbox)
    /* allItems.push({[checkbox]: document.getElementsByClassName(checkbox)}) */
}

function applyOptions() {

    function addOrRemove(array, value) {
        var index = array.indexOf(value);

        if (index === -1) {
            array.push(value);
        } else {
            array.splice(index, 1);
        }
    }
    let uncheckedOptions = []
    for (let i = 0; i < options.length; i++) {
        if (options[i].checked == false) {
            addOrRemove(uncheckedOptions, options[i].value)
        }
    }

    for (let k = 0; k < uncheckedOptions.length; k++) {
        let unchecked = uncheckedOptions[k]
        for (let l = 0; l < allItems[unchecked].length; l++) {
            allItems[unchecked][l].classList.add("d-none")
        }
    }

    let checkedOptions = checkboxes.filter(x => !uncheckedOptions.includes(x))

    for (let k = 0; k < checkedOptions.length; k++) {
        let checked = checkedOptions[k]
        for (let l = 0; l < allItems[checked].length; l++) {
            allItems[checked][l].classList.remove("d-none")
        }
    }
    console.log(checkedOptions)

}

let options = document.getElementsByClassName("form-check-input")
document.addEventListener('change', applyOptions);
