export default function Button(props) {
  const { label, className } = props;
  return (
    <button className={`btn btn-neutral btn-wide ${className}`} {...props}>
      {label}
    </button>
  );
}
