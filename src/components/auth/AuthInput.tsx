interface AuthInputProps {
  label: string;
  type?: "email" | "password" | "text";
  value: any;
  handleValueChange: (newValue: any) => void;
  essential: boolean;
  noRender?: boolean;
}

export function AuthInput({
  label,
  type,
  value,
  handleValueChange,
  essential,
  noRender
}: AuthInputProps) {

  return noRender ? null : (
    <div className={`flex flex-col mt-4`}>
      <label>{label}</label>
      <input
        type={type ?? "text"}
        value={value}
        onChange={e => handleValueChange?.(e.target.value)}
        required={essential}
        className={`px-4 py-3 rounded-lg bg-gray-200 mt-2 
        border focus:border-blue-500 focus:outline-none focus:bg-white`}
      />
    </div>
  );
}