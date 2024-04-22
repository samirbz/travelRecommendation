document.getElementById('searchForm').addEventListener('submit', showTravelDetails);
const travelInfo = document.getElementById('travelInfo');

function showTravelDetails(event) {
    event.preventDefault();
    const place = document.getElementById('place').value;
    const apiUrl = './travel_recommendation_api.json';
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            for (let key in data) {
                if (place == key) {
                    const travelCard = document.createElement('div');
                    var imageUrlAsString = data.countries[1].cities[0].imageUrl.toString();

                    travelCard.innerHTML = `<div class="searchResult">
                                    <img src="${imageUrlAsString}" class="card-img"/>
                                    <h2>Sydney, Austrailia </h2>
                                    <p>A beautirul city</p>
                                    <button>Visit</button>
                                    </div>`;
                    travelInfo.appendChild(travelCard)
                }
            }
        })
        .catch(err => console.log(err))
}
