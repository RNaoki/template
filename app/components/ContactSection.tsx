import Info from './Info';
import Map from './Map';

const ContactSection: React.FC = () => {
  return (
    <div className="flex flex-row w-full bg-neutral-900 p-12 justify-between">
      <div className="flex flex-col bg-neutral-800 h-[200px] w-[300px] justify-between p-4 rounded-md">
        <Info label="Telefone" infoText="(12) 3456-7890" />
        <Info label="Endereço" infoText="Rua inexistente, 32" />
        <Info label="Email" infoText="email.falso@exemplo.com" />
      </div>
      <Map />
    </div>
  );
};

export default ContactSection;
