import ErrorPage from "@/components/error-page";
import LocationTracker from "@/components/geolocation";

const page = () => {
  return (
    <div>
      <LocationTracker />
      <ErrorPage />
    </div>
  );
};
export default page;
