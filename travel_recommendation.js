document.getElementById('searchForm').addEventListener('submit', showTravelDetails);

function showTravelDetails(event) {
    event.preventDefault();
    const place = document.getElementById('place').value;
    const apiUrl = './travel_recommendation_api.json';
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const travelInfo = document.getElementById('travelInfo');
            for (let key in data) {
                if (place == key) {
                   

                    travelInfo.innerHTML = `<div class="searchResult">
                                    <img src="./assets/images/sydney.jpg" class="card-img"/>
                                    <h2>Sydney, Austrailia </h2>
                                    <p>A beautirul city</p>
                                    <button>Visit</button>
                                    </div>`;
                }
            }
        })
        .catch(err => console.log(err))
}
