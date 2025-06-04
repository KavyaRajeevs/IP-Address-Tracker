/* Select form */
const search_form = document.querySelector('.header_form');
const search_input = document.querySelector('#search');

search_form.addEventListener('submit', (event) => {
  event.preventDefault();

  const value = search_input.value.trim();
  
  // Validate IP address
  if (!isValidIp(value)) {
    displayError("❌ Please enter a valid IP address.");
    return;
  }

  // Clear previous errors
  displayError('');
  
  // Search
  search_Ip_Address(value);
});

// Validate IP address (IPv4 + basic IPv6)
function isValidIp(ip) {
  const ipv4 = /^(25[0-5]|2[0-4]\d|1?\d{1,2})(\.(25[0-5]|2[0-4]\d|1?\d{1,2})){3}$/;
  const ipv6 = /^([a-fA-F0-9]{1,4}:){7}[a-fA-F0-9]{1,4}$/;
  return ipv4.test(ip) || ipv6.test(ip);
}

// Display error message
function displayError(message) {
  let errorBox = document.querySelector('.error-message');
  let errmsg = document.getElementById('error-msg');
  errmsg.textContent = message;
  
}

// Search for IP address
async function search_Ip_Address(ip_address) {
  const api_key = 'at_TlCrGeHXLwP8bakAtuSgwFIW6MEdZ';

  try {
    const request = await fetch(
      `https://geo.ipify.org/api/v2/country,city?apiKey=${api_key}&ipAddress=${ip_address}`
    );
    if (!request.ok) throw new Error("Failed to fetch IP data");

    const response = await request.json();

    const { location, ip, isp } = response;
    update_ui(ip, location.city, location.timezone, isp);

    if (map !== undefined && map !== null) {
      map.remove();
    }
    create_map(location.lat, location.lng, location.country, location.region);
  } catch (err) {
    displayError("❗ Error fetching IP details. Please try again.");
    console.error(err);
  }
}

// Update UI
function update_ui(ip_address, location, timezone, isp) {
  document.querySelector('.address').textContent = ip_address;
  document.querySelector('.location').textContent = location;
  document.querySelector('.utc').textContent = 'UTC' + timezone;
  document.querySelector('.isp').textContent = isp;
}

// Create map
let map;
function create_map(lat, lng, country, region) {
  map = L.map('map').setView([lat, lng], 14);
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 20,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(map);

  L.marker([lat, lng])
    .addTo(map)
    .bindPopup(`${region}, ${country}`)
    .openPopup();
}

const github = document.querySelector('.github');
github.addEventListener('click', () => {
  window.open('https://github.com/KavyaRajeevs/', '_blank');
});

// Default IP address
const defaultIp = '115.240.90.163';
search_Ip_Address(defaultIp);
