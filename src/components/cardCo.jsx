function ReusableCard({ imageSrc, title, description }) {
  const cardStyle = {
    backgroundImage: `url(${imageSrc})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "300px",
    height: "300px",
  };
  return (
    <div
      className="max-w-sm m-4 overflow-hidden rounded-lg shadow-lg"
      style={cardStyle}
    >
      <div className="grid content-end h-full px-6 py-3 bg-black bg-opacity-50">
        <div className="mb-2 text-lg font-bold text-white">{title}</div>
        <p className="text-sm text-gray-200">{description}</p>
      </div>
    </div>
  );
}

export default ReusableCard;
