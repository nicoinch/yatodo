import React from 'react';
import Button from './Button';

export default {
  label: 'Button',
  component: Button,
};

export const Showcase = () => (
  <div>
    <div className="grid bg-teal-100 gap-4 md:grid-cols-4 p-4">
      <Button label={'Project teal'} color={'teal'} />
      <Button label={'Project blue'} color={'blue'} />
      <Button label={'Project indigo'} color={'indigo'} />
      <Button label={'Project purple'} color={'purple'} />
      <Button label={'Project cerise'} color={'cerise'} />
      <Button label={'Project coral'} color={'coral'} />
      <Button label={'Project ochre'} color={'ochre'} />
      <Button label={'Project gold'} color={'gold'} />
      <Button label={'Project lime'} color={'lime'} />
    </div>
    <div className="grid bg-teal-800 gap-4 md:grid-cols-4 p-4">
      <Button label={'Project teal'} color={'teal'} dark />
      <Button label={'Project blue'} color={'blue'} dark />
      <Button label={'Project indigo'} color={'indigo'} dark />
      <Button label={'Project purple'} color={'purple'} dark />
      <Button label={'Project cerise'} color={'cerise'} dark />
      <Button label={'Project coral'} color={'coral'} dark />
      <Button label={'Project ochre'} color={'ochre'} dark />
      <Button label={'Project gold'} color={'gold'} dark />
      <Button label={'Project lime'} color={'lime'} dark />
    </div>
  </div>
);

export const States = () => (
  <div>
    <div className="grid bg-teal-100 gap-4 md:grid-cols-4 p-4">
      <Button label={'Project teal'} color={'teal'} />
      <Button label={'Project teal'} color={'teal'} disabled />
      <Button label={'Project blue'} color={'blue'} />
      <Button label={'Project blue'} color={'blue'} disabled />
      <Button label={'Project indigo'} color={'indigo'} />
      <Button label={'Project indigo'} color={'indigo'} disabled />
      <Button label={'Project purple'} color={'purple'} />
      <Button label={'Project purple'} color={'purple'} disabled />
      <Button label={'Project cerise'} color={'cerise'} />
      <Button label={'Project cerise'} color={'cerise'} disabled />
      <Button label={'Project coral'} color={'coral'} />
      <Button label={'Project coral'} color={'coral'} disabled />
      <Button label={'Project ochre'} color={'ochre'} />
      <Button label={'Project ochre'} color={'ochre'} disabled />
      <Button label={'Project gold'} color={'gold'} />
      <Button label={'Project gold'} color={'gold'} disabled />
      <Button label={'Project lime'} color={'lime'} />
      <Button label={'Project lime'} color={'lime'} disabled />
    </div>
    <div className="grid bg-teal-800 gap-4 md:grid-cols-4 p-4">
      <Button label={'Project teal'} color={'teal'} dark />
      <Button label={'Project teal'} color={'teal'} dark disabled />
      <Button label={'Project blue'} color={'blue'} dark />
      <Button label={'Project blue'} color={'blue'} dark disabled />
      <Button label={'Project indigo'} color={'indigo'} dark />
      <Button label={'Project indigo'} color={'indigo'} dark disabled />
      <Button label={'Project purple'} color={'purple'} dark />
      <Button label={'Project purple'} color={'purple'} dark disabled />
      <Button label={'Project cerise'} color={'cerise'} dark />
      <Button label={'Project cerise'} color={'cerise'} dark disabled />
      <Button label={'Project coral'} color={'coral'} dark />
      <Button label={'Project coral'} color={'coral'} dark disabled />
      <Button label={'Project ochre'} color={'ochre'} dark />
      <Button label={'Project ochre'} color={'ochre'} dark disabled />
      <Button label={'Project gold'} color={'gold'} dark />
      <Button label={'Project gold'} color={'gold'} dark disabled />
      <Button label={'Project lime'} color={'lime'} dark />
      <Button label={'Project lime'} color={'lime'} dark disabled />
    </div>
  </div>
);
