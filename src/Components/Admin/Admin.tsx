import React, { useEffect, useRef } from 'react';
import styled from "styled-components";
import { Body } from "../Common/Layout";

export default function Admin() {

    const resultRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (resultRef.current) {
            resultRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
        }
    }, []);
  
  return (
    <Body>
        <div ref={resultRef}>
            <p>관리자</p>
        </div>
    </Body>
  );
}
