import React, { Component } from 'react';

class PostHeader extends Component { 
  
  render() {
    return (
      <div className="post-header">
        <img className="avatar"
          src={this.props.author.avatar} 
          alt={`Foto de ${this.props.author.name}`}
        />
        <div className="details">
          <span>
            {this.props.author.name}
          </span>
          <span>
            {this.date}
          </span>
        </div>
      </div>
    );
  };
};

export default PostHeader;
