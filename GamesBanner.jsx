import React from 'react';

export default function GamesBanner() {
  // Soccer ball pixel art - 20x20
  const ballPixels = [
    [0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0],
    [0,0,0,0,0,1,1,3,3,3,3,3,3,1,1,0,0,0,0,0],
    [0,0,0,0,1,3,3,3,2,2,2,2,3,3,3,1,0,0,0,0],
    [0,0,0,1,3,3,2,2,2,2,2,2,2,2,3,3,1,0,0,0],
    [0,0,1,3,3,2,2,2,2,2,2,2,2,2,2,3,3,1,0,0],
    [0,1,3,3,2,2,2,1,1,1,1,1,1,2,2,2,3,3,1,0],
    [0,1,3,2,2,2,1,1,1,1,1,1,1,1,2,2,2,3,1,0],
    [1,3,3,2,2,1,1,1,1,1,1,1,1,1,1,2,2,3,4,1],
    [1,3,3,2,2,1,1,1,1,1,1,1,1,1,1,2,2,3,4,1],
    [1,3,3,2,2,1,1,1,2,2,2,2,1,1,1,2,2,3,4,1],
    [1,3,3,2,2,1,1,1,2,2,2,2,1,1,1,2,2,3,4,1],
    [1,3,3,2,2,1,1,1,1,1,1,1,1,1,1,2,2,4,4,1],
    [1,3,3,2,2,1,1,1,1,1,1,1,1,1,1,2,2,4,4,1],
    [0,1,3,2,2,2,1,1,1,1,1,1,1,1,2,2,2,4,1,0],
    [0,1,3,3,2,2,2,1,1,1,1,1,1,2,2,2,4,4,1,0],
    [0,0,1,3,3,2,2,2,2,2,2,2,2,2,2,4,4,1,0,0],
    [0,0,0,1,3,3,2,2,2,2,2,2,2,2,4,4,1,0,0,0],
    [0,0,0,0,1,3,3,3,2,2,2,2,4,4,4,1,0,0,0,0],
    [0,0,0,0,0,1,1,4,4,4,4,4,4,1,1,0,0,0,0,0],
    [0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0],
  ];

  const ballColors = {
    0: 'transparent',
    1: '#f0f0f0',
    2: '#1a1a1a',
    3: '#ffffff',
    4: '#cccccc'
  };

  return (
    <div className="games-banner">
      <style>{`
        .games-banner {
          background: linear-gradient(180deg, #0a0a0a 0%, #1a1a1a 50%, #0f0f0f 100%);
          border: 1px solid #333;
          border-radius: 8px;
          padding: 1.5rem 1rem;
          margin: 1rem 0 2rem 0;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          flex-wrap: wrap;
          min-height: 180px;
        }

        @media (min-width: 640px) {
          .games-banner {
            gap: 2rem;
            padding: 2rem;
          }
        }

        @media (min-width: 768px) {
          .games-banner {
            gap: 3rem;
          }
        }

        .banner-item {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .banner-title {
          font-family: 'JetBrains Mono', 'Fira Code', monospace;
          font-size: 2rem;
          font-weight: bold;
          color: #22c55e;
          letter-spacing: 0.3em;
          text-shadow: 0 0 20px rgba(34, 197, 94, 0.5);
          margin: 0;
        }

        @media (min-width: 640px) {
          .banner-title {
            font-size: 2.5rem;
          }
        }

        /* Soccer Ball Styles */
        .ball-wrapper {
          height: 120px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-end;
        }

        .ball-container {
          animation: bounce 1.2s ease-in-out infinite;
          transform-origin: center bottom;
        }

        .ball {
          display: block;
          animation: squash 1.2s ease-in-out infinite;
          transform-origin: center bottom;
        }

        .ball-shadow {
          width: 50px;
          height: 10px;
          background: radial-gradient(ellipse, rgba(34, 197, 94, 0.4) 0%, transparent 70%);
          border-radius: 50%;
          margin-top: 2px;
          animation: shadow-pulse 1.2s ease-in-out infinite;
        }

        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-55px); }
        }

        @keyframes squash {
          0%, 100% { transform: scaleX(1.12) scaleY(0.88); }
          35%, 65% { transform: scaleX(0.94) scaleY(1.06); }
        }

        @keyframes shadow-pulse {
          0%, 100% { transform: scaleX(1); opacity: 0.7; }
          50% { transform: scaleX(0.5); opacity: 0.25; }
        }

        /* Cube Styles */
        .cube-wrapper {
          height: 120px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .cube-svg {
          animation: cube-float 3s ease-in-out infinite;
        }

        @keyframes cube-float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-8px) rotate(3deg); }
        }

        .face-top { animation: color-top 4s ease-in-out infinite; }
        .face-left { animation: color-left 4s ease-in-out infinite; }
        .face-right { animation: color-right 4s ease-in-out infinite; }

        @keyframes color-top {
          0%, 100% { fill: #fbbf24; }
          33% { fill: #fb923c; }
          66% { fill: #fbbf24; }
        }
        @keyframes color-left {
          0%, 100% { fill: #22c55e; }
          33% { fill: #fbbf24; }
          66% { fill: #ef4444; }
        }
        @keyframes color-right {
          0%, 100% { fill: #ef4444; }
          33% { fill: #22c55e; }
          66% { fill: #3b82f6; }
        }

        .grid-line {
          stroke: rgba(0,0,0,0.25);
          stroke-width: 0.5;
        }

        /* Queen Styles */
        .card-wrapper {
          height: 120px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .card-svg {
          filter: drop-shadow(2px 4px 8px rgba(0,0,0,0.4));
          animation: card-hover 2.5s ease-in-out infinite;
        }

        @keyframes card-hover {
          0%, 100% { transform: translateY(0) rotate(-2deg); }
          50% { transform: translateY(-6px) rotate(2deg); }
        }

        .eye-open {
          animation: wink 4s ease-in-out infinite;
        }

        .eye-wink {
          animation: wink-line 4s ease-in-out infinite;
        }

        @keyframes wink {
          0%, 15%, 25%, 100% { opacity: 1; }
          18%, 22% { opacity: 0; }
        }

        @keyframes wink-line {
          0%, 15%, 25%, 100% { opacity: 0; }
          18%, 22% { opacity: 1; }
        }

        .heart { fill: #dc2626; }
        .queen-red { fill: #dc2626; }
      `}</style>

      {/* Soccer Ball */}
      <div className="banner-item">
        <div className="ball-wrapper">
          <div className="ball-container">
            <svg 
              className="ball"
              width={60} 
              height={60} 
              viewBox="0 0 20 20"
              style={{ imageRendering: 'pixelated' }}
            >
              {ballPixels.map((row, y) =>
                row.map((pixel, x) =>
                  pixel !== 0 && (
                    <rect
                      key={`${x}-${y}`}
                      x={x}
                      y={y}
                      width={1}
                      height={1}
                      fill={ballColors[pixel]}
                    />
                  )
                )
              )}
            </svg>
          </div>
          <div className="ball-shadow"></div>
        </div>
      </div>

      {/* GAMES Title */}
      <div className="banner-item">
        <h1 className="banner-title">GAMES</h1>
      </div>

      {/* Rubik's Cube */}
      <div className="banner-item">
        <div className="cube-wrapper">
          <svg className="cube-svg" width="70" height="80" viewBox="0 0 80 92">
            <g className="face-top">
              <polygon points="40,4 72,20 40,36 8,20" fill="#fbbf24"/>
              <line x1="18.67" y1="14.67" x2="50.67" y2="30.67" className="grid-line"/>
              <line x1="29.33" y1="9.33" x2="61.33" y2="25.33" className="grid-line"/>
              <line x1="24" y1="28" x2="56" y2="12" className="grid-line"/>
              <line x1="32" y1="32" x2="64" y2="16" className="grid-line"/>
            </g>
            <g className="face-left">
              <polygon points="8,20 40,36 40,84 8,68" fill="#22c55e"/>
              <line x1="8" y1="36" x2="40" y2="52" className="grid-line"/>
              <line x1="8" y1="52" x2="40" y2="68" className="grid-line"/>
              <line x1="18.67" y1="30.67" x2="18.67" y2="78.67" className="grid-line"/>
              <line x1="29.33" y1="25.33" x2="29.33" y2="73.33" className="grid-line"/>
            </g>
            <g className="face-right">
              <polygon points="40,36 72,20 72,68 40,84" fill="#ef4444"/>
              <line x1="40" y1="52" x2="72" y2="36" className="grid-line"/>
              <line x1="40" y1="68" x2="72" y2="52" className="grid-line"/>
              <line x1="50.67" y1="30.67" x2="50.67" y2="78.67" className="grid-line"/>
              <line x1="61.33" y1="25.33" x2="61.33" y2="73.33" className="grid-line"/>
            </g>
            <line x1="8" y1="20" x2="40" y2="4" stroke="rgba(255,255,255,0.3)" strokeWidth="1"/>
            <line x1="40" y1="4" x2="72" y2="20" stroke="rgba(255,255,255,0.2)" strokeWidth="1"/>
          </svg>
        </div>
      </div>

      {/* Queen of Hearts */}
      <div className="banner-item">
        <div className="card-wrapper">
          <svg className="card-svg" width="50" height="72" viewBox="0 0 56 80" style={{ imageRendering: 'pixelated' }}>
            <rect x="0" y="0" width="56" height="80" rx="4" fill="#fefefe"/>
            <rect x="2" y="2" width="52" height="76" rx="3" fill="#ffffff" stroke="#e5e5e5" strokeWidth="1"/>
            
            <text x="6" y="14" fontSize="10" fontWeight="bold" fontFamily="Georgia, serif" className="queen-red">Q</text>
            <path d="M6,17 L9,23 L12,17 Q9,20 6,17" className="heart"/>
            
            <g transform="rotate(180, 28, 40)">
              <text x="6" y="14" fontSize="10" fontWeight="bold" fontFamily="Georgia, serif" className="queen-red">Q</text>
              <path d="M6,17 L9,23 L12,17 Q9,20 6,17" className="heart"/>
            </g>

            <path d="M23,32 L28,42 L33,32 Q28,37 23,32" className="heart" transform="scale(1.5) translate(-9, -8)"/>
            
            {/* Crown */}
            <rect x="20" y="44" width="16" height="3" fill="#fbbf24"/>
            <rect x="22" y="41" width="2" height="3" fill="#fbbf24"/>
            <rect x="27" y="41" width="2" height="3" fill="#fbbf24"/>
            <rect x="32" y="41" width="2" height="3" fill="#fbbf24"/>
            <rect x="23" y="42" width="1" height="1" fill="#dc2626"/>
            <rect x="28" y="42" width="1" height="1" fill="#dc2626"/>
            <rect x="32" y="42" width="1" height="1" fill="#dc2626"/>
            
            {/* Face */}
            <rect x="22" y="47" width="12" height="10" fill="#fcd9b6"/>
            
            {/* Hair */}
            <rect x="20" y="47" width="2" height="12" fill="#4a3728"/>
            <rect x="34" y="47" width="2" height="12" fill="#4a3728"/>
            <rect x="22" y="47" width="2" height="2" fill="#4a3728"/>
            <rect x="32" y="47" width="2" height="2" fill="#4a3728"/>
            
            {/* Eyes */}
            <rect x="24" y="50" width="2" height="2" fill="#1a1a1a"/>
            <rect x="30" y="50" width="2" height="2" fill="#1a1a1a" className="eye-open"/>
            <rect x="30" y="51" width="2" height="1" fill="#1a1a1a" className="eye-wink"/>
            
            {/* Blush */}
            <rect x="23" y="53" width="2" height="1" fill="#f4a0a0" opacity="0.6"/>
            <rect x="31" y="53" width="2" height="1" fill="#f4a0a0" opacity="0.6"/>
            
            {/* Smile */}
            <rect x="26" y="54" width="4" height="1" fill="#c9736e"/>
            <rect x="27" y="55" width="2" height="1" fill="#c9736e"/>
            
            {/* Dress */}
            <rect x="25" y="57" width="6" height="3" fill="#fcd9b6"/>
            <rect x="22" y="60" width="12" height="8" fill="#dc2626"/>
            <rect x="26" y="60" width="4" height="2" fill="#fefefe"/>
            <rect x="24" y="64" width="2" height="2" fill="#fbbf24"/>
            <rect x="30" y="64" width="2" height="2" fill="#fbbf24"/>
          </svg>
        </div>
      </div>
    </div>
  );
}