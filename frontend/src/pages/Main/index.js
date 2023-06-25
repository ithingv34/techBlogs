import { useState } from 'react';
import Content from './Content';
import RightPanel from './RightPanel';
import TabMenu from './Tab';

const posts = [
  {
    id: 1,
    title: 'Amazon Web Services: A Comprehensive Guide ',
    categories: ['Cloud/Infra', 'Web Development'],
    company: '카카오엔터테인먼트FE',
    imgUrl: 'https://techblogposts.com/_next/image?url=%2FcompanyIcons%2Fkakaoent.png&w=1920&q=75',
    date: new Date()
  },
  {
    id: 2,
    title: 'Building Mobile Apps with React Native',
    categories: ['Client-side', 'iOS', 'Android'],
    company: '카카오엔터테인먼트FE',
    imgUrl: 'https://techblogposts.com/_next/image?url=%2FcompanyIcons%2Fkakaoent.png&w=1920&q=75',
    date: new Date()
  },
  {
    id: 3,
    title: 'Machine Learning: Introduction and Applications',
    categories: ['Data/AI'],
    company: '카카오엔터테인먼트FE',
    imgUrl: 'https://techblogposts.com/_next/image?url=%2FcompanyIcons%2Fkakaoent.png&w=1920&q=75',
    date: new Date()
  },
  {
    id: 43423424,
    title: 'Blockchain Technology: Exploring the Future',
    categories: ['Blockchain'],
    company: '카카오엔터테인먼트FE',
    imgUrl: 'https://techblogposts.com/_next/image?url=%2FcompanyIcons%2Fkakaoent.png&w=1920&q=75',
    date: new Date()
  },
  {
    id: 525234234,
    title: 'Cybersecurity: Protecting Your Digital Assets',
    categories: ['Security Engineering'],
    company: '카카오엔터테인먼트FE',
    imgUrl: 'https://techblogposts.com/_next/image?url=%2FcompanyIcons%2Fkakaoent.png&w=1920&q=75',
    date: new Date()
  },
  {
    id: 1154656424,
    title: 'Amazon Web Services: A Comprehensive Guide ',
    categories: ['Cloud/Infra', 'Web Development'],
    company: '카카오엔터테인먼트FE',
    imgUrl: 'https://techblogposts.com/_next/image?url=%2FcompanyIcons%2Fkakaoent.png&w=1920&q=75',
    date: new Date()
  },
  {
    id: 123254535,
    title: 'Building Mobile Apps with React Native',
    categories: ['Client-side', 'iOS', 'Android'],
    company: '카카오엔터테인먼트FE',
    imgUrl: 'https://techblogposts.com/_next/image?url=%2FcompanyIcons%2Fkakaoent.png&w=1920&q=75',
    date: new Date()
  },
  {
    id: 323423231,
    title: 'Machine Learning: Introduction and Applications',
    categories: ['Data/AI'],
    company: '카카오엔터테인먼트FE',
    imgUrl: 'https://techblogposts.com/_next/image?url=%2FcompanyIcons%2Fkakaoent.png&w=1920&q=75',
    date: new Date()
  },
  {
    id: 1413424234,
    title: 'Blockchain Technology: Exploring the Future',
    categories: ['Blockchain'],
    company: '카카오엔터테인먼트FE',
    imgUrl: 'https://techblogposts.com/_next/image?url=%2FcompanyIcons%2Fkakaoent.png&w=1920&q=75',
    date: new Date()
  },
  {
    id: 5234241,
    title: 'Cybersecurity: Protecting Your Digital Assets',
    categories: ['Security Engineering'],
    company: '카카오엔터테인먼트FE',
    imgUrl: 'https://techblogposts.com/_next/image?url=%2FcompanyIcons%2Fkakaoent.png&w=1920&q=75',
    date: new Date()
  },
  {
    id: 5456455,
    title: 'Cybersecurity: Protecting Your Digital Assets',
    categories: ['Security Engineering'],
    company: '카카오엔터테인먼트FE',
    imgUrl: 'https://techblogposts.com/_next/image?url=%2FcompanyIcons%2Fkakaoent.png&w=1920&q=75',
    date: new Date()
  },
  {
    id: 11234234,
    title: 'Amazon Web Services: A Comprehensive Guide ',
    categories: ['Cloud/Infra', 'Web Development'],
    company: '카카오엔터테인먼트FE',
    imgUrl: 'https://techblogposts.com/_next/image?url=%2FcompanyIcons%2Fkakaoent.png&w=1920&q=75',
    date: new Date()
  },
  {
    id: 14564564562,
    title: 'Building Mobile Apps with React Native',
    categories: ['Client-side', 'iOS', 'Android'],
    company: '카카오엔터테인먼트FE',
    imgUrl: 'https://techblogposts.com/_next/image?url=%2FcompanyIcons%2Fkakaoent.png&w=1920&q=75',
    date: new Date()
  },
  {
    id: 31234234,
    title: 'Machine Learning: Introduction and Applications',
    categories: ['Data/AI'],
    company: '카카오엔터테인먼트FE',
    imgUrl: 'https://techblogposts.com/_next/image?url=%2FcompanyIcons%2Fkakaoent.png&w=1920&q=75',
    date: new Date()
  },
  {
    id: 1134134,
    title: 'Blockchain Technology: Exploring the Future',
    categories: ['Blockchain'],
    company: '카카오엔터테인먼트FE',
    imgUrl: 'https://techblogposts.com/_next/image?url=%2FcompanyIcons%2Fkakaoent.png&w=1920&q=75',
    date: new Date()
  },
  {
    id: 534534351,
    title: 'Cybersecurity: Protecting Your Digital Assets',
    categories: ['Security Engineering'],
    company: '카카오엔터테인먼트FE',
    imgUrl: 'https://techblogposts.com/_next/image?url=%2FcompanyIcons%2Fkakaoent.png&w=1920&q=75',
    date: new Date()
  },
  {
    id: 5123123,
    title: 'Cybersecurity: Protecting Your Digital Assets',
    categories: ['Security Engineering'],
    company: '카카오엔터테인먼트FE',
    imgUrl: 'https://techblogposts.com/_next/image?url=%2FcompanyIcons%2Fkakaoent.png&w=1920&q=75',
    date: new Date()
  },
  {
    id: 1112312,
    title: 'Amazon Web Services: A Comprehensive Guide ',
    categories: ['Cloud/Infra', 'Web Development'],
    company: '카카오엔터테인먼트FE',
    imgUrl: 'https://techblogposts.com/_next/image?url=%2FcompanyIcons%2Fkakaoent.png&w=1920&q=75',
    date: new Date()
  },
  {
    id: 1222,
    title: 'Building Mobile Apps with React Native',
    categories: ['Client-side', 'iOS', 'Android'],
    company: '카카오엔터테인먼트FE',
    imgUrl: 'https://techblogposts.com/_next/image?url=%2FcompanyIcons%2Fkakaoent.png&w=1920&q=75',
    date: new Date()
  },
  {
    id: 33453451,
    title: 'Machine Learning: Introduction and Applications',
    categories: ['Data/AI'],
    company: '카카오엔터테인먼트FE',
    imgUrl: 'https://techblogposts.com/_next/image?url=%2FcompanyIcons%2Fkakaoent.png&w=1920&q=75',
    date: new Date()
  },
  {
    id: 14345345,
    title: 'Blockchain Technology: Exploring the Future',
    categories: ['Blockchain'],
    company: '카카오엔터테인먼트FE',
    imgUrl: 'https://techblogposts.com/_next/image?url=%2FcompanyIcons%2Fkakaoent.png&w=1920&q=75',
    date: new Date()
  },
  {
    id: 53453451,
    title: 'Cybersecurity: Protecting Your Digital Assets',
    categories: ['Security Engineering'],
    company: '카카오엔터테인먼트FE',
    imgUrl: 'https://techblogposts.com/_next/image?url=%2FcompanyIcons%2Fkakaoent.png&w=1920&q=75',
    date: new Date()
  }
];

const MainPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const handleCategoryFilter = (category) => {
    setSelectedCategory(category === selectedCategory ? 'All' : category);
  };

  const filteredPosts = selectedCategory !== 'All' ? posts.filter((post) => post.categories.includes(selectedCategory)) : posts;

  const allCategories = ['All', ...new Set(posts.flatMap((post) => post.categories))];

  return (
    <>
      <main className="flex flex-col justify-content items-center w-full ml-5 md:ml-0 md:order-1 md:w-4/5 lg:order-2 lg:w-9/12">
        <TabMenu allCategories={allCategories} selectedCategory={selectedCategory} handleCategoryFilter={handleCategoryFilter} />
        <Content posts={filteredPosts} />
      </main>
      <aside className="hidden md:flex md:items-center md:justify-center md:flex-col md:order-2 md:w-1/5 lg:order-3 lg:w-2/12 fixed inset-y-0 right-0 md:mr-10">
        <RightPanel allCategories={allCategories} selectedCategory={selectedCategory} handleCategoryFilter={handleCategoryFilter} />
      </aside>
    </>
  );
};

export default MainPage;
