interface groceryDataType{
  name: string;
  quantity?: string;
}

const groceryData: groceryDataType[] = [
  {
    name: 'broccoli',
    quantity: '12oz',
  },
  {
    name: 'pasta',
    quantity: '12oz',
  },
  {
    name: 'diet cola',
    quantity: '20oz',
  },
  {
    name: 'basil',
    quantity: '6oz',
  },
];

export default groceryData;