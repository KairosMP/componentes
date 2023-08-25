const contactPrivate = new Cleave('.contact_private', {
  delimiters: ['(', ')', ' ', '-'],
  blocks: [0, 2, 0, 5, 4],
  numericOnly: true,
});

const contactPublic = new Cleave('.contact_public', {
  delimiters: ['(', ')', ' ', '-'],
  blocks: [0, 2, 0, 5, 4],
  numericOnly: true,
});

const postalCode = new Cleave('#postal_code', {
  delimiters: ['-'],
  blocks: [5, 3],
  numericOnly: true,
});

const physicalPerson = new Cleave('#physical_person', {
  delimiters: ['.', '.', '-'],
  blocks: [3, 3, 3, 2],
  numericOnly: true,
});

const generalRecord = new Cleave('#general_record', {
  delimiters: ['-'],
  blocks: [7, 1],
  numericOnly: true,
});

const peopleLive = new Cleave('#people_live', {
  blocks: [2],
  numericOnly: true,
});

const peopleWork = new Cleave('#people_work', {
  blocks: [2],
  numericOnly: true,
});
