import { v4 as uuidv4 } from "uuid";
export class Task {
  constructor(
    id: string = uuidv4(),
    name: string,
    subjectId: string = uuidv4()
  ) {
    this.id = id;
    this.name = name;
    this.subjectId = subjectId;
  }

  id: string;
  name: string;
  subjectId: string;
}
