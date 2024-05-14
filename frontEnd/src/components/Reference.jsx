import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { IoCopyOutline } from "react-icons/io5";
import { IoShareSocialOutline } from "react-icons/io5";
import { RiDeleteBin5Line } from "react-icons/ri";
import { mobile } from "../responsive";
import { tablet } from "../responsive";
import { api } from "../axios/axios";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Section = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 1rem 0rem;
  height: 100%;
  width: 100%;
  background-color: white;
  border-radius: 25px;
  box-shadow: 0px 8px 17px 0px #0000001a;
  gap: 1.5rem;
`;
const InfoArea = styled.div`
  width: 95%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const Title = styled.div`
  color: #000000;
  font-size: 20px;
  font-weight: 500;
  ${tablet({ fontSize: "17px" })}
  ${mobile({ fontSize: "15px" })}
`;
const Button = styled.a`
  color: #ee1d52;
  border: 1px solid #ee1d52;
  padding: 8px 19px;
  border-radius: 15px;
  text-decoration: none;

  &:hover {
    transition: all 0.3s ease-in-out;
    background-color: #ee1d52;
    color: white;
  }
  ${tablet({ fontSize: "11px", padding: "8px 19px" })}
  ${mobile({ fontSize: "9px", padding: "6px 16px" })}
`;

const InfoPart = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  width: 100%;
  ${tablet({ width: "95%" })}

  ${mobile({ width: "90%" })}
`;
const InfoField = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #e7e7e7;
  border-radius: 5px;
  padding: 14px 20px;
  width: 80%;
  justify-content: space-between;
  ${tablet({ fontSize: "11px", padding: "10px 10px" })}

  ${mobile({ fontSize: "9px", padding: "10px 10px" })}
`;
const InfoLink = styled.div`
  color: #002a5c;
  cursor: pointer;
  font-size: 15px;
  @media (max-width: 1060px) {
    font-size: 12px;
  }
  ${tablet({ width: "70%", fontSize: "11px" })}

  ${mobile({ width: "70%" })}
`;
const InfoSection = styled.div`
  display: flex;
  gap: 2rem;
  color: #ee1d52;
  @media (max-width: 1060px) {
    gap: 1rem;
  }
  ${tablet({ gap: "0.3rem" })}

  ${mobile({ gap: "0.5rem" })}
`;
const InfoIcon = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 13px;
  cursor: pointer;

  ${tablet({ fontSize: "12px" })} ${mobile({
    gap: "2px",
  })};
`;
const Info = styled.div`
  font-size: 13px;
  @media (max-width: 1060px) {
    font-size: 12px;
  }
  ${tablet({ fontSize: "11px" })}

  ${mobile({ display: "none" })}
`;
const CopyIcon = styled(IoCopyOutline)`
  width: 24px;
  height: 24px;
  ${tablet({ width: "12px", height: "12px" })}

  ${mobile({ width: "15px", height: "15px" })}
`;
const ShareIcon = styled(IoShareSocialOutline)`
  width: 24px;
  height: 24px;
  cursor: pointer;
  ${tablet({ width: "15px", height: "15px" })}

  ${mobile({ width: "15px", height: "15px" })}
`;
const DeleteIcon = styled(RiDeleteBin5Line)`
  width: 24px;
  height: 24px;
  color: #ee1d52;
  cursor: pointer;
  ${tablet({ width: "15px", height: "15px" })}

  ${mobile({ width: "15px", height: "15px" })}
`;

const Reference = () => {
  const [refs, setRefs] = useState();
  const user = useSelector((state) => state.user);

  const handleDeleteReferral = async (refId) => {
    try {
      const res = await api.delete(`/referral/delete-ref/${refId}`, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      setRefs(refs.filter((ref) => ref._id !== refId));
      toast.success("ref deleted");
    } catch (error) {
      console.log("error deleting ref: ", error);
    }
  };

  const handleCopyLink = (referralLink) => {
    navigator.clipboard.writeText(referralLink);
    toast.success("Referral link copied to clipboard");
  };

  useEffect(() => {
    const fetchRefs = async () => {
      try {
        const { data } = await api.get("/referral/get-refs", {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        });

        setRefs(data.referrals);
      } catch (error) {
        console.log(error);
      }
    };

    fetchRefs();
  }, []);

  console.log(refs);

  return (
    <Section>
      <ToastContainer />
      <InfoArea>
        <Title>Active Referral Links</Title>
        <Button href="/link">Generate Referral Link</Button>
      </InfoArea>

      {refs &&
        refs.map((ref) => (
          <InfoPart>
            <InfoField>
              <InfoLink>{ref.referralLink}</InfoLink>
              <InfoSection>
                <InfoIcon onClick={() => handleCopyLink(ref.referralLink)}>
                  <Info>Copy</Info>
                  <CopyIcon />
                </InfoIcon>
                <InfoIcon>
                  <Info>Share</Info>
                  <ShareIcon />
                </InfoIcon>
              </InfoSection>
            </InfoField>
            <DeleteIcon onClick={() => handleDeleteReferral(ref._id)} />
          </InfoPart>
        ))}
    </Section>
  );
};

export default Reference;
