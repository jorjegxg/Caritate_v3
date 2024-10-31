import { create } from 'zustand';

//enum: daily , monthly

export enum Donations {
  Single = 'single',
  Monthly = 'monthly',
}

// Definim tipul pentru starea magazinului
interface DonationState {
  selectedAmount: number;
  donationType: Donations;
  setAmount: (amount: number) => void;
  setDonationType: (donationType: Donations) => void;
}

// Cream store-ul cu tipul specificat
const useDonationStore = create<DonationState>((set) => ({
  selectedAmount: 5,
  donationType: Donations.Single,
  setAmount: (amount: number) => set({ selectedAmount: amount }),
  setDonationType: (donationType: Donations) =>
    set({ donationType: donationType }),
}));

export default useDonationStore;
