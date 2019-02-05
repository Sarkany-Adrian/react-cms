// @flow
import React, { PureComponent } from 'react';
// Assets
import errorImg from 'images/error_image.png';
// utils
import omit from 'lodash.omit';
// Style
import StyledImage from './style';

// imo the commented lines give rise to unnecessary complexity both for humans and machines
// I would like to have a discussion about this when Zsolt gets back to clarify it

type Props = {
  src: string,
  alt: string,
  errorImage?: string,
  circle?: boolean,
  rounded?: boolean,
  crisp?: boolean,
  xs?: boolean,
  sm?: boolean,
  md?: boolean,
  lg?: boolean,
  onClick?: () => void
  // rest?: Object
};

type State = {
  src: string
};

class Image extends PureComponent<Props, State> {
  static defaultProps = {
    errorImage: errorImg,
    circle: false,
    rounded: false,
    crisp: false,
    xs: false,
    sm: false,
    md: false,
    lg: false,
    onClick: undefined
  };

  constructor(props: Props) {
    super(props);
    this.state = {
      src: props.src
    };
  }

  handleError = () => {
    const { errorImage } = this.props;
    this.setState({ src: errorImage });
  };

  render() {
    const { alt, errorImage, ...rest } = this.props;
    const { src } = this.state;
    const imgProps = omit(rest, 'src');

    // const imgProps = omit(rest, 'src', 'alt', 'onError', 'errorImage');
    // console.log('props in image', this.props);
    // console.log('rest ', rest);
    // console.log('imgProps', imgProps);

    return (
      <StyledImage
        alt={alt}
        src={src}
        onError={this.handleError}
        {...imgProps}
      />
    );
  }
}

export default Image;
