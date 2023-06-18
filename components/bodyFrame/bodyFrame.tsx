import React, { useState } from 'react';
import styles from './bodyFrame.module.css'
import BodyFrameHeader from './bodyFrame_header/bodyFrame_header';
import BodyFrameSection1 from './bodyFrame_section1/bodyFrame_section1';
import BodyFrameSection2 from './bodyFrame_section2/bodyFrame_section2';
import BodyFrameSection3 from './bodyFrame_section3/bodyFrame_section3';
import BodyFrameFooter from './bodyFrame_footer/bodyFrame_footer';
export interface BodyFrame {

}

export default function Bodyframe({ children }: any) {
    return (
        <>
            <div className={`${styles.wrapper}`}>
                <BodyFrameHeader>{children}</BodyFrameHeader>
                <BodyFrameSection1>{children}</BodyFrameSection1>
                <BodyFrameSection2>{children}</BodyFrameSection2>
                <BodyFrameSection3>{children}</BodyFrameSection3>
                <BodyFrameFooter>{children}</BodyFrameFooter>


            </div>

        </>
    )
}