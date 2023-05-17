import React, { useState } from 'react';
import Style from '../../styles/Home.module.scss';

const Chart = (props) => {
    
    const { nbrMobile, nbrTablet, nbrTv, nbrOrdinateur } = props;

    const [speedRangeAdsl, setSpeedRangeAdsl] = useState('');

    function updateSpeedRangeAdsl() {
        if (nbrMobile >= 2 && nbrTablet >= 1 && nbrTv >= 1 && nbrOrdinateur >= 1)  {
            setSpeedRangeAdsl('low_speed');
        } else if (nbrMobile >= 1 && nbrTablet >= 1 && nbrTv >= 1 && nbrOrdinateur >= 1) {
            setSpeedRangeAdsl('medium_speed');
        } else if (nbrMobile >= 1 && nbrTablet >= 1 && nbrTv >= 1  && nbrOrdinateur === 0) {
            setSpeedRangeAdsl('high_speed');
        } else if (nbrMobile >= 1 && nbrTablet >= 1 && nbrTv === 0 && nbrOrdinateur === 0) {
            setSpeedRangeAdsl('very_high_speed');
        } else {
            setSpeedRangeAdsl('ultra_high_speed');
        }     
    }


    return (
        <>
            <div className={Style.charts_speed}>
                <div className={`${Style.adsl} ${speedRangeAdsl}`}>
                    <h3>ADSL</h3>
                    <div className={Style.chart}>
                        <div className={Style.circle}></div>
                        <div className={Style.needle}></div>
                        <div className={Style.value}>0</div>
                        <div className={Style.val_speed}>
                            <div className={Style.low}>Low</div>
                            <div className={Style.high}>High</div>
                        </div>
                    </div>
                </div>
                <div className={Style.optical_fiber}>
                    <h3>Optical fiber</h3>
                    <div className={Style.chart}>
                        <div className={Style.circle}></div>
                        <div className={Style.needle}></div>
                        <div className={Style.value}>0</div>
                        <div className={Style.val_speed}>
                            <div className={Style.low}>Low</div>
                            <div className={Style.high}>High</div>
                        </div>
                    </div>
                </div>
                <button className={Style.btn_test} onClick={() => updateSpeedRangeAdsl()}>Test debit</button>
            </div>
            
        </>
        
    );
}

export default Chart;