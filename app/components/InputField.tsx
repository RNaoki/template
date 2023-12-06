import { twMerge } from 'tailwind-merge';

type TInputField = {
  label: string;
  type?: 'password' | 'text' | 'numeric' | 'email';
  className?: string;
  value: string | undefined;
  setValue: (e: React.SetStateAction<string>) => void;
};

const InputField: React.FC<TInputField> = ({
  label,
  type = 'text',
  className,
  value,
  setValue,
}) => {
  return (
    <div
      className={twMerge(
        'relative my-[10px] w-full flex flex-col items-center',
        className,
      )}
    >
      <input
        type={type}
        id={label}
        value={value}
        placeholder=""
        onChange={(e) => setValue(e.target.value)}
        aria-describedby="outlined_success_help"
        className="block px-2.5 pb-2.5 pt-4 text-sm text-gray-900 bg-transparent rounded-lg appearance-none focus:outline-none focus:ring-0 peer text-[20px] border-[2px] border-emerald-600 w-full"
      />
      <label
        htmlFor={label}
        className="absolute text-[20px] duration-300 transform -translate-y-4 scale-75 top-[3px] z-10 origin-[0] bg-neutral-100 px-2 peer-focus:px-2 peer-focus:text-emerald-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-[0px] peer-focus:scale-50 peer-focus:-translate-y-4 start-1 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
      >
        {label}
      </label>
    </div>
  );
};

export default InputField;
