import React, { useState, useEffect } from "react";



function Apipull({count}){
    const [result, setResult] = useState([]);
    const [busy, setBusy] = useState(true);
    const [coinName, setCoinName] = useState([]);
    const [img, setImg] = useState([]);

    const fetchData = async () =>{
        try{
            setBusy(true);
            let getdata = await fetch('https://random-data-api.com/api/crypto_coin/random_crypto_coin');
            const data = await getdata.json();
            setResult(data);
            setBusy(false);
        }catch (error){
            console.log(error)
        }
        
    }

    useEffect(() => {
        fetchData();
        console.log(result + '2');
    }, [ , count]);

    useEffect( () => {
        if (!busy){
            console.log( result + '3');
            setCoinName( result['coin_name']);
            setImg( result.logo)
        }       
    }, [busy])

    function loadCoin(){
        
    }

    return (
        <div>
            {/* <button onClick={()}> + </button> */}
            <button onclick={loadCoin}> Load another </button>
            <div id = "data">
                {console.log(result + 'Data DOM')}
                {/* {result&& result.map( val => (
                    <div>
                        <p>val.coin_name</p>
                        <img src={val.logo} alt =''/>
                    </div>
                ))} */}
                <p> {coinName} </p>
                <img src={img}/>
            </div>
        </div>
        
    )    ;
}

export default Apipull;