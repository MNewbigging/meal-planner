import { observable } from 'mobx';
import { createId } from './utils/createId';

export class Tag {
  id: string;
  @observable color = '';
  @observable name = '';

  constructor(id?: string) {
    this.id = id ?? createId();
  }
}
