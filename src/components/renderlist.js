import React, { useState } from 'react';

function RenderList() {

    const arr=[{id:1,name:"alex"},{id:2,name:"bob"},
{id:3,name:"catty"}];

    //iteration logic
    const listItems=arr.map((item,index)=>
    <li key={index}>{item.id} {item.name}</li>)
    
    return (<div>
        <ul>
        {listItems}
        </ul>
    </div>  );
}

export default RenderList;