import React from 'react';
import { clsx } from 'clsx';

import { CssClass } from '../constants';

export interface RightSlotProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const RightSlot: React.FC<RightSlotProps> = ({ className, ...rest }) => (
  <div className={clsx(CssClass.rightSlot, className)} {...rest} />
);
