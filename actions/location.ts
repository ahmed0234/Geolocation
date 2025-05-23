"use server";
import prisma from "@/lib/prisma";

export async function saveLocation(
  lat: number,
  long: number,
  accuracy?: number
) {
  try {
    // Add check for existing recent location if needed
    const existing = await prisma.locations.findFirst({
      where: {
        latitude: lat,
        longitude: long,
        createdAt: {
          gte: new Date(Date.now() - 30000), // 30 seconds ago
        },
      },
    });

    if (!existing) {
      const location = await prisma.locations.create({
        data: {
          latitude: lat,
          longitude: long,
          accuracy: accuracy,
        },
      });
      console.log("Saved location:", location.id);
      return location;
    }
  } catch (error) {
    console.error("Error saving location:", error);
    throw new Error("Failed to save location");
  }
}
