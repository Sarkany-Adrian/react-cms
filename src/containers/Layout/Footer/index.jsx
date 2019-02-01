// @flow
import React, { Children, type Node } from 'react';
import { chunk } from 'helpers/array';
// style
import './style.scss';

type TProps = {
  children?: Node,
  rows?: number
};

function Footer({ children, rows }: TProps): React$Element<'div'> {
  const numberOfRows = Children.count(children) / Number(rows);
  let childArr = Children.toArray(children);
  childArr = chunk(childArr, numberOfRows);

  return (
    <div className="app-footer container">
      {childArr.map((row: Array<React$Element<*>>) => (
        <div key={row[0].key} className="app-footer__row row">
          {row.map((item: React$Element<*>) => (
            <div key={item.key} className="col-sm col-md">
              {item}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

Footer.defaultProps = {
  rows: 1,
  children: []
};

export default Footer;
