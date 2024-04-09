'use client'

import { useEffect, useState } from 'react'
import { Col, Row, Card, Typography, Space } from 'antd'
import { SmileOutlined } from '@ant-design/icons'
const { Title, Paragraph } = Typography
import { useAuthentication } from '@web/modules/authentication'
import dayjs from 'dayjs'
import { useSnackbar } from 'notistack'
import { useRouter, useParams } from 'next/navigation'
import { Api, Model } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'

export default function MentalHealthStrategiesPage() {
  const router = useRouter()
  const { enqueueSnackbar } = useSnackbar()
  const [strategies, setStrategies] = useState([])

  useEffect(() => {
    const fetchStrategies = async () => {
      try {
        const strategiesFound = await Api.MentalHealthStrategy.findMany()
        setStrategies(strategiesFound)
      } catch (error) {
        enqueueSnackbar('Failed to load strategies. Please try again later.', {
          variant: 'error',
        })
      }
    }

    fetchStrategies()
  }, [])

  return (
    <PageLayout layout="full-width">
      <Space direction="vertical" size="large" style={{ width: '100%' }}>
        <Title level={2}>Mental Health Strategies</Title>
        <Paragraph>
          Explore various strategies to improve your mental health. Select the
          ones that resonate with your personal goals.
        </Paragraph>
        <Row gutter={[16, 16]} justify="center">
          {strategies?.map(strategy => (
            <Col key={strategy.id} xs={24} sm={12} md={8} lg={6} xl={4}>
              <Card
                hoverable
                onClick={() => router.push(`/strategies/${strategy.id}`)}
                title={strategy.name}
                cover={
                  <SmileOutlined
                    style={{
                      fontSize: '48px',
                      color: '#1890ff',
                      marginTop: '20px',
                    }}
                  />
                }
              >
                <Card.Meta
                  title={strategy.type}
                  description={`${strategy.description.substring(0, 100)}...`}
                />
                <Paragraph style={{ marginTop: '10px' }}>
                  Updated: {dayjs(strategy.dateUpdated).format('DD/MM/YYYY')}
                </Paragraph>
              </Card>
            </Col>
          ))}
        </Row>
      </Space>
    </PageLayout>
  )
}
