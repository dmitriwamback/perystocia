let mainCanvas = document.getElementById("backgroundgl")
let mainCanvasGL = mainCanvas.getContext('webgl', {depth: true, antialiasing: true})

if (mainCanvasGL == null)
    mainCanvasGL = mainCanvas.getContext('webgl2', {depth: true, antialiasing: true})
mainCanvasGL.clearColor(14/395, 18/395, 24/395, 1.0)










const capitalCitiesCoordinates = {
    "Abu Dhabi": { latitude: 24.4539, longitude: 54.3773 },
    "Abuja": { latitude: 9.0579, longitude: 7.4951 },
    "Accra": { latitude: 5.6037, longitude: -0.1870 },
    "Addis Ababa": { latitude: 9.0086, longitude: 38.7612 },
    "Algiers": { latitude: 36.7372, longitude: 3.0867 },
    "Amman": { latitude: 31.9454, longitude: 35.9284 },
    "Amsterdam": { latitude: 52.3676, longitude: 4.9041 },
    "Ankara": { latitude: 39.9334, longitude: 32.8597 },
    "Antananarivo": { latitude: -18.8792, longitude: 47.5079 },
    "Apia": { latitude: -13.8333, longitude: -171.8333 },
    "Ashgabat": { latitude: 37.9601, longitude: 58.3261 },
    "Asmara": { latitude: 15.3229, longitude: 38.9252 },
    "Astana": { latitude: 51.1664, longitude: 71.4290 },
    "Asunción": { latitude: -25.2637, longitude: -57.5759 },
    "Athens": { latitude: 37.9838, longitude: 23.7275 },
    "Baghdad": { latitude: 33.3152, longitude: 44.3661 },
    "Baku": { latitude: 40.4093, longitude: 49.8671 },
    "Bamako": { latitude: 12.6392, longitude: -8.0029 },
    "Bangkok": { latitude: 13.7563, longitude: 100.5018 },
    "Bangui": { latitude: 4.3947, longitude: 18.5582 },
    "Banjul": { latitude: 13.4549, longitude: -16.5790 },
    "Basseterre": { latitude: 17.3026, longitude: -62.7177 },
    "Beijing": { latitude: 39.9042, longitude: 116.4074 },
    "Beirut": { latitude: 33.8938, longitude: 35.5018 },
    "Belgrade": { latitude: 44.7866, longitude: 20.4489 },
    "Belmopan": { latitude: 17.2510, longitude: -88.7590 },
    "Berlin": { latitude: 52.5200, longitude: 13.4050 },
    "Bern": { latitude: 46.9480, longitude: 7.4474 },
    "Bishkek": { latitude: 42.8746, longitude: 74.5698 },
    "Bissau": { latitude: 11.8636, longitude: -15.5841 },
    "Bogotá": { latitude: 4.7110, longitude: -74.0721 },
    "Brasília": { latitude: -15.8267, longitude: -47.9218 },
    "Bratislava": { latitude: 48.1486, longitude: 17.1077 },
    "Brazzaville": { latitude: -4.2634, longitude: 15.2429 },
    "Bridgetown": { latitude: 13.0975, longitude: -59.6181 },
    "Brussels": { latitude: 50.8503, longitude: 4.3517 },
    "Bucharest": { latitude: 44.4268, longitude: 26.1025 },
    "Budapest": { latitude: 47.4979, longitude: 19.0402 },
    "Buenos Aires": { latitude: -34.6037, longitude: -58.3816 },
    "Bujumbura": { latitude: -3.3818, longitude: 29.3622 },
    "Cairo": { latitude: 30.0444, longitude: 31.2357 },
    "Canberra": { latitude: -35.2820, longitude: 149.1287 },
    "Caracas": { latitude: 10.4806, longitude: -66.9036 },
    "Castries": { latitude: 14.0101, longitude: -60.9870 },
    "Central Area, Singapore": { latitude: 1.2845, longitude: 103.8510 },
    "Chisinau": { latitude: 47.0105, longitude: 28.8638 },
    "Cockburn Town": { latitude: 21.4612, longitude: -71.1419 },
    "Conakry": { latitude: 9.6412, longitude: -13.5784 },
    "Copenhagen": { latitude: 55.6761, longitude: 12.5683 },
    "Dakar": { latitude: 14.7167, longitude: -17.4677 },
    "Damascus": { latitude: 33.5138, longitude: 36.2765 },
    "Dhaka": { latitude: 23.8103, longitude: 90.4125 },
    "Dili": { latitude: -8.5586, longitude: 125.5736 },
    "Djibouti (city)": { latitude: 11.6098, longitude: 43.1474 },
    "Dodoma": { latitude: -6.1630, longitude: 35.7516 },
    "Doha": { latitude: 25.2867, longitude: 51.5330 },
    "Dublin": { latitude: 53.3498, longitude: -6.2603 },
    "Dushanbe": { latitude: 38.5858, longitude: 68.7734 },
    "Edinburgh": { latitude: 55.9533, longitude: -3.1883 },
    "Gaborone": { latitude: -24.6282, longitude: 25.9231 },
    "Georgetown": { latitude: 6.8013, longitude: -58.1551 },
    "Guatemala City": { latitude: 14.6349, longitude: -90.5069 },
    "Hanoi": { latitude: 21.0285, longitude: 105.8542 },
    "Harare": { latitude: -17.8252, longitude: 31.0335 },
    "Havana": { latitude: 23.1136, longitude: -82.3666 },
    "Helsinki": { latitude: 60.1695, longitude: 24.9354 },
    "Islamabad": { latitude: 33.6844, longitude: 73.0479 },
    "Jakarta": { latitude: -6.2088, longitude: 106.8456 },
    "Kampala": { latitude: 0.3476, longitude: 32.5825 },
    "Kathmandu": { latitude: 27.7172, longitude: 85.3240 },
    "Khartoum": { latitude: 15.5007, longitude: 32.5599 },
    "Kiev": { latitude: 50.4501, longitude: 30.5234 },
    "Kigali": { latitude: -1.9501, longitude: 30.0589 },
    "Kingston": { latitude: 17.9712, longitude: -76.7926 },
    "Kingstown": { latitude: 13.1645, longitude: -61.2242 },
    "Kinshasa": { latitude: -4.4419, longitude: 15.2663 },
    "Kuala Lumpur": { latitude: 3.1390, longitude: 101.6869 },
    "Kuwait City": { latitude: 29.3759, longitude: 47.9774 },
    "Kyiv": { latitude: 50.4501, longitude: 30.5234 },
    "La Paz": { latitude: -16.5000, longitude: -68.1500 },
    "Libreville": { latitude: 0.3925, longitude: 9.4537 },
    "Lilongwe": { latitude: -13.9632, longitude: 33.7741 },
    "Lima": { latitude: -12.0464, longitude: -77.0428 },
    "Lisbon": { latitude: 38.7223, longitude: -9.1393 },
    "Ljubljana": { latitude: 46.0569, longitude: 14.5058 },
    "Lomé": { latitude: 6.1750, longitude: 1.2317 },
    "London": { latitude: 51.5074, longitude: -0.1278 },
    "Lusaka": { latitude: -15.4167, longitude: 28.2833 },
    "Luxembourg (city)": { latitude: 49.6100, longitude: 6.1296 },
    "Madrid": { latitude: 40.4168, longitude: -3.7038 },
    "Majuro": { latitude: 7.1164, longitude: 171.1859 },
    "Malabo": { latitude: 3.7506, longitude: 8.7831 },
    "Malé": { latitude: 4.1755, longitude: 73.5093 },
    "Managua": { latitude: 12.1364, longitude: -86.2510 },
    "Manama": { latitude: 26.2285, longitude: 50.5860 },
    "Manila": { latitude: 14.5995, longitude: 120.9842 },
    "Maputo": { latitude: -25.9653, longitude: 32.5892 },
    "Maseru": { latitude: -29.3142, longitude: 27.4852 },
    "Mbabane": { latitude: -26.3054, longitude: 31.1367 },
    "Mexico City": { latitude: 19.4326, longitude: -99.1332 },
    "Minsk": { latitude: 53.9045, longitude: 27.5615 },
    "Mogadishu": { latitude: 2.0469, longitude: 45.3182 },
    "Monaco": { latitude: 43.7384, longitude: 7.4246 },
    "Monrovia": { latitude: 6.3005, longitude: -10.7974 },
    "Montevideo": { latitude: -34.9011, longitude: -56.1645 },
    "Moroni": { latitude: -11.7172, longitude: 43.2479 },
    "Moscow": { latitude: 55.7558, longitude: 37.6176 },
    "Muscat": { latitude: 23.6100, longitude: 58.5927 },
    "Nairobi": { latitude: -1.2864, longitude: 36.8172 },
    "Nassau": { latitude: 25.0343, longitude: -77.3963 },
    "Naypyidaw": { latitude: 19.7633, longitude: 96.0785 },
    "N'Djamena": { latitude: 12.1348, longitude: 15.0557 },
    "New Delhi": { latitude: 28.6139, longitude: 77.209 },
    "Niamey": { latitude: 13.5127, longitude: 2.1126 },
    "Nicosia": { latitude: 35.1676, longitude: 33.3736 },
    "Nouakchott": { latitude: 18.0735, longitude: -15.9582 },
    "Nouméa": { latitude: -22.2550, longitude: 166.4500 },
    "Nuku'alofa": { latitude: -21.1393, longitude: -175.2049 },
    "Nuuk": { latitude: 64.1836, longitude: -51.7214 },
    "Oslo": { latitude: 59.9139, longitude: 10.7522 },
    "Ottawa": { latitude: 45.4215, longitude: -75.6972 },
    "Ouagadougou": { latitude: 12.3714, longitude: -1.5197 },
    "Palikir": { latitude: 6.9174, longitude: 158.1850 },
    "Panama City": { latitude: 8.9824, longitude: -79.5199 },
    "Paramaribo": { latitude: 5.8520, longitude: -55.2038 },
    "Paris": { latitude: 48.8566, longitude: 2.3522 },
    "Phnom Penh": { latitude: 11.5564, longitude: 104.9282 },
    "Port Louis": { latitude: -20.1654, longitude: 57.4896 },
    "Port Moresby": { latitude: -9.4438, longitude: 147.1803 },
    "Port Vila": { latitude: -17.7404, longitude: 168.3219 },
    "Port-au-Prince": { latitude: 18.5944, longitude: -72.3074 },
    "Port of Spain": { latitude: 10.6669, longitude: -61.5209 },
    "Porto-Novo": { latitude: 6.4974, longitude: 2.6059 },
    "Prague": { latitude: 50.0755, longitude: 14.4378 },
    "Praia": { latitude: 14.9215, longitude: -23.5087 },
    "Pretoria": { latitude: -25.7463, longitude: 28.1876 },
    "Pyongyang": { latitude: 39.0392, longitude: 125.7625 },
    "Quito": { latitude: -0.1807, longitude: -78.4678 },
    "Rabat": { latitude: 34.0209, longitude: -6.8411 },
    "Reykjavik": { latitude: 64.1466, longitude: -21.9426 },
    "Riga": { latitude: 56.9496, longitude: 24.1052 },
    "Riyadh": { latitude: 24.7136, longitude: 46.6753 },
    "Roseau": { latitude: 15.3010, longitude: -61.3880 },
    "Saint George's": { latitude: 12.0526, longitude: -61.7496 },
    "Saint John's": { latitude: 17.1274, longitude: -61.8468 },
    "Sana'a": { latitude: 15.3694, longitude: 44.1910 },
    "San José": { latitude: 9.9281, longitude: -84.0907 },
    "San Marino": { latitude: 43.9424, longitude: 12.4578 },
    "San Salvador": { latitude: 13.6988, longitude: -89.1914 },
    "Santiago": { latitude: -33.4489, longitude: -70.6693 },
    "Santo Domingo": { latitude: 18.4861, longitude: -69.9312 },
    "São Tomé": { latitude: 0.1864, longitude: 6.6131 },
    "Sarajevo": { latitude: 43.8563, longitude: 18.4131 },
    "Seoul": { latitude: 37.5665, longitude: 126.9780 },
    "Singapore": { latitude: 1.3521, longitude: 103.8198 },
    "Skopje": { latitude: 42.0024, longitude: 21.4361 },
    "Sofia": { latitude: 42.6977, longitude: 23.3219 },
    "Sri Jayawardenepura Kotte": { latitude: 6.9271, longitude: 79.8612 },
    "St. John's": { latitude: 17.1274, longitude: -61.8468 },
    "Stockholm": { latitude: 59.3293, longitude: 18.0686 },
    "Suva": { latitude: -18.1248, longitude: 178.4500 },
    "Taipei": { latitude: 25.0330, longitude: 121.5654 },
    "Tallinn": { latitude: 59.4370, longitude: 24.7536 },
    "Tarawa Atoll": { latitude: 1.3278, longitude: 172.9762 },
    "Tashkent": { latitude: 41.2995, longitude: 69.2401 },
    "Tbilisi": { latitude: 41.7151, longitude: 44.8271 },
    "Tegucigalpa": { latitude: 14.0723, longitude: -87.1921 },
    "Tehran": { latitude: 35.6892, longitude: 51.3890 },
    "Thimphu": { latitude: 27.4728, longitude: 89.6390 },
    "Tirana": { latitude: 41.3275, longitude: 19.8187 },
    "Tokyo": { latitude: 35.6895, longitude: 139.6917 },
    "Tripoli": { latitude: 32.8872, longitude: 13.1913 },
    "Tskhinvali": { latitude: 42.2251, longitude: 43.9644 },
    "Tunis": { latitude: 36.8065, longitude: 10.1815 },
    "Ulaanbaatar": { latitude: 47.8864, longitude: 106.9057 },
    "Vaduz": { latitude: 47.1410, longitude: 9.5215 },
    "Valletta": { latitude: 35.8989, longitude: 14.5146 },
    "Vatican City": { latitude: 41.9029, longitude: 12.4534 },
    "Victoria": { latitude: -4.6191, longitude: 55.4514 },
    "Vienna": { latitude: 48.2082, longitude: 16.3738 },
    "Vientiane": { latitude: 17.9757, longitude: 102.6331 },
    "Vilnius": { latitude: 54.6872, longitude: 25.2797 },
    "Warsaw": { latitude: 52.2297, longitude: 21.0122 },
    "Washington, D.C.": { latitude: 38.9072, longitude: -77.0369 },
    "Wellington": { latitude: -41.2865, longitude: 174.7762 },
    "Windhoek": { latitude: -22.5597, longitude: 17.0832 },
    "Yaoundé": { latitude: 3.8480, longitude: 11.5021 },
    "Yerevan": { latitude: 40.1872, longitude: 44.5152 },
    "Zagreb": { latitude: 45.8150, longitude: 15.9819 },
};
  
