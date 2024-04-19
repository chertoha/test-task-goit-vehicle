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
import { ReactComponent as BathroomIcon } from "assets/icons/equipment/bathroom.svg";
import { ReactComponent as AlcoveIcon } from "assets/icons/type/alcove.svg";
import { ReactComponent as IntagratedIcon } from "assets/icons/type/intagrated.svg";
import { ReactComponent as VanIcon } from "assets/icons/type/van.svg";

export const Icon = {
  adults: { icon: AdultsIcon, title: "adults" },
  children: { icon: ChildrenIcon, title: "children" },
  airConditioner: { icon: ACIcon, title: "AC" },
  air: { icon: AirIcon, title: "air" },
  beds: { icon: BedsIcon, title: "beds" },
  CD: { icon: CDIcon, title: "CD" },
  freezer: { icon: FreezerIcon, title: "freezer" },
  gas: { icon: GasIcon, title: "gas" },
  hob: { icon: HobIcon, title: "hob" },
  kitchen: { icon: KitchenIcon, title: "kitchen" },
  microwave: { icon: MicrowaveIcon, title: "microwave" },
  engine: { icon: PetrolIcon, title: "petrol" },
  radio: { icon: RadioIcon, title: "radio" },
  shower: { icon: ShowerIcon, title: "shower" },
  toilet: { icon: ToiletIcon, title: "toilet" },
  transmission: { icon: TransmissionIcon, title: "transmission" },
  tv: { icon: TVIcon, title: "TV" },
  water: { icon: WaterIcon, title: "water" },
  bathroom: { icon: BathroomIcon, title: "bathroom" },

  alcove: { icon: AlcoveIcon, title: "alcove" },
  fullyIntegrated: { icon: IntagratedIcon, title: "fully integrated" },
  panelTruck: { icon: VanIcon, title: "panel truck" },
};

export type IconKeyType = keyof typeof Icon;
export type IconValueType = React.FC<React.SVGProps<SVGSVGElement>>;
