import { ReactComponent as AdultsIcon } from "/public/images/icons/equipment/toilet.svg";
import { ReactComponent as ACIcon } from "/public/images/icons/equipment/ac.svg";
import { ReactComponent as AirIcon } from "/public/images/icons/equipment/air.svg";
import { ReactComponent as BedsIcon } from "/public/images/icons/equipment/beds.svg";
import { ReactComponent as CDIcon } from "/public/images/icons/equipment/cd.svg";
import { ReactComponent as FreezerIcon } from "/public/images/icons/equipment/freezer.svg";
import { ReactComponent as GasIcon } from "/public/images/icons/equipment/gas.svg";
import { ReactComponent as HobIcon } from "/public/images/icons/equipment/hob.svg";
import { ReactComponent as KitchenIcon } from "/public/images/icons/equipment/kitchen.svg";
import { ReactComponent as MicrowaveIcon } from "/public/images/icons/equipment/microwave.svg";
import { ReactComponent as PetrolIcon } from "/public/images/icons/equipment/petrol.svg";
import { ReactComponent as RadioIcon } from "/public/images/icons/equipment/radio.svg";
import { ReactComponent as ShowerIcon } from "/public/images/icons/equipment/shower.svg";
import { ReactComponent as ToiletIcon } from "/public/images/icons/equipment/toilet.svg";
import { ReactComponent as TransmissionIcon } from "/public/images/icons/equipment/transmission.svg";
import { ReactComponent as TVIcon } from "/public/images/icons/equipment/tv.svg";
import { ReactComponent as WaterIcon } from "/public/images/icons/equipment/water.svg";
import { ReactComponent as ChildrenIcon } from "/public/images/icons/equipment/children.svg";
import { ReactComponent as AlcoveIcon } from "/public/images/icons/type/alcove.svg";
import { ReactComponent as IntagratedIcon } from "/public/images/icons/type/intagrated.svg";
import { ReactComponent as VanIcon } from "/public/images/icons/type/van.svg";

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
  trasmission: TransmissionIcon,
  tv: TVIcon,
  water: WaterIcon,

  alcove: AlcoveIcon,
  intagrated: IntagratedIcon,
  van: VanIcon,
};

export type IconKeyType = keyof typeof Icon;
export type IconValueType = React.FC<React.SVGProps<SVGSVGElement>>;
