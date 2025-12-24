export async function getWeatherData(lon, lat) {
    // 7Timer API: Koordinatlarla hava durumu tahmini
    const url = `http://www.7timer.info/bin/api.pl?lon=${lon}&lat=${lat}&product=civil&output=json`;
    const response = await fetch(url);
    return await response.json();
}
