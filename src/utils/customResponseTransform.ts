import { AdvertsQuery } from "redux/adverts/advertsApi";
import { Vehicle } from "types/entities";
import { getOptionList } from "./getOptionList";
import { DEFAULT_QUERY_LIMIT } from "services/config";

export const customResponseTransform = (
  vehicles: Vehicle[],
  args: AdvertsQuery
): { vehicles: Vehicle[]; count: number } => {
  const filteredVehicles = vehicles.filter(vehicle => {
    if (args.form !== "" && vehicle.form !== args.form) return false;

    if (
      args.location !== "" &&
      !vehicle.location.toLowerCase().includes(args.location.toLowerCase())
    ) {
      return false;
    }

    const vehicleOptions = getOptionList(vehicle);

    if (args.options.length !== 0) {
      const isOptionsFit = args.options.every(option => {
        return vehicleOptions.some(({ key, value }) => value && key === option);
      });

      if (!isOptionsFit) return false;
    }

    return true;
  });

  const { page } = args;
  const start = page * DEFAULT_QUERY_LIMIT - DEFAULT_QUERY_LIMIT;
  const end = page * DEFAULT_QUERY_LIMIT;
  const filteredResponse = filteredVehicles.filter((_, i) => i >= start && i < end);

  return { vehicles: filteredResponse, count: filteredVehicles.length };
};
