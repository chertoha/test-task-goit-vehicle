import { ReactComponent as ACIcon } from "assets/icons/equipment/ac.svg";
import { ReactComponent as AdultsIcon } from "assets/icons/equipment/adults.svg";
import { ReactComponent as AirIcon } from "assets/icons/equipment/air.svg";
import { ReactComponent as BedsIcon } from "assets/icons/equipment/beds.svg";
import { ReactComponent as CDIcon } from "assets/icons/equipment/cd.svg";
import { ReactComponent as FreezerIcon } from "assets/icons/equipment/freezer.svg";
import { ReactComponent as GasIcon } from "assets/icons/equipment/gas.svg";
import { ReactComponent as HobIcon } from "assets/icons/equipment/hob.svg";
import { ReactComponent as KitchenIcon } from "assets/icons/equipment/kitchen.svg";
import { ReactComponent as MicrowaveIcon } from "assets/icons/equipment/microwave.svg";
import { ReactComponent as PetrolIcon } from "assets/icons/equipment/petrol.svg";
import { ReactComponent as RadioIcon } from "assets/icons/equipment/radio.svg";
import { ReactComponent as ShowerIcon } from "assets/icons/equipment/shower.svg";
import { ReactComponent as ToiletIcon } from "assets/icons/equipment/toilet.svg";
import { ReactComponent as TransmissionIcon } from "assets/icons/equipment/transmission.svg";
import { ReactComponent as TVIcon } from "assets/icons/equipment/tv.svg";
import { ReactComponent as WaterIcon } from "assets/icons/equipment/water.svg";
import { ReactComponent as ChildrenIcon } from "assets/icons/equipment/children.svg";
import { ReactComponent as AlcoveIcon } from "assets/icons/type/alcove.svg";
import { ReactComponent as IntagratedIcon } from "assets/icons/type/intagrated.svg";
import { ReactComponent as VanIcon } from "assets/icons/type/van.svg";

export const Icon = {
  adults: AdultsIcon,
  children: ChildrenIcon,
  airConditioner: ACIcon,
  air: AirIcon,
  beds: BedsIcon,
  cd: CDIcon,
  freezer: FreezerIcon,
  gas: GasIcon,
  hob: HobIcon,
  kitchen: KitchenIcon,
  microwave: MicrowaveIcon,
  petrol: PetrolIcon,
  radio: RadioIcon,
  shower: ShowerIcon,
  toilet: ToiletIcon,
  transmission: TransmissionIcon,
  tv: TVIcon,
  water: WaterIcon,

  alcove: AlcoveIcon,
  intagrated: IntagratedIcon,
  van: VanIcon,
};

export type IconKeyType = keyof typeof Icon;
export type IconValueType = React.FC<React.SVGProps<SVGSVGElement>>;
