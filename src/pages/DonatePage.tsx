'use server';
import { FaHeart } from 'react-icons/fa';
import Canvas from '../components/Canvas';
import { Form } from '../components/donate/form';
import LazyShow from '../components/LazyShow';
import Cards from '../sections/Cards';
import DonateButtons from '../sections/DonateComponents';
import TitleDescaription from '../sections/TitleDescription';

const DonatePage = () => {
  return (
    <div className="bg-lightAccent">
      <div className="my-10">
        <TitleDescaription />
      </div>

      <LazyShow>
        <>
          <div>
            <div className="flex justify-center items-center">
              <div className="text-2xl font-bold text-primary flex justify-center pr-2">
                Fă o donație
              </div>
              <FaHeart className="text-primary" />
            </div>

            <Cards />
            <div className="flex justify-center items-center pt-10 max-sm:flex-col">
              <div className="sm:pr-10 ">
                <DonateButtons />
              </div>
              <div className="max-sm:pt-5 w-2/5">
                <div className="xs:w-1/5 ">
                  <Form />
                </div>
              </div>
            </div>
          </div>
          <Canvas />
        </>
      </LazyShow>
    </div>
  );
};

export default DonatePage;
