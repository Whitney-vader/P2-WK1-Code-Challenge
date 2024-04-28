import React, { useState } from "react";
import "./Transaction.css";
import { bankTransactions } from "../Data";
import TransactionItem from "./TransactionItem";

function  Transactions() {

  return (
    <>
    <div className="container"></div>
    <TransactionItem />
    </>
  );
};

export default Transactions;