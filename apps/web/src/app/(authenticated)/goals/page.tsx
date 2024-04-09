'use client'

import { useEffect, useState } from 'react'
import {
  Typography,
  Row,
  Col,
  Card,
  Button,
  Modal,
  Form,
  Input,
  DatePicker,
  Select,
} from 'antd'
import { PlusOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons'
const { Title, Text } = Typography
const { Option } = Select
import { useAuthentication } from '@web/modules/authentication'
import dayjs from 'dayjs'
import { useSnackbar } from 'notistack'
import { useRouter, useParams } from 'next/navigation'
import { Api, Model } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'

export default function MyGoalsPage() {
  const router = useRouter()
  const { enqueueSnackbar } = useSnackbar()
  const authentication = useAuthentication()
  const userId = authentication.user?.id
  const [goals, setGoals] = useState([])
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [form] = Form.useForm()

  useEffect(() => {
    if (userId) {
      Api.Goal.findManyByUserId(userId, { includes: ['user'] })
        .then(setGoals)
        .catch(() =>
          enqueueSnackbar('Failed to fetch goals', { variant: 'error' }),
        )
    }
  }, [userId])

  const showModal = () => {
    setIsModalVisible(true)
  }

  const handleOk = () => {
    form
      .validateFields()
      .then(values => {
        const formattedValues = {
          ...values,
          targetDate: values.targetDate.format('YYYY-MM-DD'),
        }
        Api.Goal.createOneByUserId(userId, formattedValues)
          .then(newGoal => {
            setGoals([...goals, newGoal])
            enqueueSnackbar('Goal added successfully', { variant: 'success' })
            setIsModalVisible(false)
            form.resetFields()
          })
          .catch(() =>
            enqueueSnackbar('Failed to add goal', { variant: 'error' }),
          )
      })
      .catch(info => {
        console.log('Validate Failed:', info)
      })
  }

  const handleCancel = () => {
    setIsModalVisible(false)
  }

  return (
    <PageLayout layout="full-width">
      <Title>My Goals</Title>
      <Text>
        Manage and reflect on your personal mental health and productivity
        goals.
      </Text>
      <Button
        type="primary"
        icon={<PlusOutlined />}
        onClick={showModal}
        style={{ marginBottom: '20px' }}
      >
        Add Goal
      </Button>
      <Row gutter={[16, 16]}>
        {goals?.map(goal => (
          <Col xs={24} sm={12} md={8} lg={6} key={goal.id}>
            <Card
              title={dayjs(goal.targetDate).format('YYYY-MM-DD')}
              actions={[
                <EditOutlined key="edit" />,
                <DeleteOutlined
                  key="delete"
                  onClick={() => {
                    Api.Goal.deleteOne(goal.id).then(() => {
                      setGoals(goals.filter(g => g.id !== goal.id))
                      enqueueSnackbar('Goal deleted successfully', {
                        variant: 'success',
                      })
                    })
                  }}
                />,
              ]}
            >
              <Text>{goal.description}</Text>
            </Card>
          </Col>
        ))}
      </Row>
      <Modal
        title="Add New Goal"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form form={form} layout="vertical" name="form_in_modal">
          <Form.Item
            name="description"
            label="Description"
            rules={[
              {
                required: true,
                message: 'Please input the description of the goal!',
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="targetDate"
            label="Target Date"
            rules={[
              {
                required: true,
                message: 'Please select the target date!',
              },
            ]}
          >
            <DatePicker />
          </Form.Item>
          <Form.Item
            name="status"
            label="Status"
            rules={[
              {
                required: true,
                message: 'Please select the status!',
              },
            ]}
          >
            <Select placeholder="Select a status">
              <Option value="Not Started">Not Started</Option>
              <Option value="In Progress">In Progress</Option>
              <Option value="Completed">Completed</Option>
            </Select>
          </Form.Item>
        </Form>
      </Modal>
    </PageLayout>
  )
}
