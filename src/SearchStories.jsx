import { Button, Input, Space } from 'antd';
import React, { useState } from 'react'
import 'antd/dist/antd.css';

// const axios = require('axios').default;

const SearchStories = () => {

    const [val, setVal] = useState('funny')
    const [data, setData] = useState([])
    const [history, setHistory] = useState('')


    const fetchData = async () => {
        const res = await fetch(`https://hn.algolia.com/api/v1/search?query=${val}&page=0`);
        res
          .json()
          .then(res => setData(res))
    } 

    React.useEffect(() => {
        // fetchData();
    }, []);



  return (
    <div>
        <h1> My Hacker Stories</h1>
        <br />
        <Space style={{marginBotton: '10px'}}>
            <span style={{fontSize: '20px'}}> Search:  </span> 
            <Input placeholder="Enter keyword..." onInput={e => setVal(e.target.value)} />
            <Button type="primary" onClick={() => {}}>Submit</Button>            
        </Space>
        <br /> 
        <br />
        <div className='history'>
            {history}
            <Button type="danger" style={{margin: '10px'}}> Geo </Button>
            <Button type="danger" style={{margin: '10px'}}> Funny </Button>
            <Button type="danger" > hello </Button>
        </div>
        <hr />
        <div style={{backgroundColor: 'lightgray', padding: '10px'}}>
            {data}
            <p> <b><a href="#">Otonomo, with nearly $55M in funding, is cloning our product</a></b> sahaskatta </p>
            <p> <b><a href="#">Otonomo, with nearly $55M in funding, is cloning our product</a></b> sahaskatta </p>
            <p> <b><a href="#">Otonomo, with nearly $55M in funding, is cloning our product</a></b> sahaskatta </p>
            <p> <b><a href="#">Otonomo, with nearly $55M in funding, is cloning our product</a></b> sahaskatta </p>
            <p> <b><a href="#">Otonomo, with nearly $55M in funding, is cloning our product</a></b> sahaskatta </p> 
            <p> <b><a href="#">Otonomo, with nearly $55M in funding, is cloning our product</a></b> sahaskatta </p>
            <p> <b><a href="#">Otonomo, with nearly $55M in funding, is cloning our product</a></b> sahaskatta </p>
        </div>
    </div>
  )
}

export default SearchStories