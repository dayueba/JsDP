class Factory {
  create(name) {
    if (name === 'car') {
      return new Car()
    } else if (name === 'ship') {
      return new Ship()
    }
  }
}

class Car {
  constructor() {
    this.name = 'car'
  }
}

class Ship{
  constructor() {
    this.name = 'ship'
  }
}

const main = () => {
  const factory = new Factory()
  const thing = factory.create('car')
  console.log(thing.name)
}


main()