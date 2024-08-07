import { Item } from 'src/app/interfaces/iItem';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListaDeCompraService {

  private listaDeCompra: Item[];

  constructor() {
    this.listaDeCompra = JSON.parse(localStorage.getItem('itens') || '[]');
  }

  getListaDeCompra(){
    return this.listaDeCompra;
  }

  criarItem(nomeDOItem :string) {
    const id = this.listaDeCompra.length + 1;
    const item : Item = {
      id: id,
      nome: nomeDOItem,
      data: new Date().toLocaleString('pt-BR'),
      comprado: false
    }
    return item;
  }

  adicionarItemNaLista(nomeDoItem: string) {
    const item = this.criarItem(nomeDoItem);
    this.listaDeCompra.push(item);
  }

  editarItemDaLista(intemAntigo: Item, nomeEditadoDoItem: string) {
    const itemEditado : Item = {
      id: intemAntigo.id,
      nome: nomeEditadoDoItem,
      data: intemAntigo.data,
      comprado: intemAntigo.comprado
    }
    const id = intemAntigo.id;
    this.listaDeCompra.splice(Number(id) -1, 1, itemEditado);
  }

  atualizarLocalStorage() {
    localStorage.setItem('itens', JSON.stringify(this.listaDeCompra));
  }

}
