export const checkListDuplicates = <T extends { [key: string]: unknown }>(
  sourceList: T[],
  newList: T[],
  key: string
): boolean => {
  const iDs: unknown[] = newList.map(item => item[key]);
  return sourceList.some(item => iDs.includes(item[key]));
};
