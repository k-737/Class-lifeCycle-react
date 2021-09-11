import React, { Component } from "react";

export default class Class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      title: "PDP",
    };
  }
  componentDidMount() { //eng oxirida ishlaydi
    console.log(`componentDidMount`);
  }
  componentWillMount() { //render bilan constructor orasida ishlaydi
    console.log(`componentWillMount`); 
  }
  shouldComponentUpdate() { // ekrannda malumotni o'zgarish, o'zgarmasligini taminlaydi
    console.log(this.state.count);
    return false;
  }
  componentWillReceiveProps(state) { //propni qiymati yangilanganda ishlaydi 
    console.log(state, `componentWillReceiveProps`);
  }
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <button onClick={() => this.setState({ count: this.state.count - 1 })}>
          -
        </button>
        <h1>{this.state.count}</h1>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          +
        </button>
      </div>
    );
  }
}
