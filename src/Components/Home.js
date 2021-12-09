import { React, useState, useEffect } from 'react'
import { Table, Image, Tag } from 'antd';

export default function Home() {
    const [customer, setCustomer] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/photos')
            .then(response => response.json())
            .then(data => setCustomer(data))

    }, [])

    console.log(customer)

 

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
