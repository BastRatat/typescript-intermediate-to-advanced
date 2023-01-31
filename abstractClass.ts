abstract class Book {
  constructor(
    private readonly _author: string,
    private readonly _title: string
  ) {}

  get author() {
    return this._author
  }

  get title() {
    return this._title
  }

  abstract getBookType(): string
}

class PDF extends Book {
  constructor(
    _author: string,
    _title: string
  ) {
    super(_author, _title)
  }

  getBookType() {
    return 'PDF'
  }
}

// TO SUM-UP
// - useful when classes share common behavior
// - the abstract keyword before a method forces its implementation to define the method
// - an abstract class cannot construct object
