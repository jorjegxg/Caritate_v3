import { Button } from 'flowbite-react';

const RoundedButton = ({
  text,
  isSelected = false,
  smallButton = false,
  onClick,
}: {
  text: string;
  isSelected?: boolean;
  smallButton?: boolean;
  onClick: () => void;
}) => {
  return (
    <Button
      onClick={onClick}
      // color={isSelected ? 'dark' : 'light'}
      className={`flex rounded-full justify-center 
        ${smallButton ? 'w-32' : 'w-40'}
        ${
          isSelected
            ? 'bg-primary text-background hover:bg-secondary '
            : 'bg-background text-primary ring-1 ring-primary hover:bg-primary hover:text-background'
        }`}
    >
      {text}
    </Button>
  );
};

export default RoundedButton;
