import React from 'react';
import classNames from 'classnames';
import './MainHeader.css';

class MainHeader extends React.Component {
  render() {
    const { children, cover } = this.props;

    const classes = classNames('main-header', this.props.className, {
      'no-cover': !cover,
    });

    // const getStyle = () => {
    //   if (cover) {
    //     return { backgroundImage: `url("${cover}")` };
    //   }
    //   return null;
    // };

    return (
      <header className={classes}>
        <div className="polygon">
          {/*    preserveAspectRatio: makes sure the triangle is scalable
      viewbox: points stretches from the parent
  */}
          <svg preserveAspectRatio="none" viewBox="0 0 100 100">
            <polygon points="100,0,100,100,0,100" opacity="1" transform="scale(-2,2) translate(-100,0)" />
          </svg>
        </div>
        <div className="polygon-2 polygon">
          {/*    preserveAspectRatio: makes sure the triangle is scalable
      viewbox: points stretches from the parent
  */}
          <svg preserveAspectRatio="none" viewBox="0 0 100 100">
            <polygon points="100,100 100,0 0,100" opacity="1" transform="scale(2,-2) translate(0,-100)" />
          </svg>
        </div>

        {children}
      </header>
    );
  }
}

export default MainHeader;
