import '../ChartJsBox/ChartJsBox.css'

import React, { useState } from 'react';

import PopupGfg from '../PopUp/PopUp'
import BlockBar from '../BlockBar/BlockBar'
import LineBar from '../LineBar/LineBar'

const ChartJsBox = () => {

    const [visibleChart, setVisibleChart] = useState(true);

    const [axisX, setAxisX] = useState([]);
    const [axisY, setAxisY] = useState([]);
    const [inputX, setInputX] = useState('January, February, March, April, May');
    const [inputY, setInputY] = useState('1, 5, 10, 1, 2');
    const [error, setError] = useState(false)
    const x = inputX.split(',')
    const y = inputY.split(',')

    return <div>
            <div className='inputContainer'>
                <div class="input-group mb-3 inp">
                    <div className='name'>Назва підгрупи</div>
                    <input onChange={(e) => {setInputX(e.target.value); setError(false)}}
                            value={inputX} 
                            type="text" class="form-control"  placeholder='January, February, March, April, May'   />
                </div>
                <div class="input-group mb-3 inp">
                    <div className='name'>Кількисть одиниць</div>
                    <input  onChange={(e) => {setInputY(e.target.value); setError(false)}}
                            value={inputY} 
                        type="text" class="form-control" placeholder='1, 5, 10, 1, 2' />
                </div>
                <div onClick={() => { 
                     if(y.length === x.length ) {
                            setAxisY(y)
                            setAxisX(x)
                            setError(false)
                    } else {
                        setError(true)
                    } 
                }} className={'butt btn btn-dark cent'}>Create</div>

                 <div className='error'>
                    {error
                        ? <PopupGfg />
                        : null
                    }
                </div>
            </div>

            <div className='barContainer'>
                {visibleChart
                    ? <BlockBar axisX={axisX} axisY={axisY}/>
                    : <LineBar axisX={axisX} axisY={axisY}/>
                }
            </div>
            
            <div className='buttonsContainer'>
                <div onClick={() => setVisibleChart(true)} className={'butt btn btn-dark '}>Bar Chart</div>
                <div onClick={() => setVisibleChart(false)} className={'butt btn btn-dark '}>Line Chart</div>
            </div>
    

    </div>
}

export default ChartJsBox

