import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";

import {
  FiberManualRecord as FiberManualRecordIcon,
  Create as CreateIcon,
  InsertComment as InsertCommentIcon,
  Inbox as InboxIcon,
  Drafts as DraftsIcon,
  BookmarkBorder as BookmarkBorderIcon,
  PeopleAlt as PeopleAltIcon,
  Apps as AppsIcon,
  FileCopy as FileCopyIcon,
  ExpandLess as ExpandLessIcon,
  ExpandMore as ExpandMoreIcon,
  Add as AddIcon,
} from "@material-ui/icons";

import {
  SidebarContainer,
  SidebarHeader,
  SidebarInfo,
} from "../styles/Sidebar.styles";
import { useCollection } from "react-firebase-hooks/firestore";

import { auth, db } from "../firebase";
import SidebarOption from "./SidebarOption";

function Sidebar() {
  const [user] = useAuthState(auth);
  const [channels] = useCollection(db.collection("rooms"));

  return (
    <SidebarContainer>
      <SidebarHeader>
        <SidebarInfo>
          <h2>Scooby HQ</h2>
          <h3>
            <FiberManualRecordIcon />
            {user?.displayName}
          </h3>
        </SidebarInfo>
        <CreateIcon />
      </SidebarHeader>

      <SidebarOption Icon={InsertCommentIcon} title="Threads" />
      <SidebarOption Icon={InboxIcon} title="Mentions & Reactions" />
      <SidebarOption Icon={DraftsIcon} title="Saved items" />
      <SidebarOption Icon={BookmarkBorderIcon} title="Channel browser" />
      <SidebarOption Icon={PeopleAltIcon} title="People & user groups" />
      <SidebarOption Icon={AppsIcon} title="Apps" />
      <SidebarOption Icon={FileCopyIcon} title="File browser" />
      <SidebarOption Icon={ExpandLessIcon} title="Show less" />
      <hr />
      <SidebarOption Icon={ExpandMoreIcon} title="Channels" />
      {channels?.docs.map((doc) => (
        <SidebarOption key={doc.id} id={doc.id} title={doc.data().name} />
      ))}
      <hr />
      <SidebarOption Icon={AddIcon} addChannelOption title="Add channel" />
    </SidebarContainer>
  );
}

export default Sidebar;