const countryCapitals = {
    "Afghanistan": "Kabul",
  "Albania": "Tirana",
  "Algeria": "Algiers",
  "Andorra": "Andorra la Vella",
  "Angola": "Luanda",
  "Antigua and Barbuda": "Saint John's",
  "Argentina": "Buenos Aires",
  "Armenia": "Yerevan",
  "Australia": "Canberra",
  "Austria": "Vienna",
  "Azerbaijan": "Baku",
  "Bahamas": "Nassau",
  "Bahrain": "Manama",
  "Bangladesh": "Dhaka",
  "Barbados": "Bridgetown",
  "Belarus": "Minsk",
  "Belgium": "Brussels",
  "Belize": "Belmopan",
  "Benin": "Porto-Novo",
  "Bhutan": "Thimphu",
  "Bolivia": "La Paz",
  "Bosnia and Herzegovina": "Sarajevo",
  "Botswana": "Gaborone",
  "Brazil": "Brasília",
  "Brunei": "Bandar Seri Begawan",
  "Bulgaria": "Sofia",
  "Burkina Faso": "Ouagadougou",
  "Burundi": "Bujumbura",
  "Cambodia": "Phnom Penh",
  "Cameroon": "Yaoundé",
  "Canada": "Ottawa",
  "Cape Verde": "Praia",
  "Central African Republic": "Bangui",
  "Chad": "N'Djamena",
  "Chile": "Santiago",
  "China": "Beijing",
  "Colombia": "Bogotá",
  "Comoros": "Moroni",
  "Democratic Republic of the Congo": "Kinshasa",
  "Republic of the Congo": "Brazzaville",
  "Costa Rica": "San José",
  "Croatia": "Zagreb",
  "Cuba": "Havana",
  "Cyprus": "Nicosia",
  "Czech Republic": "Prague",
  "Denmark": "Copenhagen",
  "Djibouti": "Djibouti (city)",
  "Dominica": "Roseau",
  "Dominican Republic": "Santo Domingo",
  "East Timor": "Dili",
  "Ecuador": "Quito",
  "Egypt": "Cairo",
  "El Salvador": "San Salvador",
  "Equatorial Guinea": "Malabo",
  "Eritrea": "Asmara",
  "Estonia": "Tallinn",
  "Swaziland": "Mbabane",
  "Ethiopia": "Addis Ababa",
  "Fiji": "Suva",
  "Finland": "Helsinki",
  "France": "Paris",
  "Gabon": "Libreville",
  "Gambia": "Banjul",
  "Georgia": "Tbilisi",
  "Germany": "Berlin",
  "Ghana": "Accra",
  "Greece": "Athens",
  "Grenada": "Saint George's",
  "Guatemala": "Guatemala City",
  "Guinea": "Conakry",
  "Guinea-Bissau": "Bissau",
  "Guyana": "Georgetown",
  "Haiti": "Port-au-Prince",
  "Honduras": "Tegucigalpa",
  "Hungary": "Budapest",
  "Iceland": "Reykjavík",
  "India": "New Delhi",
  "Indonesia": "Jakarta",
  "Iran": "Tehran",
  "Iraq": "Baghdad",
  "Ireland": "Dublin",
  "Israel": "Jerusalem",
  "Italy": "Rome",
  "Jamaica": "Kingston",
  "Japan": "Tokyo",
  "Jordan": "Amman",
  "Kazakhstan": "Nur-Sultan",
  "Kenya": "Nairobi",
  "Kiribati": "Tarawa Atoll",
  "Kosovo": "Pristina",
  "Kuwait": "Kuwait City",
  "Kyrgyzstan": "Bishkek",
  "Laos": "Vientiane",
  "Latvia": "Riga",
  "Lebanon": "Beirut",
  "Lesotho": "Maseru",
  "Liberia": "Monrovia",
  "Libya": "Tripoli",
  "Liechtenstein": "Vaduz",
  "Lithuania": "Vilnius",
  "Luxembourg": "Luxembourg (city)",
  "Madagascar": "Antananarivo",
  "Malawi": "Lilongwe",
  "Malaysia": "Kuala Lumpur",
  "Maldives": "Malé",
  "Mali": "Bamako",
  "Malta": "Valletta",
  "Marshall Islands": "Majuro",
  "Mauritania": "Nouakchott",
  "Mauritius": "Port Louis",
  "Mexico": "Mexico City",
  "Micronesia": "Palikir",
  "Moldova": "Chișinău",
  "Monaco": "Monaco",
  "Mongolia": "Ulaanbaatar",
  "Montenegro": "Podgorica",
  "Morocco": "Rabat",
  "Mozambique": "Maputo",
  "Myanmar": "Naypyidaw",
  "Namibia": "Windhoek",
  "Nauru": "Yaren",
  "Nepal": "Kathmandu",
  "Netherlands": "Amsterdam",
  "New Zealand": "Wellington",
  "Nicaragua": "Managua",
  "Niger": "Niamey",
  "Nigeria": "Abuja",
  "North Korea": "Pyongyang",
  "North Macedonia": "Skopje",
  "Norway": "Oslo",
  "Oman": "Muscat",
  "Pakistan": "Islamabad",
  "Palau": "Ngerulmud",
  "Panama": "Panama City",
  "Papua New Guinea": "Port Moresby",
  "Paraguay": "Asunción",
  "Peru": "Lima",
  "Philippines": "Manila",
  "Poland": "Warsaw",
  "Portugal": "Lisbon",
  "Qatar": "Doha",
  "Romania": "Bucharest",
  "Russia": "Moscow",
  "Rwanda": "Kigali",
  "Saint Kitts and Nevis": "Basseterre",
  "Saint Lucia": "Castries",
  "Saint Vincent and the Grenadines": "Kingstown",
  "Samoa": "Apia",
  "San Marino": "San Marino",
  "Sao Tome and Principe": "São Tomé",
  "Saudi Arabia": "Riyadh",
  "Senegal": "Dakar",
  "Serbia": "Belgrade",
  "Seychelles": "Victoria",
  "Sierra Leone": "Freetown",
  "Solomon Islands": "Honiara",
  "Somalia": "Mogadishu",
  "South Africa": "Pretoria",
  "South Korea": "Seoul",
  "South Sudan": "Juba",
  "Spain": "Madrid",
  "Sri Lanka": "Sri Jayawardenepura Kotte",
  "Sudan": "Khartoum",
  "Suriname": "Paramaribo",
  "Sweden": "Stockholm",
  "Switzerland": "Bern",
  "Syria": "Damascus",
  "Tajikistan": "Dushanbe",
  "United Republic Tanzania": "Dodoma",
  "Thailand": "Bangkok",
  "Togo": "Lomé",
  "Tonga": "Nuku'alofa",
  "Trinidad and Tobago": "Port of Spain",
  "Tunisia": "Tunis",
  "Turkey": "Ankara",
  "Turkmenistan": "Ashgabat",
  "Tuvalu": "Funafuti",
  "Uganda": "Kampala",
  "Ukraine": "Kyiv",
  "United Arab Emirates": "Abu Dhabi",
  "United Kingdom": "London",
  "United States of America": "Washington, D.C.",
  "Uruguay": "Montevideo",
  "Uzbekistan": "Tashkent",
  "Vanuatu": "Port Vila",
  "Vatican City": "Vatican City",
  "Venezuela": "Caracas",
  "Vietnam": "Hanoi",
  "Yemen": "Sana'a",
  "Zambia": "Lusaka",
  "Zimbabwe": "Harare",
}

