import { useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setData } from "../../store/userSlice";

export default function EditName({ open, setOpen, firstName, lastName, userName }) {
  const token = useSelector((state) => state.user.token);
  const dispatch = useDispatch();
  const userNameRef = useRef();
  
  // Ajout d'un état local pour gérer la modification du userName
  const [newUserName, setNewUserName] = useState(userName);

  const handleChange = (event) => {
    setNewUserName(event.target.value); // Met à jour l'état userName local à chaque modification
  };

  const handleSave = async () => {
    const updatedUserName = newUserName; // Utilise l'état local pour la nouvelle valeur du userName
    try {
      const response = await fetch(
        "http://localhost:3001/api/v1/user/profile",
        {
          method: "PUT",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ userName: updatedUserName }),
        }
      );

      if (response.ok) {
        const result = await response.json();
        dispatch(setData(result.body)); // Met à jour les données dans le store
        setOpen(false); // Ferme le formulaire après sauvegarde
      } else {
        console.error("Erreur HTTP :", response.status);
      }
    } catch (err) {
      console.error("Erreur réseau :", err);
    }
  };

  return (
    <div className={open ? "editName" : "displayNone"}>
      <h2>Edit user info</h2>
      <form action="submit">
        <div className="userName">
          <label htmlFor="userName">User name :</label>
          <input
            type="text"
            id="userName"
            value={newUserName} // Lien avec l'état local
            onChange={handleChange} // Mise à jour de l'état local à chaque modification
            ref={userNameRef}
          />
        </div>
        <div className="firstName">
          <label htmlFor="firstName">First name :</label>
          <input type="text" id="firstName" value={firstName} disabled />
        </div>
        <div className="lastName">
          <label htmlFor="lastName">Last name :</label>
          <input type="text" id="lastName" value={lastName} disabled />
        </div>
      </form>
      <button className="edit-button" onClick={handleSave}>
        Save
      </button>
      <button className="edit-button" onClick={() => setOpen(!open)}>
        Cancel
      </button>
    </div>
  );
}
