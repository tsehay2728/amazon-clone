import React, { useEffect, useState } from "react";
import "./Orders.css";
import { db } from "./Firebase";
import { useStatevalue } from "./StateProvider";
import Order from "./Order";

function Orders() {
  const [{ basket, user }, dispatch] = useStatevalue();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (user) {
      db.collection("users")
        .doc(user?.uid)
        .collection("orders")
        .orderBy("created", "desc")
        .onSnapshot((snapshot) =>
          setOrders(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          )
        );
    } else {
      setOrders([]);
    }
  }, [user]);

  return (
    <div className="orders">
      <h1>Your Orders</h1>

      <dive className="orders__order">
        {orders?.map((order) => (
          <Order order={order} />
        ))}
      </dive>
    </div>
  );
}

export default Orders;
