import { useContext } from 'react';
import { Modals } from '../utils/ModalsContext';
import { IoCloseSharp } from 'react-icons/io5';

type TMenuModal = {
  children: React.ReactNode;
};

const MenuModal: React.FC<TMenuModal> = ({ children }) => {
  const { menu, setMenu } = useContext(Modals);

  return (
    menu && (
      <div className="fixed h-[100vh] w-[100vw] top-0 left-0">
        <div className="absolute w-full h-full top-0 bg-neutral-800">
          <div
            className="absolute top-[20px] right-[20px] cursor-pointer"
            onClick={() => setMenu(false)}
          >
            <IoCloseSharp size={24} color={'white'} />
          </div>
          {children}
        </div>
      </div>
    )
  );
};

export default MenuModal;
