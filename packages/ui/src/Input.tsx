type PropType = {
    placeholder : string
    onChange : () => void
    size : "big" | "small"
};

export default function InputBox({placeholder, size } : PropType) {
    return(
        <input type="text" placeholder={placeholder} style={{
            fontWeight : size === "big" ? 20 : 10
        }}></input>
    )
}