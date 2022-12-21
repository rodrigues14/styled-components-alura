import {
  fundoClaro, 
  conteudoClaro,
  textofundoClaro,
  fundoEscuro,
  conteudoEscuro,
  textofundoEscuro
} from './variaveis'

export const temaClaro = {
  body: fundoClaro,
  inside: conteudoClaro,
  text: textofundoClaro,
  filter: ''
}

export const temaEscuro = {
  body: fundoEscuro,
  inside: conteudoEscuro,
  text: textofundoEscuro,
  filter: "invert(100%)",
}