/* eslint-disable react/no-children-prop */

import { GridImage } from '../../components/grid-image';

import mork from '../../components/grid-image/mork';

export default function Home() {
  return (
    <>
      <GridImage {...mork} />
    </>
  );
}
