const REST_COUNTRIES = 'https://restcountries.com/v3.1/name/'
const countrriesOptions = 'fields=name,capital,population,flags,languages'

export function fetchCountries(name) {
    
    return fetch(`${REST_COUNTRIES}${name}?${countrriesOptions}`)
        .then(response => response.json())
        .catch(error => console.log(error))
}