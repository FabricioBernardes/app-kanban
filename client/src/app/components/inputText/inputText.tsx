import "./inputText.scss"

interface InputTextProps {
    label: string;
    name: string;
    value: string;
    placeholder: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputText = ({ label, name, value, placeholder, onChange }: InputTextProps) => (
    <div className="text-field">
        {label !== "" ? <label htmlFor={name}>{label}</label> : null}
        <input className="input-text" type="text" name={name} id={name} placeholder={placeholder} value={value} onChange={onChange} />
    </div>
);

export default InputText;
