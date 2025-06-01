import { useEffect, useState } from "react";
import AddTable from "./AddTable";
import { LiaChairSolid } from "react-icons/lia";
import { RiDeleteBin6Line } from "react-icons/ri";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
const Tables = () => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState([]);
  const [nextTableNum, setNextTableNum] = useState(1);

  const handleOpen = () => setShowModal(true);
  const handleClose = () => setShowModal(false);
  const deleteTable = async (tableId) => {
    if (!window.confirm("Are you sure you want to delete this table?")) return;

    try {
      const response = await axios.delete(
        `https://restaurent-backend-bzlm.onrender.com/api/table/${tableId}`
      );

      if (response.data) {
        setFormData((prevTables) =>
          prevTables.filter((table) => table._id !== tableId)
        );
        toast.success("Table deleted successfully!");
      } else {
        alert(response.data.error || "Failed to delete table");
      }
    } catch (err) {
      console.error("Delete failed:", err);
      alert("Failed to delete table. Please try again.");
    }
  };
  const handleSave = async (newTable) => {
    try {
      const response = await axios.post(
        "https://restaurent-backend-bzlm.onrender.com/api/table",
        newTable
      );
      setFormData([...formData, response.data]);
      toast.success(`New Table Added Successfully !`);
      setNextTableNum(newTable.tableNum + 1);
      handleClose();
    } catch (error) {
      console.error("Failed to save table:", error);
    }
  };
  useEffect(() => {
    fetchTables();
  }, []);
  const fetchTables = async () => {
    const res = await axios.get("https://restaurent-backend-bzlm.onrender.com/api/table");
    setFormData(res.data);
    console.log(res.data);
  };
  return (
    <main className="table-container">
      <div>
        <Toaster />
      </div>
      <h1>Tables:</h1>
      <section className="planing">
        {formData.map((item) => (
          <div key={item._id} className="table">
            <div className="dlt-table">
              <button onClick={() => deleteTable(item._id)}>
                <RiDeleteBin6Line size={20} />
              </button>
            </div>
            <div className="table-details">
              <h1 className="table-name">{item.tableName}</h1>
              <h1 className="table-num">
                {String(item.tableNum).padStart(2, "0")}
              </h1>
            </div>
            <div className="chair-person">
              <p>
                <LiaChairSolid />
                {item.chairPerson}
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
