import { Menu } from 'antd';
import React from 'react';


function MenuItem({ items }) {
  return items?.map((item) => ( //?: If items is null or undefined, the expression returns undefined without throwing an error, and the rest of the code won’t execute.
    <Menu.Item key={item.id}>
      <a href={item.url} target="_blank" rel="noopener noreferrer">
        {`${item.broadcaster_name} - ${item.title}`}
      </a>
    </Menu.Item>
  )
  )
}


export default MenuItem;