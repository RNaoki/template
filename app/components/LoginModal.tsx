'use client';
import { useContext, useState } from 'react';
import InputField from './InputField';
import { IoCloseSharp } from 'react-icons/io5';
import { Modals } from '../utils/ModalsContext';

type TLoginFormDataHandler = {
  field: string;
  value: React.SetStateAction<string>;
};

const LoginModal: React.FC = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const { login, setLogin } = useContext(Modals);

  const changeFormData = ({ field, value }: TLoginFormDataHandler) => {
    setFormData((prevState) => {
      return { ...prevState, [field]: value };
    });
  };

  return (
    <div className="flex flex-col gap-8 items-center bg-neutral-100 rounded-[5px] absolute w-[90%] xl:w-[60%] h-[300px] pt-[35px] ">
      <div
        className="absolute top-[5px] right-[5px] cursor-pointer"
        onClick={() => setLogin(false)}
      >
        <IoCloseSharp size={24} />
      </div>
      <p className="font-bold text-3xl">Entrar</p>
      <div className="flex flex-col gap-4 w-[80%]">
        <InputField
          label="Usuário"
          value={formData.username ? formData.username : undefined}
          setValue={(e) => {
            changeFormData({ field: 'username', value: e });
          }}
        />
        <InputField
          label="Senha"
          type="password"
          value={formData.password ? formData.password : undefined}
          setValue={(e) => {
            changeFormData({ field: 'password', value: e });
          }}
        />
      </div>
    </div>
  );
};

export default LoginModal;
