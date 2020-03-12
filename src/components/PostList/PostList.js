import React, { Component } from 'react';

import PostItem from "./PostItem"

import "./PostList.css"

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: 'Paola Silveira',
          avatar: 'https://scontent.fpoa2-1.fna.fbcdn.net/v/t1.0-9/51834000_2239644456313429_3177230184956821504_n.jpg?_nc_cat=106&_nc_sid=85a577&_nc_oc=AQnr1QfXFRz7So0UlUhrO44zRcxQFfMtU7FEGsZ8sNORodlxYXA0sfbP_gBXDTh4VxI&_nc_ht=scontent.fpoa2-1.fna&oh=5178fae9905a923e9a743b1283cb4ea4&oe=5E8EE596'
        },
        date: 'Agora 22:30',
        content: '#!@ CONTA HAKEADA! @!# ATENÇÃO ESTA CONTA FOI HAKEADA, PEÇO UM RESGATE DE R$200,00 PARA LIBERAR A CONTA, NO CONTRÁRIO IREMOS VENDER OS DADOS PARA OS CHINESES! #@$#!*$@#%!*&10010001000100010000100',
        comments: [
          {
            id: 2,
            author: {
              name: 'Tulio Camargo de Azevedo',
              avatar: 'https://scontent.fpoa2-1.fna.fbcdn.net/v/t1.0-9/p960x960/42462395_1978450165526476_1328322548726759424_o.jpg?_nc_cat=105&_nc_sid=85a577&_nc_oc=AQmyS1oxh04mlaIRvdhc4oaJqwEhkLELjgcHQqs2bvMZFXS8qT16t-6YC22GKI8VHX0&_nc_ht=scontent.fpoa2-1.fna&_nc_tp=6&oh=dbd2e8c676da0ad8eb364e86517accf8&oe=5E8DDDD6'
            },
            date: 'Agora 22:45',
            content:
              'É você amor? ??? ??? ???'
          }
        ]
      },
      {
        id: 3,
        author: {
          name: 'Neil Cook',
          avatar: 'https://i.pravatar.cc/150?img=8'
        },
        date: '04 Jun 2019',
        content:
          'Fala galera, beleza?\nEstou fazendo o Bootcamp GoStack e está sendo muito massa! Alguém mais aí fazendo? Comenta aí na publicação para trocarmos uma idéia',
        comments: [
          {
            id: 4,
            author: {
              name: 'Clara Lisboa',
              avatar: 'https://i.pravatar.cc/150?img=5'
            },
            date: '04 Jun 2019',
            content:
              'Também estou fazendo o Bootcamp e estou adorando! Estou no terceiro módulo sobre Node e já tenho minha API dos desafios construída!'
          },
          {
            id: 5,
            author: {
              name: 'Cézar Toledo',
              avatar: 'https://i.pravatar.cc/150?img=11'
            },
            date: '04 Jun 2019',
            content:
              'Que maaaaaassa! Estou pensando em me inscrever na próxima turma pra ver qual é desse Bootcamp GoStack, dizem que os devs saem de lá com super poderes'
          }
        ]
      },
      {
        id: 6,
        author: {
          name: 'Gabriel Lisboa',
          avatar: 'https://i.pravatar.cc/150?img=51'
        },
        date: '04 Jun 2019',
        content:
          'Fala galera, beleza?\nEstou fazendo o Bootcamp GoStack e está sendo muito massa! Alguém mais aí fazendo? Comenta aí na publicação para trocarmos uma idéia',
        comments: [
          {
            id: 4,
            author: {
              name: 'Clara Lisboa',
              avatar: 'https://i.pravatar.cc/150?img=5'
            },
            date: '04 Jun 2019',
            content:
              'Também estou fazendo o Bootcamp e estou adorando! Estou no terceiro módulo sobre Node e já tenho minha API dos desafios construída!'
          },
          {
            id: 5,
            author: {
              name: 'Cézar Toledo',
              avatar: 'https://i.pravatar.cc/150?img=11'
            },
            date: '04 Jun 2019',
            content:
              'Que maaaaaassa! Estou pensando em me inscrever na próxima turma pra ver qual é desse Bootcamp GoStack, dizem que os devs saem de lá com super poderes'
          }
        ]
      }
    ]
  };
  
  render() {
    return (
      <div className="post-list">
        {this.state.posts.map(post => (
          <div className="post">
            <PostItem key={post.id} post={post} />
          </div>
        ))}
      </div>
    );
  };
};

export default PostList;
