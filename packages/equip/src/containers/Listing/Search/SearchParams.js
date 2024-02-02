// default data for filter elements
export const priceInit = {
  0: '$0',
  100: '$100',
};

export const calenderItem = {
  separator: '-',
  format: 'MM-DD-YYYY',
  locale: 'en',
};

export const getEquipmentType = {
  id: 1,
  name: 'Equipment Type',
  identifier: 'features',
  options: [
    { label: 'Plumbing', value: 'plumbing' },
    { label: 'Electric', value: 'electric' },
    { label: 'Saws', value: 'saws' },
  ],
};

export const getPropertyType = {
  id: 2,
  name: 'Location',
  identifier: 'property-type',
  options: [
    { label: 'This', value: 'villa' },
    { label: 'Needs', value: 'hotel' },
    { label: 'to', value: 'resort' },
    { label: 'change', value: 'cottage' },
  ],
};
