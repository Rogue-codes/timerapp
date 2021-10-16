import React from 'react'

const Tile = ({title,setSelected,active,id}) => {
    return (
            <li className={active ? "til active" : "til"} onClick={()=>setSelected(id)}>
                {title}
            </li>
       
    )
}

export default Tile
