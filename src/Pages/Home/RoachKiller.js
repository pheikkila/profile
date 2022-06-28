import "./RoachKiller.css";
import { useEffect } from "react";

export default function RoachKiller() {

    function checkVisible(elm) {
        var rect = elm.getBoundingClientRect();
        var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
        return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
    }

    useEffect(() => {
        window.addEventListener('scroll', function () {
            let value = window.scrollY - (2 * this.window.innerHeight);
            let width = window.innerWidth * 3 / 4;
            let height = window.innerHeight;

            let roach = document.getElementById('roach');
            let fridge = document.getElementById('fridge');
            // roach.style.marginTop = value * .1 + 'px';

            // fridge.style.right = Math.min(value * .15, width) + 'px';
            // fridge.style.top = Math.min(value * .15, 1000000) + 'px';

            fridge.style.right = value * (width / 5000) + 'px';
            fridge.style.top = value * (height / 8000) + 'px';

            // fridge.style.top = 
            console.log("value: " + value);
            console.log("width: " + width);
            console.log("height: " + height);
            // if (checkVisible(fridge)) {
            //     console.log('yeet');
            // }
        });
    }, []);

    return (
        <div className="background" >
            <div className="blending-top" />
            <div className="blending-bottom" />
            {/* <img src="/images/roach.png" className="roach-img" id="roach"></img> */}
            <img src="/images/fridge.png" className="fridge-img" id="fridge"></img>
        </div>
    );
}