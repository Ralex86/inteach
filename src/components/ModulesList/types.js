export type ReactElement = React.Element<*>;

export type Card = {
  id: string,
  title: string
};

export type Courses = {
  id: string,
  title: string,
  cards: Array<Card>
};

export type Module = {
  id: string,
  name: string,
  courses: Array<Courses>
};
