import { FC, ReactNode, createContext } from "react";
import { Vehicle } from "types/entities";

interface IVehicleDataProviderProps {
  children: ReactNode;
  data: Vehicle;
}

export const VehicleDataContext = createContext<Vehicle>({} as Vehicle);

const VehicleDataProvider: FC<IVehicleDataProviderProps> = ({
  children,
  data,
}) => {
  return (
    <VehicleDataContext.Provider value={data}>
      {children}
    </VehicleDataContext.Provider>
  );
};

export default VehicleDataProvider;
