# 🌐 IP Address Tracker

An interactive web application that allows users to track the **geographic location of IP addresses** in real-time using **IPify API** and displays them on a map powered by **LeafletJS**.

---

## 🚀 Features

- 🔍 Search for any IP address or domain
- 📍 Get location details (city, country, timezone)
- 🛰 Display the IP location on an interactive map
- 🎨 Stylish UI with animated floating IPs and a network pattern
- 🛠 Built with HTML, CSS, JavaScript, and REST APIs

---

## 📦 Technologies Used

- HTML5 + CSS3
- JavaScript (ES6+)
- [IPify Geolocation API](https://geo.ipify.org/)
- [LeafletJS](https://leafletjs.com/) for maps
- Regex for input validation

---

## 🔐 API Reference

**IPify Endpoint Format:**
```
https://geo.ipify.org/api/v2/country,city?apiKey=YOUR_API_KEY&ipAddress=XXX.XXX.X.X
```

- Replace `YOUR_API_KEY` with your IPify API key
- Replace `ipAddress` with the address to look up

---

## 📋 Validations

- Basic regex for IP/domain format checking
- HTTP status code checks (`200` OK, `400-499` client error, `500-599` server error)

---

## 💡 Credits

- FreeCodeCamp: [Learn REST APIs by building a project](https://www.freecodecamp.org/news/learn-rest-apis-javascript-project/)
- IPify for geolocation data
- LeafletJS for rendering maps

---

