import React from 'react';

import { Button } from 'antd';

// 对于函数式组件，使用React.forwardRef
const FancyButton = React.forwardRef((props, ref) => {
  return (
    <div>
      <button ref={ref} className="FancyButton">
        {props.children}
      </button>

      <input type="text" ref={ref}/>
    </div>
  );
});

// 使用类组件
// class FancyButton extends React.Component {
//   constructor(props) {
//     super(props);
//     console.log(props);
//   }
//   render() {
//     return (
//       <button ref={this.props.ref} className="FancyButton">
//         {this.props.children}
//       </button>
//     );
//   }
// }

// 使用函数式组件,
// 这个会报错，
// Function components cannot be given refs.
// Attempts to access this ref will fail. Did you mean to use React.forwardRef()?
// function FancyButton(props) {
//   return <button className="FancyButton">{props.children}</button>;
// }

FancyButton.displayName = 'FancyButton';

// 你可以直接获取 DOM button 的 ref：
class FancyButtonWraper extends React.Component {
  constructor(props) {
    super(props);
    this.reftt = React.createRef();

    this.handleFocus = this.handleFocus.bind(this);
  }
  componentDidMount() {
    console.log(this.reftt);
  }

  handleFocus() {
    this.reftt.current.focus();
  }

  render() {
    return (
      <div>
        <FancyButton ref={this.reftt}>Click me!</FancyButton>
        <hr />
        <Button type="primary" onClick={this.handleFocus}>聚焦</Button>
      </div>
    );
  }
}

export default FancyButtonWraper;
