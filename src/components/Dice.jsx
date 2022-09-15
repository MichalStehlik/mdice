export const Dice = ({index, dices, setDices}) => (
    <span style={{margin: 10}} onClick={e => {
        let d = [...dices];
        d[index] = Math.round(Math.random()*6)
        setDices(d);
        //alert(d[index]);
        //dices[index] = Math.round(Math.random()*6);
    }}>{dices[index]}</span>
);

export default Dice;