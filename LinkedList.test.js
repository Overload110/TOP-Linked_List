const LinkedList = require('./LinkedList');

describe('LinkedList', () => {
  let list;

  beforeEach(() => {
    list = new LinkedList();
  });

  it('should create an empty linked list', () => {
    expect(list.getHead()).toBeNull();
    expect(list.getSize()).toEqual(0);
  });

  it('should append items correctly', () => {
    list.append(10);
    list.append(20);
    expect(list.getSize()).toEqual(2);
    expect(list.getTail().data).toEqual(20);
  });

  it('should prepend items correctly', () => {
    list.prepend(10);
    list.prepend(20);
    expect(list.getSize()).toEqual(2);
    expect(list.getHead().data).toEqual(20);
  });

  it('should get item at specific index', () => {
    list.append(10);
    list.append(20);
    list.append(30);
    expect(list.getAt(1).data).toEqual(20);
  });

  it('should return correct size of the list', () => {
    expect(list.getSize()).toEqual(0);
    list.append(10);
    expect(list.getSize()).toEqual(1);
    list.append(20);
    expect(list.getSize()).toEqual(2);
  });

  it('should delete the last element from the list', () => {
    list.append(10);
    list.pop();
    expect(list.getSize()).toEqual(0);
  });

  it('should check if list contains certain value', () => {
    list.append(10);
    list.append(20);
    expect(list.contains(10)).toBeTruthy();
    expect(list.contains(30)).toBeFalsy();
  });

  it('should find index of given value', () => {
    list.append(10);
    list.append(20);
    expect(list.find(10)).toEqual(0);
    expect(list.find(30)).toEqual(null);
  });

  it('should convert list to string correctly', () => {
    list.append(10);
    list.append(20);
    list.append(30);
    expect(list.toString()).toEqual('10 -> 20 -> 30 -> null');
  });

  it('should insert at specific index', () => {
    list.insertAt(10, 0);
    list.insertAt(20, 1);
    expect(list.toString()).toEqual('10 -> 20 -> null');
  });

  it('should remove at specific index', () => {
    list.append(10);
    list.append(20);
    list.append(30);
    list.removeAt(1);
    expect(list.toString()).toEqual('10 -> 30 -> null');
  });
});