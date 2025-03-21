type PropType = {
    placeholder : string
    onChange : () => void
};

export default function InputBox({placeholder} : PropType) {
    return(
        <input type="text" placeholder={placeholder}></input>
    )
}