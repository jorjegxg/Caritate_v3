import { TextInput } from 'flowbite-react';
import RoundedButton from '../components/donate/RoundedButton';
import useDonationStore, { Donations } from '../stores/amount';

const DonateButtons = () => {
  const donationType = useDonationStore((state) => state.donationType);
  const setDonationType = useDonationStore((state) => state.setDonationType);

  const selectedAmount = useDonationStore((state) => state.selectedAmount);
  const setAmount = useDonationStore((state) => state.setAmount);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const amount = parseInt(e.target.value, 10);
    setAmount(amount);

    if (isNaN(amount)) {
      console.log('NaN');
    }

    // TODO: mai trebuie o verificare isNaN

    // if (!isNaN(amount)) {
    // } else {
    //   setAmount(0);
    // }
  };

  return (
    <div className="flex flex-col justify-center">
      <div className="flex justify-center space-x-5">
        <RoundedButton
          text="Lunara"
          isSelected={donationType === Donations.Monthly}
          smallButton={true}
          onClick={() => setDonationType(Donations.Monthly)}
        />
        <RoundedButton
          text="Singulara"
          isSelected={donationType === Donations.Single}
          smallButton={true}
          onClick={() => setDonationType(Donations.Single)}
        />
      </div>

      <div className="grid grid-cols-2 gap-4 pt-5">
        {[50, 100, 200, 500].map((amount) => (
          <RoundedButton
            key={amount}
            text={`${amount} lei`}
            onClick={() => setAmount(amount)}
            isSelected={selectedAmount === amount}
          />
        ))}
      </div>

      <div className="pt-5 flex justify-center">
        <TextInput
          type="number"
          id="suma-dorita"
          placeholder="Suma in RON"
          value={selectedAmount}
          onChange={handleInputChange}
          //color primary
          className="text-center w-3/4"
          min={2}
        />
      </div>
    </div>
  );
};

export default DonateButtons;
