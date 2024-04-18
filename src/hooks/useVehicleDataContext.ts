import { VehicleDataContext } from "components/VehicleDataProvider/VehicleDataProvider";
import { useContext } from "react";

export const useVehicleDataContext = () => useContext(VehicleDataContext);
