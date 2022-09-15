export const DiceCount = ({value, setValue}) => (
    <div>
        <button onClick={e => {setValue(value - 1)}}>-</button>
        {value}
        <button onClick={e => {setValue(value + 1)}}>+</button>
    </div>
)

export default DiceCount;