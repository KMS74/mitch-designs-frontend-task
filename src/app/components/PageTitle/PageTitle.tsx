type Props = {
  title: string;
};

const PageTitle = ({ title }: Props) => {
  return <h1 className="text-black text-4xl font-bold mb-4">{title}</h1>;
};

export default PageTitle;
