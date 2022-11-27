import '../css/components.css';
import webpacklogo from '../assets/img/webpack.png'

export const greet = ( name ) => {

    console.log('create h1');

    const h1 =document.createElement('h1');
    h1.innerText = `Hello, ${ name }`;

    document.body.append( h1 );
    const img = document.createElement( 'img' );
    img.src = webpacklogo;
    document.body.append( img );
}