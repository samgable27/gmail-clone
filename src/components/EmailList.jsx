import {
  ArrowDropDown,
  ChevronLeft,
  ChevronRight,
  KeyboardHide,
  MoreVert,
  Redo,
  Settings,
} from "@mui/icons-material";
import { Checkbox, IconButton } from "@mui/material";
import InboxIcon from "@mui/icons-material/Inbox";
import PeopleIcon from "@mui/icons-material/People";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import React, { useEffect, useState } from "react";
import "../styles/EmailList.css";
import { Section } from "./Section";
import { EmailRow } from "./EmailRow";
import { db } from "../firebaseConfig";

export const EmailList = () => {
  const [emails, setEmails] = useState([]);

  useEffect(() => {
    db.collection("emails")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setEmails(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, []);

  return (
    <div className="emailList">
      <div className="emailList__settings">
        <div className="emailList__settingsLeft">
          <Checkbox />
          <IconButton>
            <ArrowDropDown />
          </IconButton>
          <IconButton>
            <Redo />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
        <div className="emailList__settingsRight">
          <IconButton>
            <ChevronLeft />
          </IconButton>
          <IconButton>
            <ChevronRight />
          </IconButton>
          <IconButton>
            <KeyboardHide />
          </IconButton>
          <IconButton>
            <Settings />
          </IconButton>
        </div>
      </div>

      <div className="emailList__sections">
        <Section Icon={InboxIcon} title="Primary" color="red" selected />
        <Section Icon={PeopleIcon} title="Social" color="#1A73E8" />
        <Section Icon={LocalOfferIcon} title="Promotions" color="green" />
      </div>
      <div className="emailList__list">
        {emails.map(({ id, data: { to, subject, message, timestamp } }) => (
          <EmailRow
            id={id}
            key={id}
            title={to}
            subject={subject}
            description={message}
            time={new Date(timestamp?.seconds * 1000).toUTCString()}
          />
        ))}
        <EmailRow
          title="twitch"
          subject="fuck fuck"
          description="fuck you"
          time="10pm"
        />
        <EmailRow
          title="twitch"
          subject="fuck fuck"
          description="fuck you"
          time="10pm"
        />
        <EmailRow
          title="twitch"
          subject="fuck fuck"
          description="fuck you"
          time="10pm"
        />
        <EmailRow
          title="twitch"
          subject="fuck fuck"
          description="fuck you"
          time="10pm"
        />
        <EmailRow
          title="twitch"
          subject="fuck fuck"
          description="fuck you"
          time="10pm"
        />
        <EmailRow
          title="twitch"
          subject="fuck fuck"
          description="fuck you"
          time="10pm"
        />
        <EmailRow
          title="twitch"
          subject="fuck fuck"
          description="fuck you"
          time="10pm"
        />
        <EmailRow
          title="twitch"
          subject="fuck fuck"
          description="fuck you"
          time="10pm"
        />
        <EmailRow
          title="twitch"
          subject="fuck fuck"
          description="fuck you"
          time="10pm"
        />
        <EmailRow
          title="twitch"
          subject="fuck fuck"
          description="fuck you"
          time="10pm"
        />
        <EmailRow
          title="twitch"
          subject="fuck fuck"
          description="fuck you"
          time="10pm"
        />
        <EmailRow
          title="twitch"
          subject="fuck fuck"
          description="fuck you"
          time="10pm"
        />
        <EmailRow
          title="twitch"
          subject="fuck fuck"
          description="fuck you"
          time="10pm"
        />
        <EmailRow
          title="twitch"
          subject="fuck fuck"
          description="fuck you"
          time="10pm"
        />
        <EmailRow
          title="twitch"
          subject="fuck fuck"
          description="fuck you"
          time="10pm"
        />
        <EmailRow
          title="twitch"
          subject="fuck fuck"
          description="fuck you"
          time="10pm"
        />
        <EmailRow
          title="twitch"
          subject="fuck fuck"
          description="fuck you"
          time="10pm"
        />
        <EmailRow
          title="twitch"
          subject="fuck fuck"
          description="fuck you"
          time="10pm"
        />
        <EmailRow
          title="twitch"
          subject="fuck fuck"
          description="fuck you"
          time="10pm"
        />
        <EmailRow
          title="twitch"
          subject="fuck fuck"
          description="fuck you"
          time="10pm"
        />
        <EmailRow
          title="twitch"
          subject="fuck fuck"
          description="fuck you"
          time="10pm"
        />
        <EmailRow
          title="twitch"
          subject="fuck fuck"
          description="fuck you"
          time="10pm"
        />
        <EmailRow
          title="twitch"
          subject="fuck fuck"
          description="fuck you"
          time="10pm"
        />
        <EmailRow
          title="twitch"
          subject="fuck fuck"
          description="fuck you"
          time="10pm"
        />
      </div>
    </div>
  );
};
