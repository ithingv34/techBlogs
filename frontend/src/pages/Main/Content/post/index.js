import PropTypes from 'prop-types';
import CategoryList from './CategoryList';

import { Typography, Tooltip } from '@material-tailwind/react';
import { EyeOutlined, HeartOutlined, ShareAltOutlined } from '@ant-design/icons';

const Post = ({ post }) => {
  const { title, categories, company, imgUrl, date } = post;

  return (
    <>
      <article className="flex flex-col items-start justify-between w-5/6 p-4">
        <div className="flex flex-shink-0 items-center gap-x-4 text-xs">
          <time dateTime={date} className="text-gray-500">
            {date.toLocaleDateString('Ko-kr', { year: 'numeric', month: 'long', day: 'numeric' })}
          </time>
          <CategoryList categories={categories} />
        </div>
        <div className="group relative flex flex-shink-0">
          <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
            <a href="#">
              <span className="absolute inset-0"></span>
              {title}
            </a>
          </h3>
        </div>
        <div className="flex flex-wrap w-full justify-between mt-5">
          <div className="relative flex items-center gap-x-4">
            <img src={imgUrl} alt="" className="h-5 w-5 rounded-full bg-gray-50 object-cover" />
            <div className="text-sm leading-6">
              <p className="font-semibold text-gray-900">
                <a href="#">
                  <span className="absolute inset-0 text-lg"></span>
                  {company}
                </a>
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <Tooltip content="조회수">
              <Typography as="a" variant="text" color="gray">
                <EyeOutlined />
              </Typography>
            </Tooltip>
            <Typography className="mt-1">11</Typography>
            <Tooltip content="좋아요">
              <Typography as="a" variant="text" color="gray">
                <HeartOutlined />
              </Typography>
            </Tooltip>
            <Tooltip content="공유">
              <Typography as="a" variant="text" color="gray">
                <ShareAltOutlined />
              </Typography>
            </Tooltip>
          </div>
        </div>
      </article>
      <hr className="w-5/6" />
    </>
  );
};

Post.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    categories: PropTypes.arrayOf(PropTypes.string).isRequired,
    company: PropTypes.string.isRequired,
    imgUrl: PropTypes.string.isRequired,
    date: PropTypes.instanceOf(Date).isRequired
  }).isRequired
};

export default Post;
