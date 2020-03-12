import React, { Component } from 'react';

class PostComments extends Component { 
  
  render() {
    return (
      <div className="post-comments">
        <div className="divider" />
        {this.props.comments.map(comment => (
          <div key={comment.id} className="comment" >
            <img className="avatar"
              src={comment.author.avatar} 
              alt={`Imagem de ${comment.author.name}`}
            />
            <div className="comment-content" >
              <p>
                <span>{comment.author.name}</span>
                {comment.content}
              </p>
            </div>
          </div>
        ))}
      </div>
    );
  };
};

export default PostComments;
