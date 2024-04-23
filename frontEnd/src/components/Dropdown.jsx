import React, { useState } from "react";
import styled from "styled-components";
import { countries } from "countries-list";
import { mobile } from "../responsive";
import { tablet } from "../responsive";
import { FaChevronDown } from "react-icons/fa";

const Dropdoun = styled.div`
  width: 100%;
  color: #66666699;
  user-select: none;
`;
const DropdownBtn = styled.div`
  border: 1px solid #66666659;
  cursor: pointer;
  border-radius: 10px;
  background: transparent;
  width: 90%;
  font-size: 14px;
  display: flex;
  border: none;
  padding: 10px 15px;
  align-items: center;
  justify-content: space-between;
  ${tablet({
    width: "90%",
    padding: "10px 15px",
    borderRadius: "8px",
    fontSize: "12px",
  })}
  ${mobile({
    width: "90%",
    padding: "10px 15px",
    borderRadius: "8px",
    fontSize: "10px",
  })}
`;
const Icon = styled(FaChevronDown)``;

const DropdownContent = styled.div`
  position: absolute;
  width: 18%;
  height: 100px;
  overflow-y: auto;
  box-shadow: 0px 0px 5px 0px grey;
  border-radius: 10px;
  border: 1px solid #66666659;
  background-color: white;
  padding: 5px;
  margin-top: 0.5rem;
  font-size: 14px;

  ${tablet({
    width: "40%",
    padding: "10px 15px",
    borderRadius: "8px",
    fontSize: "10px",
  })}
  ${mobile({
    width: "40%",
    padding: "10px 15px",
    borderRadius: "8px",
    fontSize: "10px",
  })}
`;
const DropdownItem = styled.div`
  padding: 10px 20px;
  cursor: pointer;
  &:hover {
    background: #f4f4f4;
  }
  ${mobile({})}
  ${tablet({
    padding: "5px 15px",
  })}
  ${mobile({
    padding: "5px 15px",
  })}
`;

const Dropdown = ({ selected, setSelected }) => {
  const [isActive, setIsActive] = useState(false);
  const countryList = Object.values(countries).sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  return (
    <Dropdoun>
      <DropdownBtn onClick={(e) => setIsActive(!isActive)}>
        {selected} <Icon />
      </DropdownBtn>
      {isActive && (
        <DropdownContent>
          {countryList.map((country) => (
            <DropdownItem
              key={country.phone}
              onClick={(e) => {
                setSelected(country), setIsActive(false);
              }}
            >
              {country.name}
            </DropdownItem>
          ))}
        </DropdownContent>
      )}
    </Dropdoun>
  );
};

export default Dropdown;
