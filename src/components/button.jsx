/* eslint-disable react/prop-types */
export default function Button(props) {
  const { label, className } = props;
  return (
    <button className={`font-semibold text-white ${className}`} {...props}>
      {label}
    </button>
  );
}
