import css from './loading.module.css';

export default function Loading() {
  return (
    <div className={css.loaderContainer}>
      <div className={css.loaderWrapper}>
        <svg
          viewBox="0 0 100 100"
          className={css.maryIcon}
          width="120"
          height="120"
        >
          <defs>
            <linearGradient
              id="sunGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#FFD200" />
              <stop offset="100%" stopColor="#F7971E" />
            </linearGradient>
          </defs>

          <g className={css.sunMain}>
            <circle cx="50" cy="50" r="20" fill="url(#sunGradient)" />

            <g
              className={css.rays}
              stroke="url(#sunGradient)"
              strokeWidth="4"
              strokeLinecap="round"
            >
              <line x1="50" y1="15" x2="50" y2="25" />
              <line x1="50" y1="75" x2="50" y2="85" />
              <line x1="15" y1="50" x2="25" y2="50" />
              <line x1="75" y1="50" x2="85" y2="50" />
              <line x1="25" y1="25" x2="32" y2="32" />
              <line x1="68" y1="68" x2="75" y2="75" />
              <line x1="25" y1="75" x2="32" y2="68" />
              <line x1="68" y1="32" x2="75" y2="25" />
            </g>
          </g>

          <g>
            <ellipse
              cx="20"
              cy="90"
              rx="15"
              ry="5"
              className={css.cloud1}
              fill="#A18CD1"
              opacity="0.6"
            />
            <ellipse
              cx="80"
              cy="92"
              rx="20"
              ry="7"
              className={css.cloud2}
              fill="#A18CD1"
              opacity="0.4"
            />
            <ellipse
              cx="50"
              cy="95"
              rx="12"
              ry="4"
              className={css.cloud3}
              fill="#A18CD1"
              opacity="0.5"
            />
          </g>
        </svg>

        <span
          style={{
            fontFamily: 'sans-serif',
            color: '#F7971E',
            fontWeight: 'bold',
            fontSize: '18px',
            marginTop: '10px',
          }}
        >
          Loading...
        </span>
      </div>
    </div>
  );
}
