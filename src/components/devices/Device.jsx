import React, { useState } from 'react';
import Style from '../../styles/Home.module.scss';
import Chart from '../charts/Chart';

const Device = () => {
    
	const [nbrMobile, setNbrmobile] = useState(0);
	const [nbrTablet, setNbrtablet] = useState(0);
	const [nbrTv, setNbrtv] = useState(0);
	const [nbrOrdinateur, setNbrordinateur] = useState(0);

    // ------------------------------------------
    const addMobile = () => {
        setNbrmobile(nbrMobile + 1);
    }
    const addTablet = () => {
        setNbrtablet(nbrTablet + 1);
    }
    const addTv = () => {
        setNbrtv(nbrTv + 1);
    }
    const addOrdinateur = () => {
        setNbrordinateur(nbrOrdinateur + 1);
    }
    // ----------------------------------------
    const removeMobile = () => {
        if (nbrMobile > 0) {
            setNbrmobile(nbrMobile - 1);
        }  
    }
    const removeTablet = () => {
        if (nbrTablet > 0) {
            setNbrtablet(nbrTablet - 1);
        }  
    }
    const removeTv = () => {
        if (nbrTv > 0) {
            setNbrtv(nbrTv - 1);
        }  
    }
    const removeOrdinateur = () => {
        if (nbrOrdinateur > 0) {
            setNbrordinateur(nbrOrdinateur - 1);
        }  
    }

    // -----------------------------------------
    return (
        <>
            <div className={Style.devices}>
                <div className={Style.item_device}>
                    <div className={Style.choose_nbr__device}>
                        <button className={Style.btn_device} onClick={addMobile}>+</button>
                        <button className={Style.btn_device} onClick={removeMobile}>-</button>
                    </div>
                    <img src="/iphone.png" alt="mobile" />
                    
                    <span className={Style.nbr_connected}>{nbrMobile}</span>
                </div>
                <div className={Style.item_device}>
                    <div className={Style.choose_nbr__device}>
                        <button className={Style.btn_device} onClick={addTablet}>+</button>
                        <button className={Style.btn_device} onClick={removeTablet}>-</button>
                    </div>
                    <img src="/tablet_2.png" alt="tablette" />
                    
                    <span className={Style.nbr_connected}>{nbrTablet}</span>
                </div>
                <div className={Style.item_device}>
                    <div className={Style.choose_nbr__device}>
                        <button className={Style.btn_device} onClick={addTv}>+</button>
                        <button className={Style.btn_device} onClick={removeTv}>-</button>
                    </div>
                    <img src="/tv.png" alt="tv" />
                    
                    <span className={Style.nbr_connected}>{nbrTv}</span>
                </div>
                <div className={Style.item_device}>
                    <div className={Style.choose_nbr__device}>
                        <button className={Style.btn_device} onClick={addOrdinateur}>+</button>
                        <button className={Style.btn_device} onClick={removeOrdinateur}>-</button>
                    </div>
                    <img src="/computer_2.png" alt="computer" />
                    
                    <span className={Style.nbr_connected}>{nbrOrdinateur}</span>
                </div>
            </div>
            <Chart nbrMobile={nbrMobile} nbrTablet={nbrTablet} nbrTv={nbrTv} nbrOrdinateur={nbrOrdinateur} />
        </>
        
    );
};
export default Device;