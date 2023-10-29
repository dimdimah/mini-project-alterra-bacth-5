function label({ text, className }) {
  return (
    <div
      className={`w-fit mx-auto rounded-full px-4 py-2 font-normal text-base bg-[#FFDA79] text-[#0D0C22] ${className}`}
    >
      <h1 className="flex items-center">{text}</h1>
    </div>
  );
}

export default label;
