import React from "react";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import "./styles/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Mail } from "./components/Mail";
import { EmailList } from "./components/EmailList";
import { SendMail } from "./components/SendMail";
import { useSelector } from "react-redux";
import { selectSendMessageIsOpen } from "./features/mailSlice";

function App() {
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen);

  return (
    <Router>
      <div className="App">
        <Header />

        <div className="app__body">
          <Sidebar />

          <Routes>
            <Route path="/" element={<EmailList />} />
            <Route path="/mail" element={<Mail />} />
          </Routes>
        </div>
        {sendMessageIsOpen && <SendMail />}
      </div>
    </Router>
  );
}

export default App;
