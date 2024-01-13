import React, { useEffect, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const Mapa = () => {
  const [mapInitialized, setMapInitialized] = useState(false);

  useEffect(() => {
    if (!mapInitialized) {
      // Crea el mapa y establece la vista
      const map = L.map('map').setView([-34.90449866884995, -56.17659975184704], 13);

      // Añade una capa de OpenStreetMap
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
      }).addTo(map);

      // Añade marcadores para las ubicaciones
      const marker1 = L.marker([-34.908245324827185, -56.20802311897355]).addTo(map);
      const marker2 = L.marker([-34.90075001187273, -56.14517638472053]).addTo(map);

      // Añade popups a los marcadores
      marker1.bindPopup('Ubicación 1');
      marker2.bindPopup('Ubicación 2');

      setMapInitialized(true);
    }
  }, [mapInitialized]);

  return <div id="map" style={{ height: '400px' }} />;
};

export default Mapa;
