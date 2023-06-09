import React, { useRef } from 'react';
import styled from 'styled-components';

export interface Dog {
    id: string, // 유기번호(desertionNo)
    state: string, // 상태(protectState)
    img_url: string, // 사진(popfile)
    found: {
        date: Date, // 접수일(happenDt) (YYYYMMDD)
        place: string, // 발견장소(happenPlace)
    }
    breeds?: string[], // 품종(kindCd)
    color: string, // 색상(colorCd)
    birth: Date, // 탄생 년도(age)
    weight: number, // 체중(weight) (0(미상))
    sex: string, // 성별(sexCd) (F,M,Q(미상))
    neuter: string, // 중성화 여부(neuterYn) (Y,N,U(미상))
    memo?: string, // 특징(specialMark)
    notice: {
        code: string, // 공고번호(noticeNo)
        date_start: Date, // 공고시작일(noticeSdt) (YYYYMMDD)
        date_end: Date, // 공고종료일(noticeEdt) (YYYYMMDD)
    }
    careCenter?: {
        name?: string, // 보호소 이름(careNm)
        phone: string, // 보호소 전화번호(careTel)
        address: string, // 보호소 주소(careAddr)
    }
}

export interface StyledPictureInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
  
export interface DogApiResponse {
    message: string;
    data: Dog[];
}

export interface DogListProps {
    dogList: Dog[];
}
  
export interface ResponseData {
    data: string[];
    message: string;
}

// swiper
export interface SliderProps {
    dogList: string[];
    slidesPerView: number;
}

// Scrolling
export interface ScrollRefProps {
    children: React.ReactNode;
}

export interface DogDetailsProps {
    dog: Dog;
}

export interface ImageSectionProps {
    dogData: string;
}

// 회원가입
export interface SignUpFormProps {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
    phone: string;
    errors: string;
}

export interface FormValue {
    name: string;
    phone: string;
    email: string;
    password: string;
    confirmPassword: string;
}

export interface SignUp {
    name: string;
    phone: string;
    password: string;
    ConfirmPassword: string;
    extraError?: string;
}

export interface User {
    name: string,
    phone: string,
    email: string,
    password: string,
    confirmPassword: string
}

export interface AdminLinkProps {
    adminPath: string;
    children?: React.ReactNode;
}
  
// 보호소 방문 예약 폼
export interface FormDataType {
    name: string;
    phone: string;
    when_day: string;
    when_time: string;
    dog_id: string;
    dog_img_url: string,    
    dog_careCenter_name: string;
    dog_careCenter_address: string;
}