mainVertex = `
attribute vec3 vertex;

uniform mat4 projection;
uniform mat4 lookAt;
varying vec3 n;

void main() {
    gl_Position = projection * lookAt * vec4(vertex, 1.0);
    gl_PointSize = 7.0;
}
`
mainFragment = `
precision mediump float;
varying vec3 n;

uniform vec3 col;
void main() {
    gl_FragColor = vec4(col, 255.0) / 255.0;
}
`


shader = {
    program: CreateShader(mainVertex, mainFragment, mainCanvasGL)
}

LoadCountry = function(name) {

    let jsonLength = CountryDataGeoJson['features'].length
    for (var i = 0; i < jsonLength; i++) {

        if (CountryDataGeoJson['features'][i]['properties']['ADMIN'] != name) continue

        return [
            CountryDataGeoJson['features'][i]['geometry'],
            CountryDataGeoJson['features'][i]['geometry']['type']
        ]
    }
    return ['...', '...']
}




CreateGeometryPiece = function(lat, lon, iteration) {

    return {
        'latitude': lat,
        'longitude': lon,

        'piece-identifier': iteration,
        'vertexbuffer': mainCanvasGL.createBuffer(),
        'isglobe': false,
        'spherecoords': []
    }
}





LoadCountryGeometryToOpenGL = function(geometry, type) {
    if (geometry == '...') return null

    coordinates = geometry['coordinates']
    longitude = []
    latitude = []

    if (type == 'Polygon') {

        for (var i = 0; i < coordinates[0].length; i++) {

            longitude[i] = coordinates[0][i][0]
            latitude[i]  = coordinates[0][i][1]
        }

        return [CreateGeometryPiece(latitude, longitude, 0)]

    }
    else if (type == 'MultiPolygon') {

        var index = 0
        var r_index = 0

        result = []

        for (var i = 0; i < coordinates.length; i++) { for (var j = 0; j < coordinates[i].length; j++) {

            __lon = []
            __lat = []

            __lat_index = 0
            __lon_index = 0

            for (var k = 0; k < coordinates[i][j].length; k++) {
                
                __lon[__lat_index] = coordinates[i][j][k][0]
                __lat[__lon_index] = coordinates[i][j][k][1]

                __lat_index++
                __lon_index++
            }

            result[r_index] = CreateGeometryPiece(__lat, __lon, r_index)
            r_index++
        }}

        return result
    }
}


