export default function EditName({open, setOpen, firstName, lastName}){
    return (
      <div className={open ? "editName" : "displayNone"}>
        <h2>Edit user info</h2>
        <form action="submit">
          <div className="userName">
            <label htmlFor="userName">User name :</label>
            <input type="text" />
          </div>
          <div className="firstName">
            <label htmlFor="firstName">First name :</label>
            <input type="text" id="firstName" value={firstName} disabled/>
          </div>
          <div className="lastName">
            <label htmlFor="lastName">Last name :</label>
            <input type="text" id="lastName" value={lastName} disabled/>
          </div>
        </form>
        <button className="edit-button" onClick={() => setOpen(!open)}>Save</button>
        <button className="edit-button" onClick={() => setOpen(!open)}>Cancel</button>
      </div>
    );
}

// appeler setdata json

