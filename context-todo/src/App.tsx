import { Tabs, Input, Button, Flex, Checkbox, Typography } from 'antd'
import type { TabsProps } from 'antd'
import { DeleteOutlined } from '@ant-design/icons'

const { Text } = Typography

const items: TabsProps['items'] = [
	{
		key: '1',
		label: 'All',
		children: (
			<>
				<Flex gap="small">
					<Input placeholder="Please enter todo" />
					<Button type="primary">Add</Button>
				</Flex>
				<br />
				<Flex vertical>
					<Checkbox>
						<Text>Learn javascript</Text>
					</Checkbox>
					<Checkbox>
						<Text>Learn javascript</Text>
					</Checkbox>
					<Checkbox>
						<Text>Learn javascript</Text>
					</Checkbox>
				</Flex>

				<Flex gap="small" justify="end">
					<Button type="primary" danger>
						Delete All
					</Button>
				</Flex>
			</>
		),
	},
	{
		key: '2',
		label: 'Completed',
		children: (
			<>
				<Flex gap="small">
					<Input placeholder="Please enter todo" />
					<Button type="default">Search</Button>
				</Flex>
				<br />
				<Flex justify="space-between">
					<Text>Learn javascript</Text>
					<Button danger shape="circle" icon={<DeleteOutlined />}></Button>
				</Flex>
			</>
		),
	},
]

const onChange = (key: string) => {
	console.log(key)
}

function App() {
	return (
		<>
			<h1>Todo Tracker</h1>
			<Tabs defaultActiveKey="1" items={items} onChange={onChange} />
		</>
	)
}

export default App
