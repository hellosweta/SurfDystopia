- clearing errors between modals required clearing them every time the props changed and checking that errors exist
```js
componentWillReceiveProps(newProps){
  if (this.props !== newProps && this.props.errors.length > 0) {
    this.props.clearErrors();
  }
}
```
