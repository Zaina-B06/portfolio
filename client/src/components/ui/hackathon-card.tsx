interface HackathonCardProps {
  name: string;
  description: string;
}

const HackathonCard: React.FC<HackathonCardProps> = ({ name, description }) => {
  return (
    <div className="bg-secondary p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="flex flex-col md:flex-row md:items-center">
        <div className="md:w-1/3 mb-4 md:mb-0">
          <h3 className="text-2xl font-bold text-primary-text">{name}</h3>
        </div>
        <div className="md:w-2/3">
          <p className="text-primary-text">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default HackathonCard;
