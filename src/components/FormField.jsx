export default function FormField({
  label,
  name,
  type = "text",
  value,
  onChange,
  required = false,
  placeholder,
  options,
  rows = 5,
}) {
  const baseClass =
    "w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-navy shadow-sm transition placeholder:text-slate-400 focus:border-blue";

  return (
    <label className="block">
      <span className="mb-2 block text-sm font-bold text-navy">
        {label}
        {required && <span className="text-blue"> *</span>}
      </span>
      {options ? (
        <select name={name} value={value} onChange={onChange} required={required} className={baseClass}>
          <option value="">Select an option</option>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      ) : type === "textarea" ? (
        <textarea
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          placeholder={placeholder}
          rows={rows}
          className={baseClass}
        />
      ) : (
        <input
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          required={required}
          placeholder={placeholder}
          className={baseClass}
        />
      )}
    </label>
  );
}
