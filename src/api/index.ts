import {Task} from '../typings';

export default class JSONPlacholderAPI {
  static listApiEntry = 'https://mocky.io/v2/';

  static async fetchTasks(userId: string): Promise<Task[]> {
    const url = JSONPlacholderAPI.listApiEntry + `${userId}`;
    const res = await fetch(url);
    const {tasks} = await res.json();
    return tasks;
  }
}
