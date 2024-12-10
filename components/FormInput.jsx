export default function FormInput({ label, name, value, onChange, placeholder }) {
    return (
        <label>{label}
            <input
                type="text"
                placeholder={placeholder}
                name={name}
                onChange={onChange}
                value={value}
            />
        </label>
    )
} 