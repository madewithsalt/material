import React, { Component } from 'react';

require('prismjs');

class CodeElement extends Component {
  componentDidMount() {
    this.renderContent()
  }

  renderContent() {
    if(!this.props.react) {
      const content = this.shadow.innerHTML;

      this.code.innerHTML = Prism.highlight(content, Prism.languages[this.props.format]);
    }
  }

  renderReactComponent() {
    return (
      <pre>
        <code
          className={`language-${this.props.format} code-element`} ref={(d) => this.code = d }
          dangerouslySetInnerHTML={{__html: Prism.highlight(this.props.children, Prism.languages[this.props.format]) }} />
      </pre>
    )
  }

  render() {
    return (
      <div className="code-element-container">
        <div className="shadow" style={{ display: 'none'}} ref={(s) => this.shadow = s }>{this.props.children}</div>
        { !this.props.react ? (
          <pre>
            <code className={`language-${this.props.format} code-element`} ref={(d) => this.code = d }>
            </code>
          </pre>
        ) : this.renderReactComponent() }
    </div>
    )
  }
}

CodeElement.defaultProps = {
  format: 'html',
  react: false
}


export default CodeElement;
