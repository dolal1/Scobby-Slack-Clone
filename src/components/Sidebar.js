import React from "react";
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

import { db } from "../firebase";
import SidebarOption from "./SidebarOption";

function Sidebar() {
  const [channels, loading, errors] = useCollection(db.collection("rooms"));
  return (
    <SidebarContainer>
      <SidebarHeader>
        <SidebarInfo>
          <h2>Scooby Info</h2>
          <h3>
            <FiberManualRecordIcon />
            Scooby Doo
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
      <hr />
      <SidebarOption Icon={AddIcon} addChannelOption title="Add channel" />

      {channels?.docs.map((doc) => (
        <SidebarOption key={doc.id} id={doc.id} title={doc.data().name} />
      ))}
    </SidebarContainer>
  );
}

export default Sidebar;
