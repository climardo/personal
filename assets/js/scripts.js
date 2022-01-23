// Used in showTags() to determine which checkboxes are checked
let tags = document.getElementsByClassName("form-check-input")

// Set value 
let checkboxValues = []
for (let i = 0; i < tags.length; i++) {
    // Watch to the checkboxes and call showTags() when detected
    tags[i].addEventListener('change', showTags)

    // Add text values of each option to array checkboxValues
    checkboxValues[i] = tags[i].value
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
function showTags() {
    let uncheckedOptions = [], checkedOptions = [] // Initialize array

    // Add checked and unchecked tags to the each array
    for (let i = 0; i < tags.length; i++) {
        if (tags[i].checked == true) {
            addOrRemove(checkedOptions, tags[i].value)
        } else {
            addOrRemove(uncheckedOptions, tags[i].value)
        }
    }

    // Hide unchecked tags by adding d-none class
    for (let i = 0; i < uncheckedOptions.length; i++) {
        let unchecked = uncheckedOptions[i]
        for (let j = 0; j < allItems[unchecked].length; j++) {
            allItems[unchecked][j].classList.add("d-none")
        }
    }

    // Show checked tags by removing d-none class
    for (let i = 0; i < checkedOptions.length; i++) {
        let checked = checkedOptions[i]
        for (let j = 0; j < allItems[checked].length; j++) {
            allItems[checked][j].classList.remove("d-none")
        }
    }
}
