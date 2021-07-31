import React from "react";
import styled from "styled-components";
import { Avatar } from "@material-ui/core";
import {
  AccessTime as AccessTimeIcon,
  Search as SearchIcon,
  HelpOutline as HelpOutlineIcon,
} from "@material-ui/icons";

function Header() {
  return (
    <HeaderContainer>
      {/* Header Left */}
      <HeaderLeft>
        <HeaderAvatar
        // TODO: Add onClick
        />
        <AccessTimeIcon />
      </HeaderLeft>

      {/* Header Center */}
      <HeaderSearch>
        <SearchIcon />
        <input placeholder="Searh with Scooby Doo" />
      </HeaderSearch>

      {/* Header Right */}
      <HeaderRight>
        <HelpOutlineIcon />
      </HeaderRight>
    </HeaderContainer>
  );
}

export default Header;

const HeaderContainer = styled.div`
  display: flex;
  position: fixed;
  width: 100%;
  align-items: center;
  padding: 10px 0;
  color: white;
  background-color: var(--slack-color);
`;

const HeaderLeft = styled.div`
  display: flex;
  flex: 0.3;
  align-items: center;
  margin-left: 20px;

  > .MuiSvgIcon-root {
    margin-left: auto;
    margin-right: 30px;
  }
`;

const HeaderAvatar = styled(Avatar)`
  cursor: pointer;

  :hover {
    opacity: 0.8;
  }
`;

const HeaderSearch = styled.div`
  flex: 0.4;
  opacity: 1;
  border-radius: 6px;
  background-color: #421f44;
  text-align: center;
  display: flex;
  padding: 0 50px;
  border: 1px grey solid;

  > input {
    background-color: transparent;
    border: none;
    text-align: center;
    min-width: 30vw;
    color: white;
  }
`;

const HeaderRight = styled.div`
  display: flex;
  flex: 0.3;
  align-items: flex-end;

  > .MuiSvgIcon-root {
    margin-left: auto;
    margin-right: 20px;
  }
`;
