import React, { useState, useEffect } from "react";

function Apipull({count}){
    const [result, setResult] = useState([]);
    const [busy, setBusy] = useState(true);
    const [coinName, setCoinName] = useState([]);
    const [img, setImg] = useState([]);
    const [apicount, setapiCount] = useState(count)

    useEffect(() => {
        const funcFetchData = async () =>{
            setBusy(true);
            if( count < 100){
                setapiCount(count)
            }
            const retunedData = await fetchdata();
            console.log(`returned data ${retunedData}`)
            setResult(retunedData)
            setBusy(false)
        };
        funcFetchData();
        
        console.log('use Effect to get results');
    }, [ , count]);

    useEffect( () => {
        if (!busy){
            console.log( 'use Effect to set coin name and Img');
            setCoinName( result['coin_name']);
            setImg( result.logo)
        }       
    }, [busy])

    const fetchdata = async () =>{
        try{
            console.log('getting data from api' )
            let getdata = await fetch('https://random-data-api.com/api/crypto_coin/random_crypto_coin?size='+apicount);
            const data = await getdata.json();
            return (data)
        }catch (error){
            console.log(error)
        }
    }

    return (
        <div>
            {/* <button onClick={()}> + </button> */}
            <div className = "data">
                {console.log('Displaying data')}
                {
                    result&& result.map( (val) => (
                        <div className = 'cryptoinfo'>
                            {val.coin_name}
                            <img src={val.logo} alt="" width="150px"/>
                        </div>
                    ))
                }
            </div>
        </div>
        
    )    ;
}

export default Apipull;