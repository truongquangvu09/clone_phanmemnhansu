import React, { useState } from 'react';
import styles from './bodyFrame.module.css'
import BodyFrameHeader from './bodyFrame_header/bodyFrame_header';

export interface BodyFrame {

}

export default function Bodyframe({ children }: any) {
    return (
        <>
            <div className={`${styles.wrapper}`}>
                <BodyFrameHeader></BodyFrameHeader>
                {children}
            </div>
        </>
    )
}