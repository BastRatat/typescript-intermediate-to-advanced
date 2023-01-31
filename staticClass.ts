class Pizza {
  private static pi = 3.14;
  private readonly _perimeter: number;
  private readonly _surface: number;

  constructor(radius: number) {
    this._perimeter = Pizza.computePerimeter(radius)
    this._surface = Pizza.computeSurface(radius)
  }

  get perimeter() {
    return this._perimeter
  }

  get surface() {
    return this._surface
  }

  static computePerimeter(radius: number): number {
    return radius * 2 * Pizza.pi
  }

  static computeSurface(radius: number): number {
    return radius ** 2 * Pizza.pi
  }
}
