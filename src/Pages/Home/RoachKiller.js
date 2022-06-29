import "./RoachKiller.css";
import { useEffect } from "react";

export default function RoachKiller() {

    // function checkVisible(elm) {
    //     var rect = elm.getBoundingClientRect();
    //     var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
    //     return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
    // }

    useEffect(() => {
        window.addEventListener('scroll', function () {
            let windowScrollAdjusted = window.scrollY - (2.1 * window.innerHeight);
            let functionalWidth = window.innerWidth * 3 / 4;
            let height = window.innerHeight;
            // 4646 size of entire roach killer scenery
            let maxWindowScrollAdjusted = 4646 - height;
            let fridgeSize = window.innerWidth * .15;
            let roachSize = window.innerWidth * .10;

            let landingPointX = (functionalWidth - fridgeSize);
            let landingPointY = (((height * 3) / 4) - fridgeSize);

            let landingPointScalingX = landingPointX / (maxWindowScrollAdjusted);
            let landingPointScalingY = landingPointY / (maxWindowScrollAdjusted);

            let roach = document.getElementById('roach');
            let fridge = document.getElementById('fridge');

            fridge.style.right = landingPointScalingX * windowScrollAdjusted + 'px';
            fridge.style.top = landingPointScalingY * windowScrollAdjusted + 'px';

            /* (1.5 * roach), (roachSize / 2) size arbitrary */
            roach.style.left = window.innerWidth - landingPointX - 1.5 * roachSize + 'px';
            roach.style.top = 2.1 * window.innerHeight + maxWindowScrollAdjusted + landingPointY + roachSize / 2 + 'px';

            if (Math.round(landingPointY) === Math.round(landingPointScalingY * windowScrollAdjusted)) {
                roach.src = "/images/RIPRoachy.png";
                console.log("What have you done? How can you live with yourself?");
            }
        });
    }, []);

    return (
        <div className="background" >
            <div className="blending-top" />
            <div className="blending-bottom" />
            <img src="/images/roach.png" className="roach-img" id="roach" alt="L roach"></img>
            <img src="/images/fridge.png" className="fridge-img" id="fridge" alt="L fridge"></img>
        </div>
    );
}