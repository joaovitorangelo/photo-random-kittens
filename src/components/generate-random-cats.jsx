import React from 'react';
class GenerateRandomCats extends React.Component {
  state = {
    cats: []
  };

  fetchCats = () => {
    fetch('https://api.thecatapi.com/v1/images/search?limit=10')
      .then(res => res.json())
      .then(res => {
        this.setState({
          cats: res
        });
      })
      .catch(error => {
        console.error('Search error', error);
      });
  };

  render() {
    let content = (
      <ul className='cat-list'>
        {this.state.cats.map(item => (
          <li key={item.id} className='cat-item'>
            <img src={item.url} alt='Cat' />
          </li>
        ))}
      </ul>
    );

    return (
      <div>
        <h1>Photo random kittens</h1>
        <button onClick={this.fetchCats}>Load random kitten</button>
        {content}
      </div>
    );
  }
}

export default GenerateRandomCats;
