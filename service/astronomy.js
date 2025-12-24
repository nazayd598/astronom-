export async function getSunTimes(lat, lng) {
    // Sunrise-Sunset API: Koordinatlarla güneş vakitleri
    const url = `https://api.sunrise-sunset.org/json?lat=${lat}&lng=${lng}&formatted=0`;
    const response = await fetch(url);
    const data = await response.json();
    return data.results; // sunrise, sunset, day_length döner
}
