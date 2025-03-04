import { useSearchParams } from "react-router-dom";

export function useUrlPosition() {
  const [searchParams] = useSearchParams();
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");

  console.log("SearchParams:", searchParams.toString());
  console.log("Extracted lat/lng from URL:", lat, lng);

  return [lat, lng];
}
