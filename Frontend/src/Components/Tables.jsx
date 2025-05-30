import { useEffect, useState } from "react";
import AddTable from "./AddTable";
import { LiaChairSolid } from "react-icons/lia";
import { RiDeleteBin6Line } from "react-icons/ri";

const Tables = () => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState([]);
  const [nextTableNum, setNextTableNum] = useState(1);

  const handleOpen = () => setShowModal(true);
  const handleClose = () => setShowModal(false);
  const deleteTable = (number) => {
    setFormData(formData.filter((item) => item.number !== number));
  };
  const handleSave = (newTable) => {
    setFormData([...formData, newTable]);
    setNextTableNum(Math.max(nextTableNum, newTable.number) + 1);
    handleClose();
  };
  useEffect(() => {
    console.log(formData);
  }, [formData]);

  return (
    <main className="table-container">
      <h1>Tables:</h1>
      <section className="planing">
        {formData.map((item) => (
          <div key={item.number} className="table">
            <div   className="dlt-table">
              <button
                onClick={() => deleteTable(item.number)}
              >
                <RiDeleteBin6Line size={20} />
              </button> 
            </div>
            <div className="table-details">
              <h1 className="table-name">{item.name}</h1>
              <h1 className="table-num">{String(item.number).padStart(2, '0')}</h1>
            </div>
            <div className="chair-person">
              <p>
                <LiaChairSolid />
                {item.chairs}
              </p>
            </div>
          </div>
        ))}
        <button className="addTable-btn" onClick={handleOpen}>
          +
        </button>
      </section>

      {showModal && (
        <AddTable
          onClose={handleClose}
          onSave={handleSave}
          defaultTableNum={nextTableNum}
        />
      )}
    </main>
  );
};

export default Tables;