ToSphereCoords = function(lat, lon, height) {

    rad = 3.14159265358797 / 180
    y =  Math.sin(lat/2 * rad)
    r =  Math.cos(lat/2 * rad)
    x =  Math.sin(lon/2 * rad) * r
    z = -Math.cos(lon/2.25 * rad) * r

    return [lon, lat * 2 * (Math.cos(z)), -120]
}


SPHERE_RADIUS = 1.25;




ConvertLatLonToPointOnSphere = function(pieces) {


    for (var pieceId = 0; pieceId < pieces.length; pieceId++) {

        lat = pieces[pieceId]['latitude']
        lon = pieces[pieceId]['longitude']
        globeCoords = []
        globeIndex = 0

        for (var i = 0; i < lat.length; i++) {
            coord = ToSphereCoords(lat[i], lon[i], SPHERE_RADIUS)

            globeCoords[globeIndex  ] = coord[0]
            globeCoords[globeIndex+1] = coord[1]
            globeCoords[globeIndex+2] = coord[2]
            globeIndex += 3
        }

        let vertexbuffer = pieces[pieceId]['vertexbuffer']
        let vertexattrib = FindAttributeLocation(shader, 'vertex', mainCanvasGL)

        pieces[pieceId].isglobe = true
        pieces[pieceId].spherecoords = globeCoords

        mainCanvasGL.bindBuffer(mainCanvasGL.ARRAY_BUFFER, vertexbuffer)
        mainCanvasGL.bufferData(mainCanvasGL.ARRAY_BUFFER, new Float32Array(pieces[pieceId].spherecoords), mainCanvasGL.DYNAMIC_DRAW)
        mainCanvasGL.enableVertexAttribArray(vertexattrib)
        mainCanvasGL.vertexAttribPointer(vertexattrib, 
                                        3,
                                        mainCanvasGL.FLOAT, 
                                        mainCanvasGL.FALSE, 
                                        3 * Float32Array.BYTES_PER_ELEMENT, 0)

        mainCanvasGL.bindBuffer(mainCanvasGL.ARRAY_BUFFER, null)
    }
    return pieces
}








