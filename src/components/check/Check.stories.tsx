import React from 'react';
import Check from './Check';

export default {
  title: 'Check',
  component: Check,
};

export const Showcase = () => {
  const [animate, setAnimate] = React.useState(false);

  setInterval(() => {
    setAnimate(!animate);
  }, 1000);

  return (
    <div>
      <div className="grid bg-gray-100 gap-4 md:grid-cols-8 p-4">
        <Check color={'teal'} animate={animate} />
        <Check color={'blue'} animate={animate} />
        <Check color={'indigo'} animate={animate} />
        <Check color={'purple'} animate={animate} />
        <Check color={'cerise'} animate={animate} />
        <Check color={'coral'} animate={animate} />
        <Check color={'ochre'} animate={animate} />
        <Check color={'gold'} animate={animate} />
        <Check color={'lime'} animate={animate} />
        <Check color={'teal'} done />
        <Check color={'blue'} done />
        <Check color={'indigo'} done />
        <Check color={'purple'} done />
        <Check color={'cerise'} done />
        <Check color={'coral'} done />
        <Check color={'ochre'} done />
        <Check color={'gold'} done />
        <Check color={'lime'} done />
      </div>
      <div className="grid bg-gray-500 gap-4 md:grid-cols-8 p-4">
        <Check color={'teal'} dark animate={animate} />
        <Check color={'blue'} dark animate={animate} />
        <Check color={'indigo'} dark animate={animate} />
        <Check color={'purple'} dark animate={animate} />
        <Check color={'cerise'} dark animate={animate} />
        <Check color={'coral'} dark animate={animate} />
        <Check color={'ochre'} dark animate={animate} />
        <Check color={'gold'} dark animate={animate} />
        <Check color={'lime'} dark animate={animate} />
        <Check color={'teal'} done dark />
        <Check color={'blue'} done dark />
        <Check color={'indigo'} done dark />
        <Check color={'purple'} done dark />
        <Check color={'cerise'} done dark />
        <Check color={'coral'} done dark />
        <Check color={'ochre'} done dark />
        <Check color={'gold'} done dark />
        <Check color={'lime'} done dark />
      </div>
    </div>
  );
};
