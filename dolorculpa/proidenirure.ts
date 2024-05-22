class People {
  private name: string;
  private age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  public setName(name: string): void {
    this.name = name;
  }

  public getName(): string {
    return this.name;
  }

  public setAge(age: number): void {
    if (age > 0) {
      this.age = age;
    } else {
      throw new Error('Age must be a positive number.');
    }
  }

  public getAge(): number {
    return this.age;
  }
}
