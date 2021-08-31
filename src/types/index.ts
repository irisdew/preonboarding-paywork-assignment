export type todo = {
  id: string;
  content: string;
  isCheck: boolean;
  createdAt: Date;
};

export type todos = todo[];

export type newContent = {
  id: string;
  content: string;
};

export type newStatus = {
  id: string;
  isCheck: boolean;
};
