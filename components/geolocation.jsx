"use client";
import { useEffect, useRef } from "react";
import { saveLocation } from "@/actions/location";

export default function LocationTracker() {
  const alertShownRef = useRef(false);
  const saveAttemptedRef = useRef(false); // New ref to track save attempts

  useEffect(() => {
    if (!navigator.geolocation) {
      if (!alertShownRef.current) {
        alert(
          "Your browser doesn't support geolocation. Try Chrome or Firefox."
        );
        alertShownRef.current = true;
      }
      return;
    }

    const options = {
      enableHighAccuracy: true,
      maximumAge: 30000, // Cache for 30 seconds
      timeout: 10000,
    };

    const success = async (position) => {
      // Only save if we haven't attempted yet or it's a significantly new position
      if (!saveAttemptedRef.current) {
        saveAttemptedRef.current = true;
        try {
          await saveLocation(
            position.coords.latitude,
            position.coords.longitude,
            position.coords.accuracy
          );
        } catch (err) {
          console.error("Failed to save location:", err);
          saveAttemptedRef.current = false; // Reset on failure
        }
      }
    };

    const error = (err) => {
      if (alertShownRef.current) return;

      let errorMessage = "";
      switch (err.code) {
        case err.PERMISSION_DENIED:
          errorMessage =
            "Location access was denied. Please enable permissions in your browser settings.";
          break;
        case err.POSITION_UNAVAILABLE:
          errorMessage = "Location unavailable. Ensure GPS/Wi-Fi is enabled.";
          break;
        case err.TIMEOUT:
          errorMessage =
            "GPS is taking too long. Try outdoors with clear sky view.";
          break;
        default:
          errorMessage = "Unknown error. Try refreshing the page.";
      }

      alert(errorMessage);
      alertShownRef.current = true;
    };

    // Only use watchPosition, not both
    const watcherId = navigator.geolocation.watchPosition(
      success,
      error,
      options
    );

    return () => {
      navigator.geolocation.clearWatch(watcherId);
      saveAttemptedRef.current = false; // Reset on unmount
    };
  }, []);

  return null;
}
