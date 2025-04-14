import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { setData } from "../../store/userSlice";

import Header from "../structures/Header";
import EditName from "../ui/EditName";
import Footer from "../structures/Footer";

export default function User() {
  const token = useSelector((state) => state.user.token);
  const data = useSelector((state) => state.user.data)
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!token) {
      navigate("/");
    } else {
      const fetchData = async () => {
        try {
          const response = await fetch(
            "http://localhost:3001/api/v1/user/profile",
            {
              method: "GET",
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
              },
            }
          );

          if (response.ok) {
            const respdata = await response.json();
            dispatch(setData(respdata.body));
          } else {
            console.error("Erreur HTTP", response.status);
          }
        } catch (err) {
          console.error("Erreur réseau :", err);
        }
      };

      fetchData();
    }
  }, [token, dispatch, navigate]);
  if (!token) return null;

  return (
    <>
      <Header />
      {data ? (
        <main className="main bg-dark">
          <div className="header">
            {open == false ? (
              <>
                <h1>
                  Welcome back
                  <br />
                  {data.userName} !
                </h1>
                <button className="edit-button" onClick={() => setOpen(!open)}>
                  Edit Name
                </button>
              </>
            ) : (
              <EditName
                open={open}
                setOpen={setOpen}
                firstName={data.firstName}
                lastName={data.lastName}
                userName={data.userName}
              />
            )}
          </div>
          <h2 className="sr-only">Accounts</h2>
          <section className="account">
            <div className="account-content-wrapper">
              <h3 className="account-title">Argent Bank Checking (x8349)</h3>
              <p className="account-amount">$2,082.79</p>
              <p className="account-amount-description">Available Balance</p>
            </div>
            <div className="account-content-wrapper cta">
              <button className="transaction-button">View transactions</button>
            </div>
          </section>
          <section className="account">
            <div className="account-content-wrapper">
              <h3 className="account-title">Argent Bank Savings (x6712)</h3>
              <p className="account-amount">$10,928.42</p>
              <p className="account-amount-description">Available Balance</p>
            </div>
            <div className="account-content-wrapper cta">
              <button className="transaction-button">View transactions</button>
            </div>
          </section>
          <section className="account">
            <div className="account-content-wrapper">
              <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
              <p className="account-amount">$184.30</p>
              <p className="account-amount-description">Current Balance</p>
            </div>
            <div className="account-content-wrapper cta">
              <button className="transaction-button">View transactions</button>
            </div>
          </section>
        </main>
      ) : (
        <p>Chargement en cours...</p>
      )}
      <Footer />
    </>
  );
}
