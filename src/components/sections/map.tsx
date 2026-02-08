import React from 'react';

/**
 * MapSection Component
 * 
 * Clones the full-width Google Maps embed section located below the contact form.
 * Based on the design instructions and HTML structure provided:
 * - Theme: Dark (centered in a dark atmosphere context, though the section itself is full-width)
 * - Location coordinates: q=52.37588,4.891295 (as per HTML structure iframe src)
 * - Layout: Full-width container
 */
const MapSection: React.FC = () => {
  return (
    <section 
      className="framer-6794jp w-full overflow-hidden bg-white" 
      data-framer-name="Map Section"
      style={{
        display: 'block',
        position: 'relative',
        width: '100%',
        margin: '0px',
        padding: '0px',
      }}
    >
      <div 
        className="framer-15ontc0 w-full" 
        data-framer-name="Container"
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div 
          className="framer-1arnl05-container w-full h-[450px] md:h-[500px] lg:h-[600px]"
          style={{
            position: 'relative',
            width: '100%',
          }}
        >
          {/* 
            Replicating the exact iframe structure from the provided HTML.
            The coordinates in the HTML (52.37588, 4.891295) refer to Amsterdam, 
            but the design instructions mention the Texas location content-wise. 
            Following the provided HTML structure's URL for technical accuracy.
          */}
          <div className="ssr-variant w-full h-full">
            <div 
              id="XHoy3vA5U" 
              className="w-full h-full"
              style={{
                width: '100%',
                height: '100%',
              }}
            >
              <iframe 
                src="https://maps.google.com/maps?q=52.37588%2C%204.891295&amp;z=15&amp;output=embed"
                width="100%"
                height="100%"
                style={{
                  border: 0,
                  display: 'block',
                  filter: 'grayscale(0.2) contrast(1.1)', // Subtle treatment to match high-level aesthetic
                }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps Location"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;