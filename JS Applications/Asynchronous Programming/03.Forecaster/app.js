function attachEvents() {
    const conditions = {
        Sunny: '&#x2600',
        'Partly sunny': '&#x26C5',
        Overcast: '&#x2601',
        Rain: '&#x2614',
        Degrees: '&#176;',
      };
    
    document.getElementById('submit').addEventListener('click', async () => {
        document.getElementById('forecast').style.display = 'block';
        let locationInput = document.getElementById('location').value;
        let locationCode;

        try {
            locationCode = await searchLocation(locationInput);
            console.log(locationCode);
        } catch (error) {
            document.getElementById('forecast').textContent = 'Error';
            return;
        }

        const todayWeather = getTodayWeather(locationCode);
        const upcomingWeather = getTodayWeather(locationCode);

        const forecastDiv = document.createElement('div')
        forecastDiv.classList.add('forecasts')

        const conditionSymbol = document.createElement('span');
        conditionSymbol.classList.add(['conditon', 'symbol']);
        conditionSymbol.innerHTML = conditions[todayWeather.forecast.condition];
        forecastDiv.appendChild(conditionSymbol);

        const conditionSpan = document.createElement('span');
        conditionSpan.classList.add('condition');

        conditionSpan.appendChild(
            createElement('span', {classList : ['forecast-data']}, todayWeather.name)
        );

        conditionSpan.appendChild(
            createElement('span', {classList : ['forecast-data']},
             `${todayWeather.forecast.low}&#176;/${todayWeather.forecast.high}${conditions.Degrees}`
            )
        )

        conditionSpan.appendChild(
            createElement('span', {classList : ['forecast-data']}, todayWeather.condition)
        );

        forecastDiv.append(conditionSpan);
        document.getElementById('current').appendChild(forecastDiv);

        //3-Day forecast div
        
    })


    async function searchLocation(location) {
        const res = await fetch('http://localhost:3030/jsonstore/forecaster/locations');
        const data = await res.json();

        const foundLocation = data.find(city => city.name.toLowerCase() === location.toLowerCase());
        console.log(foundLocation);
        if (foundLocation) {
            return foundLocation.code;
        } 
        
        throw new Error('Location not found');
    }

    async function getTodayWeather(code) {
        const res = await fetch(`http://localhost:3030/jsonstore/forecaster/today/${code}`);
        
        return await res.json();
    }

    async function getUpcomingWeather(code) {
        const res = fetch(`http://localhost:3030/jsonstore/forecaster/upcoming/${code}`)
        
        return await res.json();
    }
}

attachEvents();