import React, { useEffect, useState } from 'react'
import Tile from './Tile'
import {
    Daily,weekly,monthly
} from "./list"

const Main = () => {
    const [selected, setSelected] = useState("day")
    const [data, setData] = useState([])
    const list = [
        {
            id:"day",
            title:'Daily',
        },
        {
            id:"week",
            title:'Weekly',
        },
        {
            id:"month",
            title:'Monthly',
        }
    ]
    useEffect(()=>{
        switch(selected){
            case "day":
                setData(Daily)
                break

            case "week":
                setData(weekly)
                break

            case "month":
                setData(monthly)
                break
            default:
                setData(Daily)
        }



    },[selected])
    return (
        <main>
            <div className="first">
                <div className="cont">
                    <div className='user'>
                        <br />
                        <span>
                            <img src="/image-jeremy.png" alt="" />
                            <h3>
                                Report for:
                            </h3>
                            <h1>
                                Jeremy Johnson
                            </h1>
                        </span>
                    </div>
                    <ul>
                        {
                            list.map((d)=>(
                                <Tile title ={d.title} active={selected === d.id} setSelected = {setSelected} id={d.id}/>

                            ))
                        }
                    </ul>
                </div>

            </div>

            <div className="second">
            {data.map((d)=>(<div className="items"  style={{backgroundColor:(d.bgc)}}>
                <div className="inner">
                        <p>{d.act}</p>
                        <h1>{d.time}</h1>
                        <h3>last week - {d.lw}</h3>
                    </div>
                </div>))}

                
            </div>
        </main>
    )
}

export default Main
