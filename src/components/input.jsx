import clsx from "clsx";

function Input(props) {
  const { label, id, error, register, name, type } = props;

  return (
    <div className="flex flex-col mb-4">
      <label className="mb-3 tracking-wider text-black" htmlFor={id}>
        {label}
      </label>
      <input
        className={clsx(
          "border rounded-lg bg-slate-50 border-red-500 text-black  p-2 focus:outline-none focus:border-slate-100 focus:ring-1 focus:ring-slate-200 w-full",
          !error && "border-slate-900"
        )}
        type={type}
        {...(register
          ? register(name, {
              valueAsNumber: type === "number" ? true : false,
            })
          : {})}
        {...props}
      />
      {error && (
        <label className="label">
          <span className="text-sm font-light text-red-500 break-words">
            {error}
          </span>
        </label>
      )}
    </div>
  );
}

function TextArea(props) {
  const { label, id, error, register, name } = props;

  return (
    <div className="flex flex-col mb-4">
      <label
        className="mb-3 tracking-wider text-black dark:text-white"
        htmlFor={id}
      >
        {label}
      </label>
      <textarea
        className={clsx(
          "border rounded-lg bg-slate-200 dark:bg-neutral-600 border-red-500 text-black dark:text-white p-2 focus:outline-none focus:border-slate-200 focus:ring-1 focus:ring-slate-200 w-full",
          !error && "border-slate-200"
        )}
        {...(register ? register(name) : {})}
        {...props}
      />
      {error && (
        <label className="label">
          <span className="text-sm font-light text-red-500 break-words">
            {error}
          </span>
        </label>
      )}
    </div>
  );
}

function Select(props) {
  const { label, placeholder, id, error, options, register, name } = props;

  return (
    <div className="flex flex-col mb-4">
      <label
        className="mb-3 tracking-wider text-black dark:text-white"
        htmlFor={id}
      >
        {label}
      </label>
      <select
        className={clsx(
          "border rounded-lg bg-slate-200 dark:bg-neutral-600 border-red-500 text-black dark:text-white p-2 focus:outline-none focus:border-slate-200 focus:ring-1 focus:ring-slate-200 w-full",
          !error && "border-slate-200"
        )}
        defaultValue=""
        {...(register ? register(name) : {})}
        {...props}
      >
        <option disabled value="">
          {placeholder}
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      {error && (
        <label className="label">
          <span className="text-sm font-light text-red-500 break-words">
            {error}
          </span>
        </label>
      )}
    </div>
  );
}

function RadioGroup(props) {
  const { label, error, options, register, name } = props;

  return (
    <div className="flex flex-col mb-4" aria-label={props["aria-label"]}>
      <label className="mb-3 tracking-wider text-black dark:text-white">
        {label}
      </label>
      {options.map((option) => (
        <label
          className="tracking-wider text-black dark:text-white"
          htmlFor={option}
          key={option}
        >
          <input
            className="mr-4"
            type="radio"
            value={option}
            id={option}
            {...(register ? register(name) : {})}
          />
          {option}
        </label>
      ))}
      {error && (
        <label className="label">
          <span className="text-sm font-light text-red-500 break-words">
            {error}
          </span>
        </label>
      )}
    </div>
  );
}

export { Input, TextArea, Select, RadioGroup };