GenerateUVSphere = function() {

    points = []
    offsets = [
        0, 0,
        0, 1,
        1, 1,

        0, 0,
        1, 0,
        1, 1,
    ]

    index = 0

    for (i = -180; i <= 180; i++) { for (j = -90; j <= 90; j++) {

        lat = i
        lon = j

        for (o = 0; o < offsets.length / 2; o++) {
            point = ToSphereCoords(lat + offsets[o * 2 + 1], lon + offsets[o * 2], SPHERE_RADIUS - 0.001)
            points[index    ] = point[0]
            points[index + 1] = point[1]
            points[index + 2] = point[2]
            index += 3
        }
    }}

    return points
}

















allCountryNames = []
var allocated = false


features = CountryDataGeoJson['features'].length

for (var i = 0; i < features; i++) {
    var countryName = CountryDataGeoJson['features'][i]['properties']['ADMIN']
    console.log(countryName)
    allCountryNames[i] = countryName
}





listedCountryNames = []
function random_item(items) {
    return items[Math.floor(Math.random()*items.length)]; 
}

countries = []



Generate = function() {

    for (i = 0; i < listedCountryNames.length; i++) {
        var properties = LoadCountry(listedCountryNames[i])
    
        var countryGLProperties = LoadCountryGeometryToOpenGL(properties[0], properties[1])
        var toGlobeCoordinates = ConvertLatLonToPointOnSphere(countryGLProperties)
        countries[i] = toGlobeCoordinates
    }
}


