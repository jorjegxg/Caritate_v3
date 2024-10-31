import { Input } from '@headlessui/react';

const MyInput = ({
  hint,
  id,
  type,
}: {
  hint: string;
  id: string;
  type: string;
}) => {
  return (
    <div className="w-full max-w-xs">
      {/* <label className="block text-sm font-medium text-gray-700">{label}</label> */}
      <Input
        id={id}
        as="input"
        type={type}
        className="mt-1 w-full rounded-md border  shadow-sm  focus:border-secondary sm:text-sm"
        placeholder={hint}
      />
    </div>
  );
};

export default MyInput;
