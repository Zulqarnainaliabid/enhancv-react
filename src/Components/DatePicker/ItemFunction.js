import "./DatePicker.css";
export default function ItemFunction(props) {
  function HandleIcon() {
    let temp = props.array;
    if (!temp[props.index].Isactive) {
      props.array.map((item, index) => {
        if (item.Isactive) {
          temp[index].Isactive = false;
        }
        if (item.selectedBoder) {
          temp[index].selectedBoder = false;
        }
      });
      temp[props.index].Isactive = true;
      props.month(temp[props.index].number)
      temp[props.index].selectedBoder = true;
      props.setMonthArry([...temp]);
    }
  }
  return (
    <>
      <div>
        <div
          className="CrossIcon"
          style={{ display: props.item.Isactive ? "block" : "none" }}
          onClick={() => {
            let temp = props.array;
            temp[props.index].Isactive = false;
            temp[props.index].selectedBoder = false;
            props.setMonthArry([...temp]);
            props.month(null)
          }}
          onMouseLeave={() => {
            let temp = props.array;
            temp[props.index].Isactive = false;
            props.setMonthArry([...temp]);
          }}
        >
          X
        </div>
        <div
          className="number"
          style={{
            border: props.item.selectedBoder ? "1px solid red" : "none",
          }}
          onClick={HandleIcon}
        >
          {props.data}
        </div>
      </div>
    </>
  );
}
