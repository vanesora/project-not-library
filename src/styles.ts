import styled from "styled-components";

export const Sidebar = styled.div<{ isMenuOpen: boolean }>`
  width: 100%;
  max-width: 100%;
  height: 100%;
  max-height: 100%;
  background-color: #333;
  color: #fff;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
  display: flex;
  overflow: hidden;
`;

export const Content = styled.div<{ isMenuOpen: boolean }>`
  width: 100%;
  max-width: 100%;
  transition: margin-left 0.3s ease-in-out;

  @media (max-width: 700px) {
    margin-left: 0;
  }
`;

export const Menu = styled.div<{ isMenuOpen: boolean; notView: boolean }>`
  display: ${({ notView }) => (notView ? "none" : "block")};
  background-color: #262626;
  z-index: 3;

  @media (max-width: 700px) {
    width: 260px;
    display: ${({ isMenuOpen, notView }) =>
      isMenuOpen ? (notView ? "none" : "block") : "none"};
    position: fixed;
  }
`;

export const HeaderMenu = styled.div`
  display: flex;
  @media (min-width: 700px) {
    display: none;
  }
`;

export const CloseButton = styled.button`
  background-color: transparent;
  border: none;
  color: #fff;
  cursor: pointer;
  font-size: 18px;
`;

export const Subtitle = styled.h2`
  font-size: 25px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: right;
  color: white;
  white-space: break-spaces;

  @media (max-width: 700px) {
    font-weight: 300;
    font-size: 20px;
    line-height: 32px;
  }

  @media (max-width: 400px) {
    font-weight: 300;
    font-size: 16px;
    line-height: 24px;
  }
`;
export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #262626;
  color: #fff;
  height: 50px;
  position: relative;
`;

export const HeaderControls = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 15px;
  align-items: center;

  @media (max-width: 700px) {
    margin: 0;
    margin-right: 15px;
  }
`;

export const UserName = styled.span`
  margin-right: 10px;
  @media (max-width: 700px) {
    display: none;
  }
`;

export const LogoutButton = styled.div``;

export const Logo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex: 1;
  img{
    height: 40px;
  }
  @media (max-width: 700px) {
    justify-content: center;
  }
`;

export const MenuIcon = styled.div`
  padding-left: 15px;
  @media (min-width: 700px) {
    display: none;
  }
`;

export const StyledButtonGroup = styled.div`
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: space-between;
`;

export const ContainerButton = styled.div`
  display: flex};
  justify-content: center;
    
  button.toggled-button {
    border: 2px solid transparent;
    background-color: white;
    color: black;;
  }; 
`;

export const Button = styled.button<{ flex: string; widthHook: number }>`
  cursor: pointer;
  align-items: center;
  background-color: #262626;
  display: flex;
  flex-direction: ${({ flex }) => flex};
  height: 60px;
  justify-content: ${({ widthHook }) => (widthHook > 700 ? "center" : "start")};
  width: ${({ widthHook }) => (widthHook > 700 ? "60px" : "100%")};
  padding: 5px;
  border: none;

  h2 {
    margin: 0;
  }
`;

export const ContainerIcon = styled.div<{ selected: boolean }>`
  border-bottom: ${({ selected }) => (selected ? "2px solid #456db3" : "none")};
`;

export const TextIcon = styled.h2<{ color: string, size: string }>`
  display: block;
  font-size: ${({ size }) => size};
  font-style: normal;
  font-weight: 500;
  text-align: center;
  color: ${({ color }) => color};
  overflow-wrap: break-word;
  word-wrap: break-word;
  word-break: break-word;
`;
