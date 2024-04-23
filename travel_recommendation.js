const searchText = document.getElementById('searchText');
const main = document.getElementById('main');

function clearInput() {
    searchText.value = ""
}

function myfunc() {

    // Remove existing container if it exists
    const existingContainer = document.getElementById('container');
    if (existingContainer) {
        main.removeChild(existingContainer);
    }

    // Create a new container
    const container = document.createElement('div');
    container.setAttribute('id', 'container');
    container.classList.add('searchResult')
    main.appendChild(container);

    const time = document.createElement('div');
    time.classList.add("time")
    time.setAttribute('id', "time")
    time.textContent = "00:00:00"
    container.appendChild(time)

    //time
    // Get the current date and time
    var now = new Date();

    // Extract hours, minutes, and seconds
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();

    // Add leading zeros if necessary
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    // Display the time
    var currentTime = hours + ':' + minutes + ':' + seconds;
    document.getElementById('time').innerHTML = `Current Local Time (Nepal / Kathmandu): ${currentTime}`



    fetch('travel_recommendation_api.json')
        .then(res => res.json())
        .then(data => {
            const value = searchText.value.toLowerCase();
            if (value === "countries" || value === "country") {
                data.countries.map(getCountry);
            } else if (value === "temples" || value === "temple") {
                data.temples.map(getTemple);
            } else if (value === "beaches" || value === "beach") {
                data.beaches.map(getBeach);
            } else {
                data.countries.map(getMore)
            }
        })
        .catch(err => console.log(err));
}

function getCountry(value, index, array) {
    for (let i = 0; i < value.cities.length; i++) {
        const img = document.createElement('img');
        img.classList.add('card-img')
        const name = document.createElement('h2');
        const description = document.createElement('p');
        const imageUrl = value.cities[i].imageUrl;
        img.setAttribute('src', imageUrl);
        name.textContent = value.cities[i].name;
        description.textContent = value.cities[i].description;
        container.appendChild(img);
        container.appendChild(name);
        container.appendChild(description);
    }
}

function getTemple(value, index, array) {
    const img = document.createElement('img');
    img.classList.add('card-img')

    const name = document.createElement('h2');
    const description = document.createElement('p');
    const imageUrl = value.imageUrl;
    img.setAttribute('src', imageUrl);
    name.textContent = value.name;
    description.textContent = value.description;
    container.appendChild(img);
    container.appendChild(name);
    container.appendChild(description);
}

function getBeach(value, index, array) {
    const img = document.createElement('img');
    img.classList.add('card-img')

    const name = document.createElement('h2');
    const description = document.createElement('p');
    const imageUrl = value.imageUrl;
    img.setAttribute('src', imageUrl);
    name.textContent = value.name;
    description.textContent = value.description;
    container.appendChild(img);
    container.appendChild(name);
    container.appendChild(description);
}

function getMore(value, index, array) {
    const val = searchText.value.toLowerCase();
    for (let i = 0; i < array.length; i++) {
        const nn = array[i].cities[index].name.toString();
        console.log(nn)
        const word = nn.split(',')[0].trim().toLowerCase()
        const bword = nn.split(',')[1].trim().toLowerCase();
        if (word == val || bword == val) {
            console.log('exists');
            console.log(array[index])

            const img = document.createElement('img');
            img.classList.add('card-img')

            const name = document.createElement('h2');
            const description = document.createElement('p');
            const imageUrl = array[i].cities[index].imageUrl;
            img.setAttribute('src', imageUrl);
            name.textContent = array[i].cities[index].name;
            description.textContent = array[i].cities[index].description;
            container.appendChild(img);
            container.appendChild(name);
            container.appendChild(description);

        }
    }

}
