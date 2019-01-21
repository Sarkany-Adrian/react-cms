// @flow
import React from 'react';
import Image from 'atoms/Image';
import omit from 'lodash.omit';

type Props = {
  src?: string,
  alt?: string,
  text?: string,
  rest?: Object
};

type LogoType = React$Element<'span'> | React$Element<typeof Image>;

function Logo({ src, alt, text, ...rest }: Props): LogoType {
  const props = omit(rest, 'src', 'alt', 'text');

  if (!text) return <Image src={src} alt={alt} {...props} />;
  return <span {...props}>{text}</span>;
}

Logo.defaultProps = {
  src: '',
  alt: '',
  text: '',
  rest: undefined
};

export default Logo;