var networkCoordinates = []
networkVertexBuffer = mainCanvasGL.createBuffer()


GenerateRandom = function() {
    listedCountryNames = []
    countries = []
    _capitalCoordinates = []

    for (i = 0; i < 50; i++) {
        listedCountryNames[i] = random_item(allCountryNames)
        if (countryCapitals[listedCountryNames[i]] != undefined) {
            _capitalCoordinates = capitalCitiesCoordinates[countryCapitals[listedCountryNames[i]]]
        }
    }

    networkCoordinates = []

    for (i = 0; i < 50; i++) {
        
        xcountry = capitalCitiesCoordinates[countryCapitals[listedCountryNames[i]]]

        
        rad = 3.14159265358797 / 180


        try {

            r =  Math.cos(xcountry.latitude/2 * rad)
            z = -Math.cos(xcountry.longitude/2.25 * rad) * r

            networkCoordinates[i * 3] = xcountry.longitude
            networkCoordinates[i * 3 + 1] = xcountry.latitude * 2 * Math.cos(z)
            networkCoordinates[i * 3 + 2] = -120
        }
        catch(e) {
            networkCoordinates[i * 3] = networkCoordinates[i * 6]
            networkCoordinates[i * 3 + 1] = networkCoordinates[i * 6 + 1]
            networkCoordinates[i * 3 + 2] = -120
        }
        console.log(networkCoordinates)
    }

    mainCanvasGL.bindBuffer(mainCanvasGL.ARRAY_BUFFER, networkVertexBuffer);
    mainCanvasGL.bufferData(mainCanvasGL.ARRAY_BUFFER, new Float32Array(networkCoordinates), mainCanvasGL.DYNAMIC_DRAW)

    let vertexattrib = FindAttributeLocation(shader, 'vertex', mainCanvasGL)
    mainCanvasGL.enableVertexAttribArray(vertexattrib)
    mainCanvasGL.vertexAttribPointer(vertexattrib, 
                                    3,
                                    mainCanvasGL.FLOAT, 
                                    mainCanvasGL.FALSE, 
                                    3 * Float32Array.BYTES_PER_ELEMENT, 0)

    Generate()
}

