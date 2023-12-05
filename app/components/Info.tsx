type TInfo = {
  label: string;
  infoText: string;
};

const Info: React.FC<TInfo> = ({ label, infoText }) => {
  return (
    <p className="text-neutral-300">
      {label}:{' '}
      <span className="text-emerald-400 hover:text-emerald-200 cursor-pointer pl-3">
        {infoText}
      </span>
    </p>
  );
};

export default Info;
