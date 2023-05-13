import React, { useState } from 'react';
import styled from "styled-components";
import { Body } from "../common/layout";
import { colors } from "../common/colors";
import Underdog from "../../Img/Underdog.png";
import { ButtonHTMLAttributes } from "react";

export default function FileUploadComponent() {
    
    const [filename, setFilename] = useState("");
    const [showModal, setShowModal] = useState(false);
    const [modalMessage, setModalMessage] = useState("");
    
    const handleFileInputChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            console.log(file);
            setFilename(file.name);
        } else {
            console.log("파일이 선택되지 않았습니다.");
        }
    };

    const closeModal = () => {
        setShowModal(false);
    };

    const [searchResults, setSearchResults] = useState([]);

    const handleSearch = () => {
        if (filename) {
            setModalMessage("");
            setShowModal(false);
        } else {
            setModalMessage("파일을 먼저 선택해주세요!");
            setShowModal(true);
        }
    };

    return (
        <Body>
            <DragDiv>
                <UnderdogImage src={Underdog} />
                <TextDiv>{Text}</TextDiv>
                <UploadButton>사진 추가하기
                    <input
                        type="file"
                        accept=".jpg, .jpeg, .png"
                        onChange={handleFileInputChange}
                    />
                </UploadButton>
                {filename && <p>파일명: {filename}</p>}
            </DragDiv>
            <AISearchDiv>
                <SearchButton onClick={handleSearch}>AI로 UNDERDOG 검색하기</SearchButton>
            </AISearchDiv>
            {showModal && (
                <Modal>
                    <ModalContent>
                        <h3>{modalMessage}</h3>
                        <Button onClick={closeModal}>닫기</Button>
                    </ModalContent>
                </Modal>
            )}
        </Body>
    );
}
  

const UnderdogImage = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35%;
  margin: 30px 240px 30px 240px;
  left: 30px;
`;

const DragDiv = styled.div`
    width: 40%;
    height: 480px;
    border: 5px dashed ${colors.main};
    margin-top: 220px;
`

const Text = `PLEASE FIND MY UNDERDOG`

const TextDiv = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    text-align: center;
    margin: -60px 0 0 10px;
    font-size: 32px;
    font-weight: bold;
    color: ${colors.main};
`

const UploadButton = styled.label`
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "Logo";
    font-size: 20px;
    color: ${colors.w};
    background-color: ${colors.footer};
    margin: 40px 275px 0 275px;
    padding: 10px 50px;
    border-radius: 300px;
    cursor: pointer;
    word-break: keep-all;

    input {
        display: none;
    }
`

const input = styled.input`
    display: none;
`


const AISearchDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: relative;
    float: none;
    margin: 0 auto;
    top: 80px;
`

const Button = styled.button<ButtonHTMLAttributes<HTMLButtonElement>>`
    margin-top: 10px;
    padding: 8px 16px;
    background-color: ${colors.main};
    color: ${colors.w};
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-family: "Logo";
`


const SearchButton = styled(Button)<SearchButtonProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    padding: 10px 50px;
    border: 1px solid ${colors.main};
    border-radius: 300px;
    background-color: ${colors.main};
    color: ${colors.w};
    font-family: "Logo";
    font-size: 20px;
    top: -115px;
    cursor: pointer;
`

type SearchButtonProps = {
    onClick: () => void;
};

const Modal = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    font-family: "Text";
`

const ModalContent = styled.div`
    background-color: ${colors.w};
    padding: 20px;
    border-radius: 5px;
`

