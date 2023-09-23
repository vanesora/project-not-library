import React, { useState } from "react";
import {
  Button,
  CloseButton,
  ContainerButton,
  ContainerIcon,
  Content,
  HeaderContainer,
  HeaderControls,
  HeaderMenu,
  Logo,
  LogoutButton,
  Menu,
  MenuIcon,
  Sidebar,
  StyledButtonGroup,
  Subtitle,
  TextIcon,
  UserName,
} from "./styles";
import { Route, Routes, useNavigate } from "react-router-dom";
import { LoginPage } from "./Pages/Login/Login";
import { UserListPage } from "./Pages/UserList/UserList";
import { HomePage } from "./Pages/Home/Home";
import { UserDetailsPage } from "./Pages/UserDetails/UserDetails";
import { Icon } from "./components/Icon";
import { useWindowWidth } from "./hooks/useWindowWidth";

const data = [
  {
    id: 1,
    disabled: false,
    text: "Home",
    icon: "home",
    url: "/",
  },
  {
    id: 2,
    disabled: false,
    text: "Usuarios",
    icon: "manage",
    url: "/user-list",
  },
  {
    id: 3,
    disabled: false,
    text: "Vehículos",
    icon: "manage",
  },
  {
    id: 4,
    disabled: false,
    text: "Ordenes",
    icon: "notifications1",
  },
  {
    id: 5,
    disabled: false,
    text: "Inventario",
    icon: "calculate",
  },
  {
    id: 6,
    disabled: false,
    text: "Configuración",
    icon: "settings",
  },
];

const App = () => {
  const widthHook = useWindowWidth();
  const [isHover, setIsHover] = useState<{[key: number]: boolean}>({});
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedButton, setSelectedButton] = useState(0);
  const navigate = useNavigate();

  const userName = "Pepito Perez";

  const handleClick = (url?: string, index?: number) => {
    setSelectedButton(index ?? selectedButton);
    url && navigate(url);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div style={{ overflow: "hidden" }}>
      <Sidebar isMenuOpen={isMenuOpen}>
        <Menu
          isMenuOpen={isMenuOpen}
          notView={window.location.pathname === "/login"}
        >
          <HeaderMenu>
            <CloseButton onClick={toggleMenu}>
              <Icon icon="close" size="medium" color="white" />
            </CloseButton>
            <Subtitle>{userName}</Subtitle>
          </HeaderMenu>
          <StyledButtonGroup id={`button-group`}>
            {data.map((item: any, index: number) => {
              return (
                <ContainerButton key={`${item.text}${index}`}>
                  <Button
                    onClick={() => handleClick(item.url, index)}
                    type={"button"}
                    flex={widthHook > 700 ? "column" : "row"}
                    widthHook={widthHook ?? 0}
                    onMouseEnter={() => setIsHover({...isHover,[index]: true})}
                    onMouseLeave={() => setIsHover({...isHover,[index]: false})}
                  >
                    <ContainerIcon selected={selectedButton === index}>
                      <Icon
                        icon={item.icon}
                        size={"large"}
                        color={
                          isHover[index]
                            ? "#FF7300"
                            : selectedButton === index
                            ? "#456db3"
                            : "white"
                        }
                      />
                    </ContainerIcon>
                    {isHover[index] && (
                    <TextIcon
                      color={
                        isHover[index]
                          ? "#FF7300"
                          : selectedButton === index
                          ? "#456db3"
                          : "white"
                      }
                      size={widthHook > 700 ? "10px" : "16px"}
                    >
                      {item.text}
                    </TextIcon>
                    )}
                  </Button>
                </ContainerButton>
              );
            })}
          </StyledButtonGroup>
        </Menu>

        <Content isMenuOpen={isMenuOpen}>
          <div
            style={{
              display: window.location.pathname === "/login" ? "none" : "block",
            }}
          >
            <HeaderContainer>
              <MenuIcon onClick={toggleMenu}>
                <Icon icon="menu" size="medium" color="white" />
              </MenuIcon>
              <HeaderControls>
                <Logo>
                  <img src={require("./assets/images/logoTexto.png")} alt="" />
                </Logo>
                <UserName>
                  <Subtitle>{userName}</Subtitle>
                </UserName>
                <LogoutButton onClick={() => handleClick("/login")}>
                  <Icon icon="logout" size="medium" color="white" />
                </LogoutButton>
              </HeaderControls>
            </HeaderContainer>
          </div>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/user-list" element={<UserListPage />} />
            <Route path="/user/:id" element={<UserDetailsPage />} />
          </Routes>
        </Content>
      </Sidebar>
    </div>
  );
};

export default App;
