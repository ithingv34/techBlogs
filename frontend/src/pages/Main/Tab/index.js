import React from 'react';
import { Tabs, TabsHeader, TabsBody, Tab, TabPanel } from '@material-tailwind/react';

const TabMenu = () => {
  const [activeTab, setActiveTab] = React.useState('html');
  const data = [
    {
      label: 'Category',
      value: 'html',
      desc: `It really matters and then like it really doesn't matter.
      What matters is the people who are sparked by it. And the people 
      who are like offended by it, it doesn't matter.`
    },
    {
      label: 'Company',
      value: 'react',
      desc: `Because it's about motivating the doers. Because I'm here
      to follow my dreams and inspire other people to follow their dreams, too.`
    },
    {
      label: 'Search',
      value: 'vue',
      desc: `We're not always in the position that we want to be at.
      We're constantly growing. We're constantly making mistakes. We're
      constantly trying to express ourselves and actualize our dreams.`
    }
  ];
  return (
    <div className="md:w-5/6 lg:w-full mt-5">
      <Tabs value={activeTab}>
        <TabsHeader
          className="w-5/6 md:w-3/4 rounded-none border-b border-blue-gray-50 bg-transparent p-0"
          indicatorProps={{
            className: 'bg-transparent border-b-2 border-blue-500 shadow-none rounded-none'
          }}
        >
          {data.map(({ label, value }) => (
            <Tab key={value} value={value} onClick={() => setActiveTab(value)} className={activeTab === value ? 'text-blue-500' : ''}>
              {label}
            </Tab>
          ))}
        </TabsHeader>
        <TabsBody className="w-4/5">
          {data.map(({ value, desc }) => (
            <TabPanel key={value} value={value}>
              {desc}
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
    </div>
  );
};

export default TabMenu;
