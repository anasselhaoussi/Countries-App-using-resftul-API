
const mainSection = document.querySelector(".main-section"),
labelButton = mainSection.querySelector(".label button"),
inputField = mainSection.querySelector("input"),
regionsOptions = mainSection.querySelectorAll(".options a"),
countriesEl = document.querySelector(".countries-container"),
toggleBtn = document.querySelector(".modes")
let api;


const displayCountry = countries => {

    countries.forEach(country => {
    const countryEl = document.createElement('div')
    countryEl.classList.add('card')
    
    

    countryEl.innerHTML = `
                <img src="${country.flag}" alt="">
                <div class="infos">
                    <h3 class="country-name">${country.name}</h3>
                    <div class="details">
                        <div class="population detail">
                            <span>Population:</span>
                            <p>${country.population}</p>
                        </div>
                        <div class="region detail">
                            <span>Region:</span>
                            <p>${country.region}</p>
                        </div>
                        <div class="capital detail">
                            <span>Capital:</span>
                            <p>${country.capital}</p>
                        </div>
                    </div>
                </div>
   
`


    countriesEl.appendChild(countryEl)       
    });

}



const requestApi = () => {
    api = `https://restcountries.com/v2/all`
    fetchData()
    
}


const fetchData = () => {
    fetch(api).then(response => {
        return response.json()
    }).then(data => {
        displayCountry(data)
        
    })
}

requestApi()


labelButton.addEventListener('click' ,() => {
    mainSection.classList.toggle("isactive")
})

toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle("dark")
})

inputField.addEventListener('input', e => {
    const {value} = e.target
    const countryName = document.querySelectorAll(".country-name")

    countryName.forEach(name => {
        console.log(name.innerHTML);
        if(name.innerHTML.toLowerCase().includes(value.toLowerCase())){
            name.parentElement.parentElement.style.display = "block"

            
        } else {
            name.parentElement.parentElement.style.display = "none"

        }
        

    })
})

regionsOptions.forEach(option => {
    option.addEventListener('click', () => {
        console.log(option.innerHTML);

    const regionName = document.querySelectorAll(".region")

    regionName.forEach(region => {
        if(region.innerHTML.includes(option.innerHTML)){
            region.parentElement.parentElement.parentElement.style.display = "block"


        } else {
            region.parentElement.parentElement.parentElement.style.display = "none"

        }
        

    })
        
       
        

})

})
    