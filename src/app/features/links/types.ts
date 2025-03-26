export type ApiLink = {
  id: string;
  title: string;
  url: string;
  description: string;
  tags?: string[];
};

export type ApiLinks = ApiLink[];
