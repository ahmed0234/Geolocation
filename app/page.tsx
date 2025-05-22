"use client";
import { useState, useEffect } from "react";

export default function LocationTracker() {
  const [location, setLocation]: any = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if geolocation is supported
    if (!navigator.geolocation) {
      setError(
        "Your browser doesn't support geolocation. Try Chrome or Firefox."
      );
      setIsLoading(false);
      return;
    }

    // Geolocation options
    const options = {
      enableHighAccuracy: true, // Use GPS if available
      maximumAge: 0, // No cached positions
      timeout: 10000, // 10-second timeout
    };

    // Success handler
    const success = (position: any) => {
      setLocation({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
        accuracy: position.coords.accuracy,
      });
      setIsLoading(false);
    };

    // Error handler
    const error = (err) => {
      switch (err.code) {
        case err.PERMISSION_DENIED:
          setError(
            "Location access was denied. Please enable permissions and refresh."
          );
          break;
        case err.POSITION_UNAVAILABLE:
          setError("Location unavailable. Ensure GPS/Wi-Fi is enabled.");
          break;
        case err.TIMEOUT:
          setError("GPS is taking too long. Try outdoors with clear sky view.");
          break;
        default:
          setError("Unknown error. Try refreshing the page.");
      }
      setIsLoading(false);
    };

    // Request location
    navigator.geolocation.getCurrentPosition(success, error, options);

    // Fallback for watchPosition if getCurrentPosition fails
    const watcherId = navigator.geolocation.watchPosition(
      success,
      error,
      options
    );

    // Cleanup
    return () => navigator.geolocation.clearWatch(watcherId);
  }, []);

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>Exact Location</h1>

      {isLoading && !error && (
        <div>
          <p>🔍 Waiting for GPS signal...</p>
          <small>
            (Ensure you're outdoors and have granted location permissions)
          </small>
        </div>
      )}

      {location && (
        <div>
          <p>
            📍 <strong>Latitude:</strong> {location.lat.toFixed(6)}
          </p>
          <p>
            📍 <strong>Longitude:</strong> {location.lng.toFixed(6)}
          </p>
          <p>
            📏 <strong>Accuracy:</strong> ±{location.accuracy.toFixed(1)} meters
          </p>
          <a
            href={`https://www.google.com/maps?q=${location.lat},${location.lng}`}
            target="_blank"
            rel="noopener"
            style={{ color: "blue" }}
          >
            View on Google Maps
          </a>
        </div>
      )}

      {error && (
        <div style={{ color: "red", marginTop: "20px" }}>
          <p>❌ {error}</p>
          <button
            onClick={() => window.location.reload()}
            style={{ padding: "8px 16px", marginTop: "10px" }}
          >
            Retry
          </button>
          <div style={{ marginTop: "20px", textAlign: "left" }}>
            <strong>Troubleshooting:</strong>
            <ul>
              <li>Refresh the page and click "Allow" when prompted</li>
              <li>
                Check browser settings (Chrome: Settings → Privacy → Location)
              </li>
              <li>Try outdoors with clear sky view (for GPS)</li>
              <li>Test on a different device/browser</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