GenerateAll = function() {

    listedCountryNames = allCountryNames
    countries = []

    Generate()
}



GenerateList = function(list) {
    listedCountryNames = list
    countries = []
    Generate()
}



GenerateRandom()
document.addEventListener('keydown', function(event) {
    
    if (event.keyCode == 69) {
        GenerateRandom()
        allocated = false
        requestAnimationFrame(WebGLLoop)
    }

    if (event.keyCode == 81) {
        GenerateAll()
        allocated = false
        requestAnimationFrame(WebGLLoop)
    }
});

let perspectiveProjection = new Float32Array(16)
let lookAt = new Float32Array(16)


sphere = GenerateUVSphere()
sphere_vertexbuffer = mainCanvasGL.createBuffer()
mainCanvasGL.bindBuffer(mainCanvasGL.ARRAY_BUFFER, sphere_vertexbuffer);
mainCanvasGL.bufferData(mainCanvasGL.ARRAY_BUFFER, new Float32Array(sphere), mainCanvasGL.DYNAMIC_DRAW)

let vertexattrib = FindAttributeLocation(shader, 'vertex', mainCanvasGL)
mainCanvasGL.enableVertexAttribArray(vertexattrib)
mainCanvasGL.vertexAttribPointer(vertexattrib, 
                                3,
                                mainCanvasGL.FLOAT, 
                                mainCanvasGL.FALSE, 
                                3 * Float32Array.BYTES_PER_ELEMENT, 0)




