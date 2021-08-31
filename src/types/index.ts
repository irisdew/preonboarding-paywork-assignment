export type todo = {
  id: string;
  content: string;
  isChecked: boolean;
  createdAt: Date;
};

export type todos = todo[];

export type newContent = {
  content: string;
};

export type newStatus = {
  isChecked: boolean;
};
