import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
const SlideToProceed = ({ 
  onComplete, 
  text = "Slide to Order",
  successMessage = "Order completed successfully!",
  toastDuration = 3000
}) => {
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState(0);
  const [sliderWidth, setSliderWidth] = useState(0);
  const [showSlider, setShowSlider] = useState(true);
  const [showToast, setShowToast] = useState(false);
  const sliderRef = useRef(null);
  const thumbRef = useRef(null);
  const toastTimer = useRef(null);
    const navigate = useNavigate();



  useEffect(() => {
    const updateSliderWidth = () => {
      if (sliderRef.current) {
        setSliderWidth(sliderRef.current.offsetWidth);
      }
    };

    updateSliderWidth();
    window.addEventListener('resize', updateSliderWidth);

    return () => {
      window.removeEventListener('resize', updateSliderWidth);
      if (toastTimer.current) clearTimeout(toastTimer.current);
    };
  }, []);

  const handleStart = (e) => {
    setIsDragging(true);
    e.preventDefault();
  };

  const handleMove = (e) => {
    if (!isDragging) return;
    
    const thumb = thumbRef.current;
    if (!thumb) return;

    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const sliderRect = sliderRef.current.getBoundingClientRect();
    const thumbWidth = thumb.offsetWidth;
    let newPosition = clientX - sliderRect.left - (thumbWidth / 2);
    
    const maxPosition = sliderWidth - thumbWidth;
    newPosition = Math.max(0, Math.min(newPosition, maxPosition));
    
    setPosition(newPosition);
  };

  const handleEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);
    const thumb = thumbRef.current;
    if (!thumb) return;

    const threshold = sliderWidth - thumb.offsetWidth - 10;
    
    if (position >= threshold) {
      setShowSlider(false);
      setShowToast(true);
      
      if (onComplete) onComplete();
      toastTimer.current = setTimeout(() => {
        setShowToast(false);
      }, toastDuration);
      setTimeout(()=>{

        navigate("/menu/burgers")
      },1000)
    } else {
      setPosition(0);
    }
  };

  useEffect(() => {
    const handleGlobalEnd = () => {
      if (isDragging) handleEnd();
    };

    window.addEventListener('mousemove', handleMove);
    window.addEventListener('mouseup', handleGlobalEnd);
    window.addEventListener('touchmove', handleMove, { passive: false });
    window.addEventListener('touchend', handleGlobalEnd);

    return () => {
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('mouseup', handleGlobalEnd);
      window.removeEventListener('touchmove', handleMove);
      window.removeEventListener('touchend', handleGlobalEnd);
    };
  }, [isDragging, position, sliderWidth]);

  const progressPercent = sliderWidth > 0 
    ? (position / (sliderWidth - (thumbRef.current?.offsetWidth || 50))) * 100 
    : 0;

  return (
    <div className="slide-container">
      {showSlider && (
        <div 
          ref={sliderRef}
          className="slide-track"
        >
          <div 
            className={`slide-progress ${progressPercent > 90 ? 'complete' : ''}`}
            style={{ width: `${progressPercent}%` }}
          />
          
          <div 
            ref={thumbRef}
            className={`slide-thumb ${isDragging ? 'dragging' : ''}`}
            style={{ left: `${position}px` }}
            onMouseDown={handleStart}
            onTouchStart={handleStart}
          >
            <svg className="slide-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </div>
          
          <div className="slide-label">
            {progressPercent > 10 ? '' : text}
          </div>
        </div>
      )}
      
      <div className={`slide-toast ${showToast ? 'visible' : ''}`}>
        {successMessage}
      </div>
    </div>
  );
};

export default SlideToProceed;