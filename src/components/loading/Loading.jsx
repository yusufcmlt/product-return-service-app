import { TitleHeading } from 'components/headings/Headings';
import React from 'react';

export default function Loading({ isLoading = true, children }) {
  return isLoading ? <TitleHeading>Yükleniyor</TitleHeading> : <>{children}</>;
}
