import Info from './Info';

const ContactSection: React.FC = () => {
  return (
    <div className="flex flex-row w-full h-[70vh] bg-neutral-900 p-12">
      <div className="flex flex-col bg-neutral-800 h-[200px] w-[300px] justify-between p-4 rounded-md">
        <Info label="Telefone" infoText="(12) 3456-7890" />
        <Info label="Endereço" infoText="Rua inexistente, 32" />
        <Info label="Email" infoText="email.falso@exemplo.com" />
      </div>
    </div>
  );
};

export default ContactSection;
