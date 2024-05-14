import { Field } from "formik";

const TextInput = ({ id, name, errors, touched, placeholder, ...props }) => {
  return (
    <div className="mb-4">
      <Field
        type="text"
        id={id}
        name={name}
        className="w-full px-6 py-4 border border-gray-200 focus:outline-none focus:ring-1 focus:ring-indigo-500 shadow-sm"
        placeholder={placeholder}
      />
      {errors[name] && touched[name] && (
        <div className="text-red-500 text-xs italic">{errors[name]}</div>
      )}
    </div>
  );
};

export default TextInput;
