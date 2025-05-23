import prisma from "@/lib/prisma";
import { headers } from "next/headers";
import Link from "next/link";

const AdminPage = async () => {
  await headers();
  // Fetch locations from database
  const locations = await prisma.locations.findMany({
    orderBy: {
      createdAt: "desc",
    },
    take: 100, // Limit to 100 most recent entries
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Location Tracking Admin</h1>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-zinc-800 border text-white border-gray-200">
          <thead>
            <tr className="bg-zinc-800 border text-white">
              <th className="py-2 px-4 border-b">Latitude</th>
              <th className="py-2 px-4 border-b">Longitude</th>
              <th className="py-2 px-4 border-b">Accuracy (m)</th>
              <th className="py-2 px-4 border-b">Date/Time</th>
              <th className="py-2 px-4 border-b">View on Map</th>
            </tr>
          </thead>
          <tbody>
            {locations.map((location) => (
              <tr key={location.id} className="hover:bg-zinc-800 text-white">
                <td className="py-2 px-4 border-b text-center">
                  {location.latitude.toFixed(6)}
                </td>
                <td className="py-2 px-4 border-b text-center">
                  {location.longitude.toFixed(6)}
                </td>
                <td className="py-2 px-4 border-b text-center">
                  {location.accuracy?.toFixed(2) ?? "N/A"}
                </td>
                <td className="py-2 px-4 border-b text-center">
                  {new Date(location.createdAt).toLocaleString()}
                </td>
                <td className="py-2 px-4 border-b text-center">
                  <Link
                    href={`https://www.google.com/maps?q=${location.latitude},${location.longitude}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    View
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {locations.length === 0 && (
        <div className="text-center py-8 text-gray-500">
          No location data available
        </div>
      )}
    </div>
  );
};

export default AdminPage;
