import React, { useState } from 'react';
import { Flat } from '../../../lib';
import { IFlatOptions } from '../../types';
import Settings from './Settings';

const FlatDemo: React.FC = () => {
  const [flatOptions, setFlatOptions] = useState<IFlatOptions>(
    {
      strokeColor: '#ff0000',
      range: { from: 0, to: 100 },
      strokeWidth: 5,
      valueSize: 30,
      textSize: 14,
      valueWeight: 'normal',
      textWeight: 'normal',
      valueFamily: 'Trebuchet MS',
      textFamily: 'Trebuchet MS',
      valueColor: '#000000',
      textColor: '#000000',
      showValue: true,
      showText: true,
      loadingTime: 1000,
      text: 'Lorem, ipsum.',
      bgColor: '#ffffff',
      strokeLinecap: 'butt',
      shape: 'full',
      showMiniCircle: true,
      miniCircleColor: '#ff0000'
    }
  );
  const [progress, setProgress] = useState(flatOptions.range.to / 2);
  return (
    <div className='flex flex-col items-center gap-2'>
      <div className='w-48'>
        <Flat
          progress={progress}
          range={{ from: flatOptions.range.from, to: flatOptions.range.to }}
          showMiniCircle={flatOptions.showMiniCircle}
          showValue={flatOptions.showValue}
          showText={flatOptions.showText}
          text={flatOptions.text}
          sx={{
            barColor: flatOptions.strokeColor,
            barWidth: flatOptions.strokeWidth,
            bgColor: flatOptions.bgColor,
            shape: flatOptions.shape,
            strokeLinecap: flatOptions.strokeLinecap,
            valueSize: flatOptions.valueSize,
            valueWeight: flatOptions.valueWeight,
            valueColor: flatOptions.valueColor,
            valueFamily: flatOptions.valueFamily,
            textSize: flatOptions.textSize,
            textWeight: flatOptions.textWeight,
            textColor: flatOptions.textColor,
            textFamily: flatOptions.textFamily,
            loadingTime: flatOptions.loadingTime,
            miniCircleColor: flatOptions.miniCircleColor
          }}
        />
      </div>
      <div className='w-fit'>
        <Settings {...{ setFlatOptions, flatOptions, setProgress, progress }}/>
      </div>
    </div>
  );
};

export default FlatDemo;
