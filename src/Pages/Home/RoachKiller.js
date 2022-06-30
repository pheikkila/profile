import "./RoachKiller.css";
import { useEffect } from "react";

export default function RoachKiller() {

    // function checkVisible(elm) {
    //     var rect = elm.getBoundingClientRect();
    //     var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
    //     return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
    // }

    useEffect(() => {
        var roachHasDied = false;
        const ROACH_KILLER_SCENE_PX = 4646;
        window.addEventListener('scroll', function () {
            if (!roachHasDied) {
                let topComponents = (2.1 * window.innerHeight);
                let windowScrollAdjusted = window.scrollY - topComponents;
                let functionalWidth = window.innerWidth * 3 / 4;
                let height = window.innerHeight;

                let maxWindowScrollAdjusted = ROACH_KILLER_SCENE_PX - height;
                let fridgeSize = window.innerWidth * .15;
                let roachSize = window.innerWidth * .10;

                // landing points, relative to current window position
                // adjust these to change desired landing position on screen
                let landingPointX = (functionalWidth - fridgeSize);
                let landingPointY = (((height * 3) / 4) - fridgeSize);

                let landingPointScalingX = landingPointX / (maxWindowScrollAdjusted);
                let landingPointScalingY = landingPointY / (maxWindowScrollAdjusted);

                let roach = document.getElementById('roach');
                let fridge = document.getElementById('fridge');

                fridge.style.right = landingPointScalingX * windowScrollAdjusted + 'px';
                fridge.style.top = landingPointScalingY * windowScrollAdjusted + 'px';

                /* (1.4 * roach), (roachSize / 2) size arbitrary */
                roach.style.left = window.innerWidth - landingPointX - 1.4 * roachSize + 'px';
                roach.style.top = topComponents + maxWindowScrollAdjusted + landingPointY + roachSize / 2 + 'px';

                // handling the squashing of Sr. Roach
                if (Math.round(landingPointY) === Math.round(landingPointScalingY * windowScrollAdjusted)) {
                    roach.src = "/images/RIPRoachy.png";
                    fridge.style.transform = "rotate(90deg)";

                    // leave the fridge on the ground
                    fridge.style.position = "absolute";
                    fridge.style.top = topComponents + maxWindowScrollAdjusted + landingPointY + 'px';
                    fridge.style.right = landingPointX;

                    roachHasDied = true;
                    console.log("What have you done? How can you live with yourself?");
                }
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