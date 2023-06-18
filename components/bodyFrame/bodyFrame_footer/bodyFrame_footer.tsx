import React from "react";
import styles from './bodyFrame_footer.module.css'

export interface BodyFrameFooter {

}
export default function BodyFrameFooter({ children }: any) {
    return (
        <><iframe className={`${styles.video}`} width="800" height="420" src="https://www.youtube.com/embed/2wS-x1li7QQ" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe></>

    )
}