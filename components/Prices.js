import React,{useState} from 'react';

const Prices = (props)=>{
    
    const [curr,setCurr] = useState({currency: 'EUR'})

    let list = '';

    if(curr.currency === "USD"){
        list =  <li className="list-group-item">
                    Bitcoin rate for {props.bpi.bpi.USD.description}:
                    <span className="badge badge-primary">
                        {props.bpi.bpi.USD.code}
                    </span>
                    <strong>
                        {props.bpi.bpi.USD.rate}
                    </strong>
                </li>

    }else if(curr.currency === "GBP"){
        list =  <li className="list-group-item">
                    Bitcoin rate for {props.bpi.bpi.GBP.description}:
                    <span className="badge badge-primary">
                        {props.bpi.bpi.GBP.code}
                    </span>
                    <strong>
                        {props.bpi.bpi.GBP.rate}
                    </strong>
                </li>

    }else if(curr.currency === "EUR"){

        list = <li className="list-group-item">
                    Bitcoin rate for {props.bpi.bpi.EUR.description}:
                    <span className="badge badge-primary">
                        {props.bpi.bpi.EUR.code}
                    </span>
                    <strong>
                        {props.bpi.bpi.EUR.rate}
                    </strong>
                </li>
    }


    return(
        <div> 
            <ul className="list-group">
                {/* 动态选择需要查询的币种，这种加了state的是有key的非可控组件 */}
                <select onChange={e => setCurr({currency:e.target.value})}  className="form-control"> 
                    <option value="USD">USD</option>
                    <option value="GBP">GBP</option>
                    <option value="EUR">EUR</option>
                </select>
                {list}
            </ul>
        </div>
    )
}

export default Prices;