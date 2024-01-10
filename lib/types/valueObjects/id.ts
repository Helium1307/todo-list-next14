import { validate, v4 as uuidv4 } from "uuid";

export class Id {
  constructor(private readonly id: string) {}

  static create(): Id {
    const uuid = uuidv4();
    if (!this.isIdValid(uuid)) {
      throw new Error("Invalid UUID format");
    }
    return new Id(uuid);
  }

  static isIdValid(id: string): boolean {
    const isValid = validate(id);

    return isValid;
  }
}
