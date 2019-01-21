// @flow
import React, { PureComponent } from 'react';
import errorImg from 'images/error_image.png';
// utils
import omit from 'lodash.omit';

type Props = {
  src: string,
  alt: string,
  errorImage?: string,
  rest?: Object
};

type State = {
  src: string
};

class Image extends PureComponent<Props, State> {
  static defaultProps = {
    errorImage: errorImg,
    rest: undefined
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
    const imgProps = omit(rest, 'src', 'alt', 'onError', 'errorImage');
    return <img alt={alt} src={src} onError={this.handleError} {...imgProps} />;
  }
}

export default Image;
