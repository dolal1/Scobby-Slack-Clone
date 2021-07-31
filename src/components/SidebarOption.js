import React from "react";
import { useDispatch } from "react-redux";

import { db } from "../firebase";
import { enterRoom } from "../features/appSlice";

import {
  SidebarOptionContainer,
  SidebarOptionChannel,
} from "../styles/SidebarOptions.styles";

function SidebarOption(props) {
  const { Icon, title, addChannelOption, id } = props;
  const dispatch = useDispatch();

  const addChannel = () => {
    const channelName = prompt("Please Enter a channel Name");

    if (channelName) {
      db.collection("rooms").add({
        name: channelName,
      });
    }
  };

  const selectChannel = () => {
    if (id) {
      dispatch(
        enterRoom({
          roomId: id,
        })
      );
    }
  };

  return (
    <SidebarOptionContainer
      onClick={addChannelOption ? addChannel : selectChannel}
    >
      {Icon && <Icon fontSize="small" style={{ padding: 10 }} />}
      {Icon ? (
        <h3>{title}</h3>
      ) : (
        <SidebarOptionChannel>
          <span>#</span> {title}
        </SidebarOptionChannel>
      )}
    </SidebarOptionContainer>
  );
}

export default SidebarOption;
