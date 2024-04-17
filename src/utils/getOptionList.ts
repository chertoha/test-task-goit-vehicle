import { Icon, IconKeyType } from "components/UIKit/Icon/Icon";
import { Vehicle, VehicleDetails } from "types/entities";

type CommonOptionsKey = keyof Vehicle | keyof VehicleDetails;
export type EquipmentOption = {
  key: string;
  value: number | string;
};

export const getOptionList = (vehicle: Vehicle) => {
  const commonOptions = { ...vehicle, ...vehicle.details };
  const options: EquipmentOption[] = [];

  Object.keys(commonOptions).forEach(
    key =>
      Icon[key as IconKeyType] &&
      options.push({
        key,
        value: commonOptions[key as CommonOptionsKey] as string | number,
      })
  );

  return options;
};
