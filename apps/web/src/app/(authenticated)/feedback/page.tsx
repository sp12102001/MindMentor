'use client'

import React, { useState, useEffect } from 'react'
import { Button, Form, Input, Typography, Row, Col, Space } from 'antd'
import { SmileOutlined } from '@ant-design/icons'
const { Title, Paragraph } = Typography
import { useAuthentication } from '@web/modules/authentication'
import dayjs from 'dayjs'
import { useSnackbar } from 'notistack'
import { useRouter, useParams } from 'next/navigation'
import { Api, Model } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'

export default function FeedbackPage() {
  const router = useRouter()
  const authentication = useAuthentication()
  const userId = authentication.user?.id
  const { enqueueSnackbar } = useSnackbar()
  const [form] = Form.useForm()

  const handleSubmit = async (values: { content: string }) => {
    try {
      await Api.Feedback.createOneByUserId(userId, {
        content: values.content,
        feedbackDate: dayjs().format('YYYY-MM-DD'),
        userId,
      })
      enqueueSnackbar('Feedback submitted successfully', { variant: 'success' })
      form.resetFields()
    } catch (error) {
      enqueueSnackbar('Failed to submit feedback', { variant: 'error' })
    }
  }

  return (
    <PageLayout layout="full-width">
      <Row justify="center">
        <Col xs={24} sm={18} md={12} lg={8}>
          <Space direction="vertical" size="large" style={{ width: '100%' }}>
            <Title level={2}>
              <SmileOutlined /> Provide Your Feedback
            </Title>
            <Paragraph>
              Your feedback is valuable to us. Please let us know how we can
              improve your experience.
            </Paragraph>
            <Form form={form} layout="vertical" onFinish={handleSubmit}>
              <Form.Item
                name="content"
                label="Feedback"
                rules={[
                  { required: true, message: 'Please input your feedback!' },
                ]}
              >
                <Input.TextArea
                  rows={4}
                  placeholder="Type your feedback here..."
                />
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </Space>
        </Col>
      </Row>
    </PageLayout>
  )
}
