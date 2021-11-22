// Used in applyOptions() to determine which checkboxes are checked
let options = document.getElementsByClassName("form-check-input")

// Set value 
let checkboxValues = []
for (let i = 0; i < options.length; i++) {
    // Watch to the checkboxes and call applyOptions() when detected
    options[i].addEventListener('change', applyOptions)

    // Add text values of each option to array checkboxValues
    checkboxValues[i] = options[i].value
}

// Array containing all items on the page organized by tags in the next for() statement.
// allItems["bitcoin"] is an array of elements on the page with a "bitcoin" tag
let allItems = []
for (let i = 0; i < checkboxValues.length; i++) {
    let checkbox = checkboxValues[i]
    allItems[checkbox] = document.getElementsByClassName(checkbox)
}

// A function to remove duplicates from an array
function addOrRemove(array, value) {
    var index = array.indexOf(value);

    if (index === -1) {
        array.push(value);
    } else {
        array.splice(index, 1);
    }
}

// A function to shows/hide elements based on the state of matching checkboxValues
function applyOptions() {
    let uncheckedOptions = [] // Initialize array
    let checkedOptions = [] // Initialize array

    // Add unchecked options to the array
    for (let i = 0; i < options.length; i++) {
        if (options[i].checked == true) {
            addOrRemove(checkedOptions, options[i].value)
        } else {
            addOrRemove(uncheckedOptions, options[i].value)
        }
    }

    // Hide unchecked options by adding d-none class
    for (let i = 0; i < uncheckedOptions.length; i++) {
        let unchecked = uncheckedOptions[i]
        for (let j = 0; j < allItems[unchecked].length; j++) {
            allItems[unchecked][j].classList.add("d-none")
        }
    }

    // Show checked options by removing d-none class
    for (let i = 0; i < checkedOptions.length; i++) {
        let checked = checkedOptions[i]
        for (let j = 0; j < allItems[checked].length; j++) {
            allItems[checked][j].classList.remove("d-none")
        }
    }
}
