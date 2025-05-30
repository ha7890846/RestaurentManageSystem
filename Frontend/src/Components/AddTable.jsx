import { useState, useRef} from "react";
const AddTable = ({ onClose, onSave, defaultTableNum }) => {
  const [tableName, setTableName] = useState("Table");
  const [tableNum, setTableNum] = useState(defaultTableNum);
  const [chairs, setChairs] = useState(1);
  const modalRef = useRef();
  const handleClickOutside = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      onClose();
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if(tableNum>40){
      alert(`Table Number should be between "1-40"`)
      return;
    }
    onSave({ tableName: tableName, tableNum: tableNum, chairPerson: chairs });
  };

  return (
    <div className="modal-overlay" onClick={handleClickOutside}>
      <div ref={modalRef} className="modal-content">
        <form  className="modal-form">
          <div className="input-group">
            <input
              className="input-table-name"
              type="text"
              placeholder="Table Name"
              value={tableName}
              onChange={(e) => setTableName(e.target.value)}
              required
            />
            <input
              className="input-table-num"
              type="number"
              placeholder="Table Number"
              value={tableNum}
              onChange={(e) =>
                setTableNum(Number(e.target.value) || defaultTableNum)
              }
              min="1"
              max="40"
            />
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <label htmlFor="chairs">Chair</label>
            <select
              name="chairs"
              value={chairs}
              onChange={(e) => setChairs(e.target.value)}
            >
              <option value="01">01</option>
              <option value="02">02</option>
              <option value="03">03</option>
              <option value="04">04</option>
              <option value="05">05</option>
              <option value="06">06</option>
              <option value="07">07</option>
              <option value="08">08</option>
            </select>
          </div>
        </form>
          <div >
            <button className="create-btn" onClick={handleSubmit}>Create</button>
          </div>
      </div>
    </div>
  );
};

export default AddTable;
