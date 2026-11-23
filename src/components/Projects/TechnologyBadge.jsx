
const TechnologyBadge = ({ name }) => {
  return (
    <span className="inline-flex rounded-full border border-green-200 bg-green-50 px-3 py-1 text-xs font-medium text-green-800">
      {name}
    </span>
  );
};

export default TechnologyBadge;
