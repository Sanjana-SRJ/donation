import React, { useState } from 'react'
import Tabs from 'react-bootstrap/Tabs'
import Category from './Category';
import { response } from './Response'
import Tab from 'react-bootstrap/Tab'
import { useSearchParams } from 'react-router-dom'
import ScrollToTop from "react-scroll-to-top";


export default function Categories() {
  const categoryIds = ["1", "2", "3", "4", "5", "6", "8", "10", "12", "11", "17", "18", "7"] //could be used to change the order of categories being displayed

  const categoryTitle = { 1: "Animal", 2: "Children", 3: "Education", 4: "Elderly", 5: "Medical", 6: "Women", 7: "Others", 8: "Disaster Relief", 10: "Faith", 11: "COVID19", 12: "Hunger", 17: "Disability", 18: "Transgender" }

  const allTab = categoryIds.map((categoryId) => {

    //filtering the items for every category one by one
    let itemsForSpecificCategory = response.filter((item) => {
      let splitedCategories = item.categoryIds.split(",")

      return (splitedCategories.find(e => e === categoryId) !== undefined)

    })
    // creating a category tab for all the items of specific category 
    //checking if the category has at least one item
    if (itemsForSpecificCategory.length) {
      return (

        <Tab eventKey={categoryTitle[categoryId]} title={categoryTitle[categoryId]} key={categoryId}>
          <Category donateItems={itemsForSpecificCategory} />
        </Tab>
      )
    }
  })

  const defaultCategory = "Animal"
  const [searchParams, setSearchParams] = useSearchParams();
  const [key, setKey] = useState(searchParams.has('c') ? searchParams.get('c') : defaultCategory);

  return (
    <>
      <ScrollToTop smooth={true} color={"blue"} />
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => { setKey(k); setSearchParams({ c: k }); }}
        className="mb-3" style={{backgroundColor: "floralwhite"}}>
        {allTab}
      </Tabs>
    </>
  );
}