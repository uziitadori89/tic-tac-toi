import React, { useState } from 'react'
import './tic.css'
export default function Tic() {
    const [tic, settic] = useState(['', '', '', '', '', '', '', '', ''])
    const [val, setval] = useState('jay')
    var j = 0, i;

    var v = [...tic];
    const btnclick = (no) => {
        if (val == 'jay') {
            if (tic[no] == '') {
                v[no] = 'x';
                settic(v)
                document.getElementById('p' + no).disabled = true;
                document.getElementById('p' + no).style.color = "red";
                setval('savaliya')
            }
        }
        if (val == 'savaliya') {
            if (tic[no] == '') {
                v[no] = 'o';
                settic(v)
                document.getElementById('p' + no).disabled = true;
                document.getElementById('p' + no).style.color = "green";
                setval('jay')
            }
        }
        win()
    }
    const win = () => {
        if (tic[0] == 'x' && tic[4] == 'x' && tic[8] == 'x' || tic[2] == 'x' && tic[4] == 'x' && tic[6] == 'x' || tic[0] == 'x' && tic[1] == 'x' && tic[2] == 'x' || tic[3] == 'x' && tic[4] == 'x' && tic[5] == 'x' || tic[6] == 'x' && tic[7] == 'x' && tic[8] == 'x' || tic[0] == 'x' && tic[3] == 'x' && tic[6] == 'x' || tic[1] == 'x' && tic[4] == 'x' && tic[7] == 'x' || tic[2] == 'x' && tic[5] == 'x' && tic[8] == 'x') {
            document.getElementById('win').innerHTML = 'x is win';
            j = 1;
        }
        if (tic[0] == 'o' && tic[4] == 'o' && tic[8] == 'o' || tic[2] == 'o' && tic[4] == 'o' && tic[6] == 'o' || tic[0] == 'o' && tic[1] == 'o' && tic[2] == 'o' || tic[3] == 'o' && tic[4] == 'o' && tic[5] == 'o' || tic[6] == 'o' && tic[7] == 'o' && tic[8] == 'o' || tic[0] == 'o' && tic[3] == 'o' && tic[6] == 'o' || tic[1] == 'o' && tic[4] == 'o' && tic[7] == 'o' || tic[2] == 'o' && tic[5] == 'o' && tic[8] == 'o') {
            document.getElementById('win').innerHTML = 'o is win';
            j = 1;
        }
        if (j == 1) {
            for (i = 0; i < 9; i++) {
                document.getElementById('p' + i).disabled = true;
            }
        }
    }
    const reset = () =>{
        var i;
        for(i=0;i<9;i++)
        {
            document.getElementById('p'+i).disabled=false;
            document.getElementById('p'+i).value='';
            tic[i]='';
        }
        document.getElementById('win').innerHTML='';
        j=0;
        setval('jay')
    }
    console.log(tic)
    return (
        <div>
            <div className="main">
                <div className="child">
                    <input type="button" value={tic[0]} id='p0' onClick={() => { btnclick(0) }} />
                </div>
                <div className="child">
                    <input type="button" value={tic[1]} id='p1' onClick={() => { btnclick(1) }} />
                </div>
                <div className="child">
                    <input type="button" value={tic[2]} id='p2' onClick={() => { btnclick(2) }} />
                </div>
                <div className="child">
                    <input type="button" value={tic[3]} id='p3' onClick={() => { btnclick(3) }} />
                </div>
                <div className="child">
                    <input type="button" value={tic[4]} id='p4' onClick={() => { btnclick(4) }} />
                </div>
                <div className="child">
                    <input type="button" value={tic[5]} id='p5' onClick={() => { btnclick(5) }} />
                </div>
                <div className="child">
                    <input type="button" value={tic[6]} id='p6' onClick={() => { btnclick(6) }} />
                </div>
                <div className="child">
                    <input type="button" value={tic[7]} id='p7' onClick={() => { btnclick(7) }} />
                </div>
                <div className="child">
                    <input type="button" value={tic[8]} id='p8' onClick={() => { btnclick(8) }} />
                </div>
            </div>
            <h1 align='center' id='win'></h1>
            <h1 align='center'>
                <button onClick={reset} >RESET</button>
            </h1>
        </div>
    )
}
