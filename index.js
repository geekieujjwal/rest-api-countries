const getCountries = async (url) => {
  const res = await fetch(url);
  const data = await res.json();
  console.log(data);
  data.forEach((item) => {
    // console.log(item);
    document.getElementById("countries").innerHTML += `
        <div class = "country">
            <img class = "imgOfCountry" src=${item.flag} alt="img" />
            <div class="country-info">
                <h3 class = "nameOfCountry">   ${item.name}</h3>
                <p>     Population: ${item.population}</p>
                <p>     Region: ${item.region}</p>
                <p>     Capital: ${item.capital}</p>
            </div>
        </div>
    `;
  });
};

getCountries("/data.json");
