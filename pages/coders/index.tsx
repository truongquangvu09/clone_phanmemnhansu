import React from 'react';
export interface AllCoderProps {

}

export const getStaticProps = async () =>{
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    return {
        props:{
            coders:data
        }
    }
}
export default function AllCoder (prop:any){
    console.log(prop)
    return (
        <div>
             AllCoder
        </div>
    )
}