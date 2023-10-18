/* eslint-disable react/prop-types */
export default function Button(props) {
  const { label, className } = props;
  return (
    <button className={`p-3 px-6 font-bold text-white ${className}`} {...props}>
      {label}
    </button>
  );
}
