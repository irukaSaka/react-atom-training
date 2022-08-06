import styled from "styled-components";
import { SearchInput } from "../molucules/SearchInput";
import { UserCard } from "../organisms/user/UserCard";
import { useLocation } from "react-router-dom";
import { SecondaryButton } from "../atom/button/SecondaryButton";
//import { useContext } from "react";
//import { UserContext } from "../../providers/UserProvider";
import { useRecoilState } from "recoil";
import { userState } from "../../store/userState";

const users = [...Array(10).keys()].map((i) => {
  return {
    id: i,
    name: `Ruka${i}`,
    image: "https://source.unsplash.com/7AIDE8PrvA0",
    email: "12345.com",
    phone: "090-1111-2223",
    company: {
      name: "テスト株式会社"
    },
    web: "test.com"
  };
});

export const Users = () => {
  const { state } = useLocation();
  //const { userInfo, setUserInfo } = useContext(UserContext);
  const [userInfo, setUserInfo] = useRecoilState(userState);
  const isAdmin = state ? state.isAdmin : false;
  const onClickSwitch = () => setUserInfo({ isAdmin: !userInfo?.isAdmin });
  return (
    <Scontainer>
      <h2>Users Page</h2>
      <SearchInput />
      <br />
      <SecondaryButton onClick={onClickSwitch}>切り替え</SecondaryButton>
      <SUserArea>
        {users.map((user) => (
          <UserCard key={user.id} user={user} isAdmin={isAdmin}></UserCard>
        ))}
      </SUserArea>
    </Scontainer>
  );
};

const Scontainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`;

const SUserArea = styled.div`
  padding-top: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
`;
