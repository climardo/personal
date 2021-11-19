function hideItems() {
    const options = [
        "bitcoin",
        "ethereum",
        "analysis",
        "learn",
        "news",
        "official",
        "tools"
    ]

    let items = []

    for (let option in options) {
        items.push(document.getElementsByClassName(option))
    }

    console.log(items)
}

document.addEventListener('load', hideItems());
