class PriorityQueue {
  priorities: any[][];

  constructor(priorities: number) {
    this.priorities = [];

    for (let i = 0; i < priorities; i++) {
      this.priorities[i] = [];
    }
  }

  public append(item: any, priority: number): void {
    this.priorities[priority].push(item);
  }
  public prepend(item: any, priority: number): void {
    this.priorities[priority].unshift(item);
  }

  public peek(): any {
    let index = this.lowest_priority_with_items();
    if (index === null) {
      return null;
    }

    return this.priorities[index][0];
  }
  public pop(): any {
    let index = this.lowest_priority_with_items();
    if (index === null) {
      return null;
    }

    return this.priorities[index].shift();
  }

  private lowest_priority_with_items(): number | null {
    for (let i = 0; i < this.priorities.length; i++) {
      if (this.priorities[i].length > 0) {
        return i;
      }
    }
    return null;
  }
}

export { PriorityQueue };
