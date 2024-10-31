import { FaBowlFood } from 'react-icons/fa6';
import { GiHeartPlus, GiMedicinePills } from 'react-icons/gi';

import { PricingCard } from '../components/donate/pricing-card';

const Cards = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row justify-center items-center md:space-x-5 space-y-5 md:space-y-0">
        <PricingCard
          icon={GiMedicinePills}
          price={50}
          description="îi poți dărui unui vârstnic medicamente pentru o lună"
        />
        <PricingCard
          icon={GiHeartPlus}
          price={100}
          description="donezi un pachet cu alimente de bază pentru un senior"
        />
        <PricingCard
          icon={FaBowlFood}
          price={200}
          description="dăruiești unui bunic un pachet complet de alimente și produse de igienă"
        />
      </div>
    </div>
  );
};

export default Cards;
