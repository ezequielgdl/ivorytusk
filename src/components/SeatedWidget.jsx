import React, { useEffect } from 'react';

const SeatedWidget = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://widget.seated.com/app.js';
    script.async = true;

    const seatedDiv = document.createElement('div');
    seatedDiv.id = 'seated-55fdf2c0';
    seatedDiv.setAttribute('data-artist-id', 'd736df7a-9072-43e6-a4ad-6c17b9c6ab84');
    seatedDiv.setAttribute('data-css-version', '3');

    const container = document.getElementById('seated-widget-container');
    if (container) {
      container.appendChild(seatedDiv);
      container.appendChild(script);
    }

    return () => {
      // Cleanup when the component is unmounted
      if (container) {
        container.removeChild(seatedDiv);
        container.removeChild(script);
      }
    };
  }, []);

  return (
    <div id="seated-widget-container">
      {/* The Seated widget will be appended here */}
    </div>
  );
};

export default SeatedWidget;
