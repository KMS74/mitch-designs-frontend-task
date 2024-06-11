import Link from "next/link";
import { IoIosArrowBack } from "react-icons/io";

type Props = {
  currentPage: string;
};

const Breadcrumb = ({ currentPage }: Props) => {
  return (
    <nav className="flex my-6" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
        <li className="inline-flex items-center">
          <Link
            href="/"
            className="inline-flex items-center text-primary-950 font-medium"
          >
            الرئيسية
          </Link>
        </li>

        {currentPage && (
          <li aria-current="page">
            <div className="flex items-center">
              <IoIosArrowBack className="text-gray-400" />
              <span className="ms-1 font-medium text-gray-500 md:ms-2">
                {currentPage}
              </span>
            </div>
          </li>
        )}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
