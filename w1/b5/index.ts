export class Rectangle {
  private length: number;
  private width: number;

  constructor(length: number, width: number) {
    this.length = length;
    this.width = width;
  }

  @checkLog
  public caculateArea(): number {
    return this.length * this.width;
  }

  testMethod(arg1: string, arg2: number) {
    console.log('Inside myMethod');
    return arg1 + ' ' + arg2;
  }
}

function checkLog(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  const originalMethod = descriptor.value

  descriptor.value = function (...args: any[]) {
    console.log(`Calling method ${propertyKey} with arguments: ${args}`)
    const result = originalMethod.apply(this, args)
    console.log(`Method ${propertyKey} returned: ${result}`)
    return result
  };

  return descriptor
}
