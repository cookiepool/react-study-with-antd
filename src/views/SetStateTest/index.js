import React from 'react';
import { Button } from 'antd'

function SetStateTestFuc({ props }) {
  console.log(props);
  const handleClick = () => {
    props.history.push('/refs-test');
  }

  return (
    <div>
      <div>This is setState API test!!!</div>
      <Button type="primary" onClick={handleClick}>按钮</Button>
    </div>
  )
}

class SetStateTest extends React.Component {
  state = {val: 0}

  componentDidMount() {
    this.setState((state) => {
      return { 
        val: state.val + 1 
      };
    });
    console.log(this.state.val) // 0

    // this.setState({ val: this.state.val + 1 })
    this.setState((state) => {
      return {
        val: state.val + 1
      };
    });
    console.log(this.state.val) // 0

    setTimeout(_ => {
      this.setState({ val: this.state.val + 1 })
      console.log(this.state.val); // 3

      this.setState({ val: this.state.val + 1 })
      console.log(this.state.val) // 4
    }, 0)
  }

  render() {
    return (
      <div>
        <p>{this.state.val}</p>
        <SetStateTestFuc props={this.props}></SetStateTestFuc>
      </div>
    );
  }
}
export default SetStateTest;