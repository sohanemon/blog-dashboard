import * as React from 'react';

function Logo({ fill = '#3B81F6', ...rest }) {
  return (
    <svg
      width={37}
      height={32}
      className='mt-6'
      fill='none'
      viewBox='0 0 37 32'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M12.1983 13.2657L22.6195 13.264L25.0023 9.16071L5.36072 9.1624L15.1671 26.0934L17.4004 22.2483L12.1983 13.2657Z'
        fill='white'
      />
      <mask
        id='mask0_16_760'
        style={{ maskType: 'luminance' }}
        maskUnits='userSpaceOnUse'
        x={0}
        y={0}
        width={31}
        height={8}
      >
        <path
          d='M0.38147 0.54187H30.2931V7.8805H0.38147V0.54187Z'
          fill='white'
        />
      </mask>
      <g mask='url(#mask0_16_760)'>
        <path
          d='M7.21529 4.65383L27.6279 4.65214L30.0107 0.548889L0.375977 0.550588L4.55905 7.77033H9.02065L7.21529 4.65383Z'
          fill='#868686'
        />
      </g>
      <mask
        id='mask1_16_760'
        style={{ maskType: 'luminance' }}
        maskUnits='userSpaceOnUse'
        x={15}
        y={0}
        width={22}
        height={32}
      >
        <path
          d='M15.9371 0.54187H36.2428V31.52H15.9371V0.54187Z'
          fill='white'
        />
      </mask>
      <g mask='url(#mask1_16_760)'>
        <path
          d='M31.6185 0.548889L15.9714 27.4849L18.3067 31.5152L36.238 0.548889H31.6185Z'
          fill='white'
        />
      </g>
    </svg>
  );
}

export default Logo;
