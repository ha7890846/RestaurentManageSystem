export const TableArrange = () => {
    let tables = Array.from({ length: 24 }, (_, i) => ({
  id: i + 1,
  isReserved: false,
  reservedBy: ''
}));
  return (
    <>
        <div style={{display:"flex",flexWrap:"wrap",justifyContent:"space-evenly",gap:"5px"}}>
        {tables.map(table => (
          <div style={{height:"50px",width:"50px"}}
            key={table.id}
            className={`table ${table.isReserved ? 'reserved' : 'available'}`}
          >
            Table {table.id}
            {table.isReserved && <span> (Reserved)</span>}
          </div>
        ))}
      </div>
    </>
  );
};
