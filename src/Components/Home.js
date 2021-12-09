import { React, useState, useEffect } from 'react'
import { Table, Image, Tag } from 'antd';

export default function Home() {
    const [customer, setCustomer] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/photos')
            .then(response => response.json())
            .then(data => setCustomer(data));

    }, [])

    console.log(customer)

    const data = [
        {
            key: '1',
            name: 'John Brown',
            age: 32,
            address: 'New York No. 1 Lake Park',
            tags: ['nice', 'developer'],
        },
        {
            key: '2',
            name: 'Jim Green',
            age: 42,
            address: 'London No. 1 Lake Park',
            tags: ['loser'],
        },
        {
            key: '3',
            name: 'Joe Black',
            age: 32,
            address: 'Sidney No. 1 Lake Park',
            tags: ['cool', 'teacher'],
        },
    ];

    const columns = [
        {
            title: 'Mã hình ảnh',
            dataIndex: 'id',
            key: 'id',
            render: text =>{
                return <Tag color = {text %2===0 ? 'green' :'yellow'}>{text}</Tag>} 
        },
        {
            title: 'Tiêu đề',
            dataIndex: 'title',
            key: 'title',
            render: text =>{
                return <p>{text.toUpperCase()}</p>} 
        },
        {
            title: 'Ảnh',
            dataIndex: 'url',
            key: 'url',
            render: text => <Image
                width={80}
                src={text}
            />
        },
        {
            title: 'Album',
            dataIndex: 'albumId',
            key: 'albumId',
               
        },
        
    ]
    return (
        <div>
            <Table rowKey="id" dataSource={customer} columns={columns} />
        </div>
    )
}
