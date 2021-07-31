import React from "react";
import {
  AccessTime as AccessTimeIcon,
  Search as SearchIcon,
  HelpOutline as HelpOutlineIcon,
} from "@material-ui/icons";

import {
  HeaderContainer,
  HeaderLeft,
  HeaderAvatar,
  HeaderSearch,
  HeaderRight,
} from "../styles/Header.styles";

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
