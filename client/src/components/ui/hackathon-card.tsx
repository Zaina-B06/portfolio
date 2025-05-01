interface HackathonCardProps {
  name: string;
  details: string[];
  description?: string; // Adding for backward compatibility
}

const HackathonCard: React.FC<HackathonCardProps> = ({ name, details = [], description }) => {
  return (
    <div className="bg-secondary p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/3 mb-4 md:mb-0">
          <h3 className="text-2xl font-bold text-primary-text">{name}</h3>
        </div>
        <div className="md:w-2/3">
          <ul className="space-y-1 text-primary-text">
            {details.map((detail, index) => (
              <li key={index} className="flex items-start">
                <span className="inline-block mr-2 mt-1 text-xs">•</span>
                <span>{detail}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HackathonCard;
