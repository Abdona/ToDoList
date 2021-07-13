/* eslint-disable guard-for-in */
import './style.css';
import { CreatList } from './List';

const Tasks = [{ description: 'Task1', completed: true, index: 1 }, { description: 'Task2', completed: false, index: 2 }, { description: 'Task3', completed: false, index: 3 }];
// eslint-disable-next-line no-restricted-syntax
CreatList(Tasks);
