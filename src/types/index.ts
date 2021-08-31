export type todo = {
  id: string;
  content: string;
  isCheck: boolean;
  createdAt: Date;
};

export type todos = todo[];

export type newContent = {
  content: string;
};

export type newStatus = {
  isCheck: boolean;
};
