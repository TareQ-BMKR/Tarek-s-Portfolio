import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import '../CssFiles/Loader.css';

const Loader = ({ onComplete }) => {
    const loaderRef = useRef(null);
    const logoRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline({
            onComplete: () => {
                gsap.to(loaderRef.current, {
                    opacity: 0,
                    duration: 0.8,
                    ease: 'power2.inOut',
                    onComplete: onComplete
                });
            }
        });

        tl.fromTo(logoRef.current,
            { opacity: 0, scale: 0.5, rotate: -10 },
            { opacity: 1, scale: 1, rotate: 0, duration: 0.6, ease: 'back.out(1.7)' }
        )
        .to(logoRef.current, {
            opacity: 0,
            scale: 1.2,
            duration: 0.4,
            delay: 0.3,
            ease: 'power2.in'
        });

    }, [onComplete]);

    return (
        <div className="loader-container" ref={loaderRef}>
            <div className="loader-content">
                <img 
                    src="/logo1.png" 
                    alt="Logo" 
                    className="loader-logo" 
                    ref={logoRef} 
                    style={{ height: '180px', width: 'auto' }} 
                />
            </div>
        </div>
    );
};

export default Loader;
