const API_KEY = `233daba8fcmsh18b28f632bf7100p19b650jsn212834482dbd`;

const searchCountry = () => {
    const city = document.getElementById('input').value;
    const url = `https://wft-geo-db.p.rapidapi.com/v1&${city}&${API_KEY}`;
    
    fetch(url)
        .then(res => res.json())
        .then(data => console.log(data));
}

