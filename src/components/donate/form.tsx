//component:

import { Button } from '@headlessui/react';
import MyInput from './MyInput';
export function Form() {
  return (
    <div className="flex flex-col items-center space-y-3">
      <MyInput hint="Nume" id="nume" type="text" />

      <MyInput hint="Prenume" id="prenume" type="text" />

      <MyInput hint="Email" id="email" type="email" />

      <MyInput hint="Telefon" id="phone" type="text" />

      <Button
        type="submit"
        className="w-1/3 inline-flex justify-center items-center gap-2 rounded-md bg-primary py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white"
      >
        Doneaza
      </Button>
    </div>
  );
}
