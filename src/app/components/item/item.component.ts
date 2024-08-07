import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output } from '@angular/core';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Item } from 'src/app/interfaces/iItem';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit, OnChanges, OnDestroy {
  @Input() item!: Item;
  @Output() emitindoItemParaEditar = new EventEmitter();
  @Output() emitindoIdParaDeletar = new EventEmitter();

  faPen = faPen;
  faTrash = faTrash

  constructor() { }

  ngOnChanges() {}

  ngOnInit(): void {}

  editarItem() {
    this.emitindoItemParaEditar.emit(this.item);
  }

  checkItem() {
    this.item.comprado = !this.item.comprado
  }

  deletearItem() {
    this.emitindoIdParaDeletar.emit(this.item.id);
  }

  ngOnDestroy() {
    console.log('Foi removido um item da lista');
  }
}
