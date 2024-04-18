import ChipList from "components/ChipList";
import { useVehicleDataContext } from "hooks/useVehicleDataContext";
import { FC } from "react";
// import { Vehicle } from "types/entities";
import { getOptionList } from "utils/getOptionList";

interface IVehicleFeaturesProps {
  // data: Vehicle;
}

type Detail = "form" | "length" | "width" | "height" | "tank" | "consumption";

const details: Detail[] = [
  "form",
  "length",
  "width",
  "height",
  "tank",
  "consumption",
];

const VehicleFeatures: FC<IVehicleFeaturesProps> = () => {
  const data = useVehicleDataContext();
  const options = getOptionList(data);

  return (
    <div>
      <ChipList options={options} />

      <div className="mt-[44px]">
        <h3 className="heading-2 ">Vehicle details</h3>
        <ul className="mt-6 border-t pt-6 border-black/10 space-y-[14px]">
          {details.map(
            detailKey =>
              data[detailKey] && (
                <li
                  key={detailKey}
                  className="flex items-center justify-between"
                >
                  <p className="heading-3 capitalize">{detailKey}</p>
                  <p className="heading-3 capitalize">{data[detailKey]}</p>
                </li>
              )
          )}
        </ul>
      </div>
    </div>
  );
};

export default VehicleFeatures;
