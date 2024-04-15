import Chip from "components/UIKit/Chip";

const VehicleFeatures = () => {
  return (
    <div>
      <ul className="flex flex-wrap gap-2 ">
        <li>
          <Chip
            iconKey="adults"
            title="adults"
            value={2}
          />
        </li>

        <li>
          <Chip
            iconKey="transmission"
            title="Automatic"
            value={1}
          />
        </li>

        <li>
          <Chip
            iconKey="petrol"
            title="petrol"
            value={1}
          />
        </li>

        <li>
          <Chip
            iconKey="kitchen"
            title="kitchen"
            value={1}
          />
        </li>

        <li>
          <Chip
            iconKey="beds"
            title="beds"
            value={1}
          />
        </li>

        <li>
          <Chip
            iconKey="airConditioner"
            title="AC"
            value={1}
          />
        </li>

        <li>
          <Chip
            iconKey="airConditioner"
            title="AC"
            value={1}
          />
        </li>

        <li>
          <Chip
            iconKey="airConditioner"
            title="AC"
            value={1}
          />
        </li>

        <li>
          <Chip
            iconKey="airConditioner"
            title="AC"
            value={1}
          />
        </li>

        <li>
          <Chip
            iconKey="transmission"
            title="Automatic"
            value={1}
          />
        </li>

        <li>
          <Chip
            iconKey="transmission"
            title="Automatic"
            value={1}
          />
        </li>
      </ul>

      <div className="mt-[44px]">
        <h3 className="heading-2 ">Vehicle details</h3>
        <ul className="mt-6 border-t pt-6 border-black/10 space-y-[14px]">
          <li className="flex items-center justify-between">
            <p className="heading-3">Form</p>
            <p className="heading-3">Panel truck</p>
          </li>

          <li className="flex items-center justify-between">
            <p className="heading-3">Length</p>
            <p className="heading-3">5.4 m</p>
          </li>

          <li className="flex items-center justify-between">
            <p className="heading-3">Width</p>
            <p className="heading-3">2.01 m</p>
          </li>

          <li className="flex items-center justify-between">
            <p className="heading-3">Height</p>
            <p className="heading-3">2.05 m</p>
          </li>

          <li className="flex items-center justify-between">
            <p className="heading-3">Tank</p>
            <p className="heading-3">132 I</p>
          </li>

          <li className="flex items-center justify-between">
            <p className="heading-3">Consumption</p>
            <p className="heading-3">12.4l/100km</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default VehicleFeatures;
