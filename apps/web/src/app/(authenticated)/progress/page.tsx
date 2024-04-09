'use client'

import { useEffect, useState } from 'react'
import { Row, Col, Card, Typography, Spin, Space } from 'antd'
import { SmileOutlined, TagOutlined, MessageOutlined } from '@ant-design/icons'
const { Title, Text } = Typography
import { useAuthentication } from '@web/modules/authentication'
import dayjs from 'dayjs'
import { useSnackbar } from 'notistack'
import { useRouter, useParams } from 'next/navigation'
import { Api, Model } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'

export default function ProgressPage() {
  const router = useRouter()
  const authentication = useAuthentication()
  const userId = authentication.user?.id
  const { enqueueSnackbar } = useSnackbar()
  const [userData, setUserData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!userId) {
      enqueueSnackbar('User not found, redirecting to home...', {
        variant: 'error',
      })
      router.push('/home')
      return
    }

    const fetchData = async () => {
      try {
        const userFound = await Api.User.findOne(userId, {
          includes: [
            'goals',
            'feedbacks',
            'userStrategys',
            'userStrategys.strategy',
          ],
        })
        setUserData(userFound)
      } catch (error) {
        enqueueSnackbar('Failed to fetch user data', { variant: 'error' })
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [userId, router])

  if (loading) {
    return (
      <Spin
        size="large"
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '100vh',
        }}
      />
    )
  }

  return (
    <Row justify="center" style={{ padding: '20px' }}>
      <Col span={24}>
        <Title level={2}>Mental Health Journey Progress</Title>
        <Text>
          This page provides an overview of your mental health journey,
          including goals, strategies, and feedback.
        </Text>
      </Col>
      <Col xs={24} sm={12} md={8} lg={6}>
        <Card
          title="Goals Achieved"
          bordered={false}
          headStyle={{ textAlign: 'center' }}
          bodyStyle={{ textAlign: 'center' }}
        >
          <SmileOutlined style={{ fontSize: '2em' }} />
          <p>
            {userData?.goals?.filter(goal => goal.status === 'Achieved').length}{' '}
            Achieved
          </p>
        </Card>
      </Col>
      <Col xs={24} sm={12} md={8} lg={6}>
        <Card
          title="Strategies Employed"
          bordered={false}
          headStyle={{ textAlign: 'center' }}
          bodyStyle={{ textAlign: 'center' }}
        >
          <TagOutlined style={{ fontSize: '2em' }} />
          <p>{userData?.userStrategys?.length} Strategies</p>
        </Card>
      </Col>
      <Col xs={24} sm={12} md={8} lg={6}>
        <Card
          title="Feedback Provided"
          bordered={false}
          headStyle={{ textAlign: 'center' }}
          bodyStyle={{ textAlign: 'center' }}
        >
          <MessageOutlined style={{ fontSize: '2em' }} />
          <p>{userData?.feedbacks?.length} Feedbacks</p>
        </Card>
      </Col>
      <Col span={24}>
        <Space direction="vertical" size="large" style={{ width: '100%' }}>
          <Title level={3}>Recent Goals</Title>
          {userData?.goals?.slice(0, 3)?.map(goal => (
            <Card key={goal.id}>
              <Text>
                <b>Goal:</b> {goal.description}
              </Text>
              <br />
              <Text>
                <b>Status:</b> {goal.status}
              </Text>
              <br />
              <Text>
                <b>Target Date:</b>{' '}
                {dayjs(goal.targetDate).format('DD/MM/YYYY')}
              </Text>
            </Card>
          ))}
        </Space>
      </Col>
    </Row>
  )
}
