// page wrapper
// @author Pluto <huarse@gmail.com>
// @create 2019/02/11

import React, { Component } from 'react';
import Erroring from '@/components/blank/error';

export default class ErrorBoundary extends Component {
  static getDerivedStateFromError(error: any) {
    return { hasError: true };
  }

  state = {
    hasError: false,
  };

  componentDidCatch(error: any, info: any) {
    // 可以在这里添加日志
    console.warn('> ErrorBoundary::something error:', error, info);
  }

  handleRetry() {
    location.reload();
  }

  render() {
    return this.state.hasError ?
      <Erroring noborder onClick={this.handleRetry} height="80vh" /> : this.props.children;
  }
}
