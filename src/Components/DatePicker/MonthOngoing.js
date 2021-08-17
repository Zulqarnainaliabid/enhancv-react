import "./DatePicker.css";
export default function MonthOngoingFun(props) {
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
      props.HandleMonthOngoing(temp[props.index].number)
      temp[props.index].selectedBoder = true;
      props.setMonthOngoing([...temp]);
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
            props.setMonthOngoing([...temp]);
            props.HandleMonthOngoing(null)
          }}
          onMouseLeave={() => {
            let temp = props.array;
            temp[props.index].Isactive = false;
            props.setMonthOngoing([...temp]);
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
          {props.item.name}
        </div>
      </div>
    </>
  );
}
