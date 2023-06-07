'use client';

import Container from '../Container';

import { IoDiamond } from 'react-icons/io5';
import { BsSnow } from 'react-icons/bs';
import { TbBeach, TbMountain, TbPool } from 'react-icons/tb';
import {
  GiWindmill,
  GiIsland,
  GiBoatFishing,
  GiCastle,
  GiCactus,
  GiForestCamp,
  GiCaveEntrance,
  GiBarn,
} from 'react-icons/gi';
import { MdOutlineVilla } from 'react-icons/md';
import { FaSkiing } from 'react-icons/fa';
import CategoryBox from '../CategoryBox';
import { useSearchParams, usePathname } from 'next/navigation';

export const categories = [
  {
    label: 'Beach',
    icon: TbBeach,
    descrption: 'This property is close to the beach!',
  },
  {
    label: 'Windmills',
    icon: GiWindmill,
    descrption: 'This property has windmills!',
  },
  {
    label: 'Modern',
    icon: MdOutlineVilla,
    descrption: 'This property is modern!',
  },
  {
    label: 'CountrySide',
    icon: TbMountain,
    descrption: 'This property is countryside!',
  },
  {
    label: 'Pools',
    icon: TbPool,
    descrption: 'This property has a pool!',
  },
  {
    label: 'Islands',
    icon: GiIsland,
    descrption: 'This property is on an island!',
  },
  {
    label: 'Lake',
    icon: GiBoatFishing,
    descrption: 'This property is close to a lake!',
  },
  {
    label: 'Skiing',
    icon: FaSkiing,
    descrption: 'This property has skiing activities!',
  },
  {
    label: 'Castles',
    icon: GiCastle,
    descrption: 'This property is in a castle!',
  },
  {
    label: 'Camping',
    icon: GiForestCamp,
    descrption: 'This property has camping activities!',
  },
  {
    label: 'Arctic',
    icon: BsSnow,
    descrption: 'This property has camping activities!',
  },
  {
    label: 'Cave',
    icon: GiCaveEntrance,
    descrption: 'This property is in a cave!',
  },
  {
    label: 'Desert',
    icon: GiCactus,
    descrption: 'This property is in the desert!',
  },
  {
    label: 'Barns',
    icon: GiBarn,
    descrption: 'This property is in the barn!',
  },
  {
    label: 'Lux',
    icon: IoDiamond,
    descrption: 'This property is luxurious!',
  },
];

const Categories = () => {
  const params = useSearchParams();
  const category = params?.get('category');
  const pathname = usePathname();

  const isMainPage = pathname === '/';

  if (!isMainPage) return null;

  return (
    <Container>
      <div className="pt-4 flex flex-row items-center justify-between overflow-x-auto">
        {categories.map((item) => (
          <CategoryBox
            key={item.label}
            label={item.label}
            selected={category === item.label}
            icon={item.icon}
          />
        ))}
      </div>
    </Container>
  );
};

export default Categories;
