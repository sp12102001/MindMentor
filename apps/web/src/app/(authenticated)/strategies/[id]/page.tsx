'use client'

import React, { useEffect, useState } from 'react'
import { Typography, Spin, Card, Row, Col, Statistic, Tag } from 'antd'
import { LikeOutlined, MessageOutlined } from '@ant-design/icons'
const { Title, Text, Paragraph } = Typography
import { useAuthentication } from '@web/modules/authentication'
import dayjs from 'dayjs'
import { useSnackbar } from 'notistack'
import { useRouter, useParams } from 'next/navigation'
import { Api, Model } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'

export default function StrategyDetailsPage() {
  const { enqueueSnackbar } = useSnackbar()
  const params = useParams<any>()
  const strategyId = params.id
  const [strategyDetails, setStrategyDetails] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchStrategyDetails = async () => {
      try {
        const details = await Api.MentalHealthStrategy.findOne(strategyId, {
          includes: ['userStrategysAsStrategy', 'userStrategysAsStrategy.user'],
        })
        setStrategyDetails(details)
      } catch (error) {
        enqueueSnackbar('Failed to fetch strategy details', {
          variant: 'error',
        })
      } finally {
        setLoading(false)
      }
    }

    if (strategyId) {
      fetchStrategyDetails()
    }
  }, [strategyId])

  return (
    <PageLayout layout="full-width">
      <Spin spinning={loading}>
        <Row justify="center">
          <Col xs={24} sm={24} md={12} lg={10} xl={8}>
            <Card>
              <Title level={2}>{strategyDetails?.name}</Title>
              <Tag color="blue">{strategyDetails?.type}</Tag>
              <Paragraph>{strategyDetails?.description}</Paragraph>
              <Statistic
                title="Engagement"
                value={strategyDetails?.userStrategysAsStrategy?.length}
                prefix={<LikeOutlined />}
              />
              <Statistic
                title="Last Updated"
                value={dayjs(strategyDetails?.dateUpdated).format(
                  'MMMM D, YYYY',
                )}
                prefix={<MessageOutlined />}
                style={{ marginTop: 16 }}
              />
            </Card>
          </Col>
        </Row>
      </Spin>
    </PageLayout>
  )
}
