
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const ShopByCategory = () => {
    // function MyTabs() {
    //     const [activeTab, setActiveTab] = useState(0);
      
    //     const handleTabChange = (index) => {
    //       setActiveTab(index);
    //     }}

    return (
        <div>
            {/* selectedIndex={activeTab} onSelect={handleTabChange} */}
            <Tabs >
                <TabList>
                    <Tab>Marvel</Tab>
                    <Tab>Avengers</Tab>
                    <Tab>Star Wars</Tab>
                </TabList>

                <TabPanel>
                    <h2>Content 1</h2>
                    <p>Tab 1 content goes here.</p>
                </TabPanel>
                <TabPanel>
                    <h2>Content 2</h2>
                    <p>Tab 2 content goes here.</p>
                </TabPanel>
                <TabPanel>
                    <h2>Content 3</h2>
                    <p>Tab 3 content goes here.</p>
                </TabPanel>
            </Tabs>

        </div>
    );
};

export default ShopByCategory;