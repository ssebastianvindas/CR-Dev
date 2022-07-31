mapboxgl.accessToken =
  "pk.eyJ1Ijoic3VidnJheSIsImEiOiJjbDVodDl6NGgwMWkyM2JwYmYwNXNseTVlIn0.TLrcaCPVZopjKQ3Qhwpmog";
let Dmap = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/subvray/cl5iqv70s002715qxcftc0qhz",
  center: { lat: 9.914, lng: -84.03691 },
  zoom: 16,
});

// create the popup
const popup = new mapboxgl.Popup({ offset: 25 }).setHTML(
  `<h1>Veterinaria Moka</h1>
  <p>San José, Curridabat<br>
  11801<br>
  Costa Rica</p>`
);

// create DOM element for the marker
const el = document.createElement("div");
el.className = "marker";

// create the marker
new mapboxgl.Marker(el)
  .setLngLat({ lat: 9.914, lng: -84.03691 })
  .setPopup(popup) // sets a popup on this marker
  .addTo(Dmap);


  // inicia la pagina en el mapa
// new mapboxgl.Popup()
//   .setLngLat({
//     lng: -84.03691,
//     lat: 9.9141,
//   })
//   .setHTML("<h1>Veterinaria Moka</h1>")
//   .addTo(Dmap);

Dmap.addControl(new mapboxgl.NavigationControl());
Dmap.addControl(new mapboxgl.FullscreenControl());
