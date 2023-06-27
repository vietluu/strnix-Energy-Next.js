'use layout';
import React, { useRef, useEffect } from 'react';

import { Fancybox as NativeFancybox } from '@fancyapps/ui';
import '@fancyapps/ui/dist/fancybox/fancybox.css';



function Fancybox(props: any) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    const delegate = props.delegate || '[data-fancybox]';

    const options = props.options || {
      fitToView: false,
      autoScale: false,
      Toolbar: {
        display: {
          left: ['infobar'],
          middle: [
            'zoomIn',
            'zoomOut',
            'rotateCCW',
            'rotateCW',
            'flipX',
            'flipY',
            'fitX',
            'fitY',
            'reset',
            'toggleFS',
          ],
          right: ['fullscreen', 'thumbs', 'close'],
        },
      },

      compact: true,
    };

    NativeFancybox.bind(container, delegate, options);

    return () => {
      NativeFancybox.unbind(container);
      NativeFancybox.close();
    };
  });

  return <div ref={containerRef}>{props.children}</div>;
}

export default Fancybox;
