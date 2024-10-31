//funtie :

import { Button, TextInput } from 'flowbite-react';
import { Form } from './form';

export const Donare = () => {
  return (
    <div className="xs:flex max-xs:flex-cols pt-10">
      <div className="pr-10 ">
        <div className="flex justify-center">
          <div className="flex">
            <div className="pr-5">
              <Button color="light" className="inline rounded-full">
                Lunara
              </Button>
            </div>
            <Button color="dark" className="inline rounded-full">
              Singulara
            </Button>
          </div>
        </div>
        <div className="flex items-center justify-center min-h-screen pt-5">
          <div className="grid grid-cols-2 gap-4">
            <Button
              color="light"
              className="flex rounded-full w-40 justify-center"
            >
              50 lei
            </Button>
            <Button
              color="light"
              className="flex rounded-full w-40 justify-center"
            >
              100 lei
            </Button>
            <Button
              color="light"
              className="flex rounded-full w-40 justify-center"
            >
              200 lei
            </Button>
            <Button
              color="light"
              className="rounded-full w-40 flex justify-center"
            >
              500 lei
            </Button>
          </div>
        </div>
        <div className="flex justify-center pt-5  ">
          <TextInput
            type="number"
            id="suma-dorita"
            placeholder="Suma in RON"
            className="text-center"
          />
        </div>
      </div>

      <Form />
    </div>
  );
};
