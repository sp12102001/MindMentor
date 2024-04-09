'use client'

import React from 'react'
import { Typography, Row, Col, Card } from 'antd'
import {
  RocketOutlined,
  InfoCircleOutlined,
  SmileOutlined,
} from '@ant-design/icons'
const { Title, Paragraph } = Typography
import { useAuthentication } from '@web/modules/authentication'
import dayjs from 'dayjs'
import { useSnackbar } from 'notistack'
import { useRouter, useParams } from 'next/navigation'
import { Api, Model } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'

export default function Home() {
  return (
    <PageLayout layout="full-width">
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px' }}>
        <Title level={1}>Welcome to MindMentor AI</Title>
        <Paragraph>
          Your journey to a better mental health starts here. Discover how our
          AI-powered solutions can assist you.
        </Paragraph>

        <Row gutter={[16, 16]} style={{ marginTop: '20px' }}>
          <Col xs={24} md={12} lg={8}>
            <Card
              hoverable
              style={{ width: '100%' }}
              cover={
                <RocketOutlined
                  style={{
                    fontSize: '48px',
                    color: '#1890ff',
                    margin: '20px 0',
                  }}
                />
              }
            >
              <Card.Meta
                title="Innovative AI"
                description="Explore the cutting-edge AI technologies driving our services."
              />
            </Card>
          </Col>
          <Col xs={24} md={12} lg={8}>
            <Card
              hoverable
              style={{ width: '100%' }}
              cover={
                <InfoCircleOutlined
                  style={{
                    fontSize: '48px',
                    color: '#1890ff',
                    margin: '20px 0',
                  }}
                />
              }
            >
              <Card.Meta
                title="About Us"
                description="Learn more about our mission, vision, and the team behind MindMentor AI."
              />
            </Card>
          </Col>
          <Col xs={24} md={12} lg={8}>
            <Card
              hoverable
              style={{ width: '100%' }}
              cover={
                <SmileOutlined
                  style={{
                    fontSize: '48px',
                    color: '#1890ff',
                    margin: '20px 0',
                  }}
                />
              }
            >
              <Card.Meta
                title="Our Services"
                description="Discover how our services can help you achieve your mental health goals."
              />
            </Card>
          </Col>
        </Row>
      </div>
    </PageLayout>
  )
}