var width = window.innerWidth
var height = window.innerHeight
var time = 1.5
mainCanvasGL.enable(mainCanvasGL.DEPTH_TEST)

mainCanvas.width = 3000
mainCanvas.height = 3000



glMatrix.mat4.perspective(perspectiveProjection, glMatrix.glMatrix.toRadian(90), (width/height), 0.1, 2000.0);
glMatrix.mat4.lookAt(lookAt, [1, 1, 1], [0, 0, 0], [0, 1, 0])



cameraY = 0
cameraX = 0

lastxlocation = 0
lastylocation = 0
isMouseDown = false

window.onmousedown = function(e) {
    isMouseDown = true
}
window.onmouseup = function(e) {
    isMouseDown = false
}

WebGLLoop = function() {    

    if (allocated) return;

    mainCanvasGL.clear(mainCanvasGL.COLOR_BUFFER_BIT | mainCanvasGL.DEPTH_BUFFER_BIT)
    mainCanvasGL.clearColor(14/395, 18/395, 24/395, 1.0)


    _width = mainCanvas.getBoundingClientRect().width
    _height = mainCanvas.getBoundingClientRect().height
    mainCanvasGL.viewport(0, 0, 3000, 3000)

    x = -1.4 * Math.sin(cameraX) * Math.cos(cameraY)
    y = 1.4 * Math.sin(cameraY)
    z = 1.4 * Math.cos(cameraX) * Math.cos(cameraY)

    cameraPosition = [x, y, z]

    glMatrix.mat4.perspective(perspectiveProjection, glMatrix.glMatrix.toRadian(90), _width/_height, 0.1, 2000.0);
    glMatrix.mat4.lookAt(lookAt, cameraPosition, [0, 0, 0], [0, 1, 0])

    mainCanvasGL.useProgram(shader.program)
    UniformMatrix4Location(shader, "projection", perspectiveProjection, mainCanvasGL)
    UniformMatrix4Location(shader, "lookAt", lookAt, mainCanvasGL)



    mainCanvasGL.bindBuffer(mainCanvasGL.ARRAY_BUFFER, networkVertexBuffer);
    mainCanvasGL.bufferData(mainCanvasGL.ARRAY_BUFFER, new Float32Array(networkCoordinates), mainCanvasGL.DYNAMIC_DRAW)

    let vertexattrib = FindAttributeLocation(shader, 'vertex', mainCanvasGL)
    mainCanvasGL.enableVertexAttribArray(vertexattrib)
    mainCanvasGL.vertexAttribPointer(vertexattrib, 
                                    3,
                                    mainCanvasGL.FLOAT, 
                                    mainCanvasGL.FALSE, 
                                    3 * Float32Array.BYTES_PER_ELEMENT, 0)
    
    UniformVector3Location(shader, "col", [255 - 193, 255 - 91, 255 - 143], mainCanvasGL);
    mainCanvasGL.drawArrays(mainCanvasGL.LINE_LOOP, 0, networkCoordinates.length/3)
    mainCanvasGL.drawArrays(mainCanvasGL.POINTS, 0, networkCoordinates.length/3)


    for(c = 0; c < countries.length; c++) { for(i = 0; i < countries[c].length; i++) {

        mainCanvasGL.bindBuffer(mainCanvasGL.ARRAY_BUFFER, countries[c][i].vertexbuffer);
        mainCanvasGL.bufferData(mainCanvasGL.ARRAY_BUFFER, new Float32Array(countries[c][i].spherecoords), mainCanvasGL.DYNAMIC_DRAW)

        let vertexattrib = FindAttributeLocation(shader, 'vertex', mainCanvasGL)
        mainCanvasGL.enableVertexAttribArray(vertexattrib)
        mainCanvasGL.vertexAttribPointer(vertexattrib, 
                                        3,
                                        mainCanvasGL.FLOAT, 
                                        mainCanvasGL.FALSE, 
                                        3 * Float32Array.BYTES_PER_ELEMENT, 0)
            

        UniformVector3Location(shader, "col", [255 - 94, 255 - 91, 255 - 93], mainCanvasGL);
        mainCanvasGL.drawArrays(mainCanvasGL.LINE_LOOP, 0, countries[c][i].spherecoords.length / 3)

    }}

    if (Math.floor(time) % 2 == 0 && Math.floor(time) != 0) {
        time = 0
        //GenerateRandom()
    }
    time += 0.05
    allocated = true;
    if (!allocated) requestAnimationFrame(WebGLLoop)

}
requestAnimationFrame(WebGLLoop)