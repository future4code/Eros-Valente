import React from 'react';
import './App.css';
import minhaImagem from './imagensDaPagina/minha-foto.jpg'
import iconeEmail from './imagensDaPagina/email.svg'
import iconeLocation from './imagensDaPagina/location.svg'
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={ minhaImagem }
          nome="Eros Pinder Valente" 
          descricao="Olá, meu nome é Eros Pinder Valente, sou formado em Engenharia Mecânica, mas atualmente estudo para me tornar desenvolvedor web."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />

        <CardPequeno
          imagem={ iconeEmail }
          nome="Email:"
          informacao="eros.pv@gmail.com"
        />

        <CardPequeno
          imagem={ iconeLocation }
          nome="Endereço:"
          informacao="Rua Rio Grande do Sul - São Caetano/SP"  
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais e pessoais</h2>
        <CardGrande
          imagem="https://miro.medium.com/max/3150/2*pq7dg0Y11VmKBSy6qiJdtQ.png"
          nome="Labenu"
          descricao="Estudante no curso de Desenvolvedor Web Full Stack."
        />        
        
        <CardGrande 
          imagem="https://sustentarambiental.com.br/wp-content/uploads/2019/04/licenciamento-ambiental-para-cetesb.png" 
          nome="Cetesb" 
          descricao="Estágio no setor de Avaliação de Emissões Veiculares." 
        />
        
        <CardGrande 
          imagem="https://specto.com.br/wp-content/uploads/2018/02/logo-specto-case-santander-01.png" 
          nome="Santander" 
          descricao="Ouvidoria da Instituição." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
